const state = {
  bootstrap: null,
  run: null,
  report: null,
};

const $ = (id) => document.getElementById(id);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-GB").format(value);
}

function defaultRunName() {
  const stamp = new Date()
    .toISOString()
    .slice(0, 16)
    .replaceAll("-", "")
    .replace("T", "-")
    .replace(":", "");
  return `first-attempt-${stamp}`;
}

function availableRunName(runs) {
  const base = defaultRunName();
  const existing = new Set(runs.map((run) => run.run_id));
  if (!existing.has(base)) return base;
  let suffix = 2;
  while (existing.has(`${base}-${suffix}`)) suffix += 1;
  return `${base}-${suffix}`;
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  let body = {};
  try {
    body = await response.json();
  } catch {
    body = {};
  }
  if (!response.ok) {
    throw new Error(body.error || `Request failed (${response.status})`);
  }
  return body;
}

function showToast(message, error = false) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.remove("hidden", "error");
  if (error) toast.classList.add("error");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.add("hidden"), 4200);
}

function setBusy(button, busy, label = "Working...") {
  if (!button) return;
  if (busy) {
    if (button.dataset.busy === "true") return;
    button.dataset.original = button.textContent;
    button.dataset.busy = "true";
    button.textContent = label;
    button.disabled = true;
  } else {
    button.textContent = button.dataset.original || button.textContent;
    button.disabled = false;
    delete button.dataset.original;
    delete button.dataset.busy;
  }
}

async function initialize() {
  try {
    state.bootstrap = await api("/api/bootstrap");
    renderLanding();
    bindGlobalActions();
  } catch (error) {
    showToast(error.message, true);
  }
}

function bindGlobalActions() {
  $("startRun").addEventListener("click", startRun);
  $("runName").addEventListener("input", syncStartAction);
  $("resumeLatestRun").addEventListener("click", () => {
    const runId = $("resumeLatestRun").dataset.run;
    if (runId) loadRun(runId);
  });
  $("homeButton").addEventListener("click", async () => {
    $("workspace").classList.add("hidden");
    $("debrief").classList.add("hidden");
    $("landing").classList.remove("hidden");
    $("topbarRun").classList.add("hidden");
    state.bootstrap = await api("/api/bootstrap");
    renderLanding();
  });
  $("showContract").addEventListener("click", () => {
    $("responseRequirement").classList.toggle("hidden");
  });
  $("decisionForm").addEventListener("submit", commitDecision);
}

function renderLanding() {
  const scenario = state.bootstrap.scenario;
  $("scenarioPremise").textContent = scenario.premise;
  const runs = state.bootstrap.runs || [];
  $("runName").value = availableRunName(runs);
  $("scenarioStats").innerHTML = [
    [scenario.decision_count, "consequential decisions"],
    [scenario.stage_count, "delivery stages"],
    [scenario.investigation_credits, "investigation credits"],
    [`€${formatNumber(scenario.budget_eur)}`, "fixed envelope"],
  ]
    .map(
      ([value, label]) => `
        <div class="stat">
          <strong>${escapeHtml(value)}</strong>
          <span>${escapeHtml(label)}</span>
        </div>`,
    )
    .join("");

  const preferredRun =
    runs.find((run) => run.status !== "completed") || runs[0] || null;
  if (preferredRun) {
    const nextDecision = Math.min(preferredRun.completed + 1, preferredRun.total);
    $("savedRunCard").classList.remove("hidden");
    $("launchDivider").classList.remove("hidden");
    $("savedRunName").textContent = preferredRun.run_id;
    $("savedRunProgress").textContent =
      preferredRun.status === "completed"
        ? `Completed · ${preferredRun.completed} / ${preferredRun.total} decisions`
        : `Saved after D${String(preferredRun.completed).padStart(2, "0")} · next is D${String(nextDecision).padStart(2, "0")}`;
    $("resumeLatestRun").dataset.run = preferredRun.run_id;
    $("resumeLatestRun").textContent =
      preferredRun.status === "completed"
        ? "Open frozen debrief"
        : `Resume at D${String(nextDecision).padStart(2, "0")}`;
  } else {
    $("savedRunCard").classList.add("hidden");
    $("launchDivider").classList.add("hidden");
    delete $("resumeLatestRun").dataset.run;
  }

  $("runList").innerHTML = runs.length
    ? runs
        .map(
          (run) => `
            <article class="run-row">
              <div>
                <strong>${escapeHtml(run.run_id)}</strong>
                <span>${escapeHtml(run.status.replaceAll("_", " "))} ·
                  ${run.completed}/${run.total} decisions</span>
              </div>
              <button
                class="button button-secondary resume-run"
                type="button"
                data-run="${escapeHtml(run.run_id)}"
              >
                ${run.status === "completed" ? "Open debrief" : "Resume"}
              </button>
            </article>`,
        )
        .join("")
    : `<div class="empty-state">No saved runs yet. Your first attempt will appear here automatically.</div>`;

  document.querySelectorAll(".resume-run").forEach((button) => {
    button.addEventListener("click", () => loadRun(button.dataset.run));
  });
  syncStartAction();
}

function matchingRun() {
  const runId = $("runName").value.trim();
  return (state.bootstrap.runs || []).find((run) => run.run_id === runId) || null;
}

function syncStartAction() {
  const button = $("startRun");
  if (button.dataset.busy === "true") return;
  const existing = matchingRun();
  button.textContent = existing
    ? existing.status === "completed"
      ? "Open existing debrief"
      : "Resume existing run"
    : "Start first attempt";
}

async function startRun() {
  const button = $("startRun");
  setBusy(button, true, "Starting...");
  try {
    const existing = matchingRun();
    if (existing) {
      await loadRun(existing.run_id);
      showToast(
        existing.status === "completed"
          ? "Frozen debrief opened. No decision was changed."
          : "Saved run resumed. Committed decisions remain unchanged.",
      );
      return;
    }
    state.run = await api("/api/runs", {
      method: "POST",
      body: JSON.stringify({ run_id: $("runName").value.trim() }),
    });
    renderRun();
  } catch (error) {
    showToast(error.message, true);
  } finally {
    setBusy(button, false);
  }
}

async function loadRun(runId) {
  try {
    state.run = await api(`/api/runs/${encodeURIComponent(runId)}`);
    if (state.run.status === "completed") {
      await loadDebrief();
    } else {
      renderRun();
    }
  } catch (error) {
    showToast(error.message, true);
  }
}

function renderRun() {
  const run = state.run;
  $("landing").classList.add("hidden");
  $("debrief").classList.add("hidden");
  $("workspace").classList.remove("hidden");
  $("topbarRun").classList.remove("hidden");
  $("topbarRunName").textContent = run.run_id;
  $("saveStatus").textContent = `Saved · revision ${run.revision}`;
  $("stageLabel").textContent = run.stage.label;
  $("stagePurpose").textContent = run.stage.purpose;
  $("decisionCounter").textContent = `${run.progress.completed} / ${run.progress.total}`;
  $("progressFill").style.width = `${run.progress.percent}%`;
  $("creditsRemaining").textContent = run.credits.remaining;
  renderStages();
  renderHistory();
  renderEvidence();
  renderSignals();
  renderDecision();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderStages() {
  const completed = new Set(state.run.history.map((item) => item.decision_id));
  $("stageNav").innerHTML = state.bootstrap.stages
    .map((stage) => {
      const isComplete = stage.decision_ids.every((id) => completed.has(id));
      const classes = [
        "stage-item",
        state.run.stage.id === stage.id ? "active" : "",
        isComplete ? "complete" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return `<div class="${classes}">${escapeHtml(stage.label)}</div>`;
    })
    .join("");
}

function renderHistory() {
  $("historyList").innerHTML = state.run.history.length
    ? state.run.history
        .slice()
        .reverse()
        .map(
          (item) => `
            <div class="history-item">
              <strong>${escapeHtml(item.decision_id)} · ${escapeHtml(item.title)}</strong>
              ${escapeHtml(item.choice_label || "Custom action")}
            </div>`,
        )
        .join("")
    : `<div class="empty-state">Committed decisions will appear here.</div>`;
}

function renderSignals() {
  const signals = state.run.operational_signals.slice(-4);
  $("signalStrip").innerHTML = signals.length
    ? signals
        .map((signal) => `<span class="signal-pill">${escapeHtml(signal)}</span>`)
        .join("")
    : `<span class="signal-pill">Initial brief loaded. No consequence signal yet.</span>`;
}

function evidenceClass(item) {
  if (item.state === "available" || item.state === "verified") return "available";
  if (item.state === "requested") return "requested";
  return "";
}

function renderEvidence() {
  $("evidenceList").innerHTML = state.run.evidence
    .map((item) => {
      const requestable = item.state === "requestable" && state.run.credits.remaining >= item.cost;
      const timing = item.cost === 0
        ? "Included"
        : `${item.cost} credit · ${item.lead_time_weeks} week lead`;
      const stateLabel = item.state.replaceAll("_", " ");
      const detail = item.reveal
        ? `<p>${escapeHtml(item.reveal)}</p>`
        : item.state === "requested"
          ? `<p>Requested in week ${item.request_week}. Expected in week ${item.arrival_week}.</p>`
          : `<p>Finding remains sealed until the request arrives.</p>`;
      return `
        <article class="evidence-item ${evidenceClass(item)}">
          <div class="evidence-item-head">
            <h3>${escapeHtml(item.title)}</h3>
            <span class="evidence-state">${escapeHtml(stateLabel)}</span>
          </div>
          ${detail}
          <div class="evidence-meta">
            <span>${escapeHtml(timing)}</span>
            ${
              requestable
                ? `<button class="request-evidence" type="button" data-evidence="${escapeHtml(item.id)}">Request</button>`
                : ""
            }
          </div>
        </article>`;
    })
    .join("");

  document.querySelectorAll(".request-evidence").forEach((button) => {
    button.addEventListener("click", () => requestEvidence(button));
  });
}

function captureDraft() {
  const selected = document.querySelector('input[name="decision-option"]:checked');
  return {
    option: selected?.value || "",
    rationale: $("rationale").value,
    assumptions: $("assumptions").value,
    owner: $("owner").value,
    acceptance: $("acceptance").value,
    risk: $("risk").value,
    citations: [...document.querySelectorAll('input[name="citation"]:checked')].map(
      (input) => input.value,
    ),
    terminalRoute: $("terminalRoute").value,
  };
}

function restoreDraft(draft) {
  if (!draft) return;
  const option = document.querySelector(
    `input[name="decision-option"][value="${CSS.escape(draft.option)}"]`,
  );
  if (option) option.checked = true;
  $("rationale").value = draft.rationale;
  $("assumptions").value = draft.assumptions;
  $("owner").value = draft.owner;
  $("acceptance").value = draft.acceptance;
  $("risk").value = draft.risk;
  draft.citations.forEach((reference) => {
    const input = document.querySelector(
      `input[name="citation"][value="${CSS.escape(reference)}"]`,
    );
    if (input) input.checked = true;
  });
  $("terminalRoute").value = draft.terminalRoute;
  toggleCustomRoute();
}

async function requestEvidence(button) {
  const draft = captureDraft();
  setBusy(button, true, "...");
  try {
    state.run = await api(
      `/api/runs/${encodeURIComponent(state.run.run_id)}/evidence`,
      {
        method: "POST",
        body: JSON.stringify({
          evidence_id: button.dataset.evidence,
          expected_revision: state.run.revision,
        }),
      },
    );
    renderRun();
    restoreDraft(draft);
    showToast("Evidence request saved.");
  } catch (error) {
    showToast(error.message, true);
    setBusy(button, false);
  }
}

function renderDecision() {
  const decision = state.run.current_decision;
  setBusy($("commitDecision"), false);
  $("decisionId").textContent = decision.id;
  $("decisionWeek").textContent = `Week ${decision.week}`;
  $("decisionTitle").textContent = decision.title;
  $("decisionMoment").textContent = decision.moment;
  $("decisionInformation").textContent =
    decision.information || "Use the scenario brief, evidence desk, and prior consequences.";
  $("responseRequirement").textContent = decision.required_response;
  $("responseRequirement").classList.add("hidden");
  $("customRoute").classList.add("hidden");

  const currentCrisis = state.run.crises.find(
    (item) => item.linked_decision === decision.id,
  );
  if (currentCrisis) {
    $("crisisCard").classList.remove("hidden");
    $("crisisText").textContent = currentCrisis.observation;
  } else {
    $("crisisCard").classList.add("hidden");
    $("crisisText").textContent = "";
  }

  $("optionList").innerHTML = decision.options
    .map(
      (option, index) => `
        <label class="option-card">
          <input
            type="radio"
            name="decision-option"
            value="${escapeHtml(option.id)}"
            ${decision.options.length === 1 && index === 0 ? "checked" : ""}
            required
          />
          <span class="option-letter">${escapeHtml(option.id)}</span>
          <span class="option-copy">${escapeHtml(option.label)}</span>
        </label>`,
    )
    .join("");
  document.querySelectorAll('input[name="decision-option"]').forEach((input) => {
    input.addEventListener("change", toggleCustomRoute);
  });

  $("rationale").value = "";
  $("assumptions").value = "";
  $("owner").value = "";
  $("acceptance").value = "";
  $("risk").value = "";
  renderCitations(currentCrisis);
}

function toggleCustomRoute() {
  const selected = document.querySelector('input[name="decision-option"]:checked');
  const isCustomFinal =
    state.run.current_decision?.id === "D20" && selected?.value === "F";
  $("customRoute").classList.toggle("hidden", !isCustomFinal);
}

function renderCitations(currentCrisis) {
  const available = state.run.evidence.filter(
    (item) => item.state === "available" || item.state === "verified",
  );
  const entries = available.map((item) => ({
    id: item.id,
    title: item.title,
  }));
  if (currentCrisis) {
    entries.push({
      id: currentCrisis.evidence_ref,
      title: `Observed event ${currentCrisis.id}`,
    });
  }
  $("citationList").innerHTML = entries.length
    ? entries
        .map(
          (item) => `
            <label class="citation-chip">
              <input type="checkbox" name="citation" value="${escapeHtml(item.id)}" />
              ${escapeHtml(item.title)}
            </label>`,
        )
        .join("")
    : `<span class="empty-state">No evidence is available to cite yet.</span>`;
}

async function commitDecision(event) {
  event.preventDefault();
  const button = $("commitDecision");
  if (button.dataset.busy === "true") return;
  const selected = document.querySelector('input[name="decision-option"]:checked');
  if (!selected) {
    showToast("Select an action before committing.", true);
    return;
  }
  setBusy(button, true, "Committing...");
  const payload = {
    expected_revision: state.run.revision,
    decision_id: state.run.current_decision.id,
    option_id: selected.value,
    rationale: $("rationale").value,
    assumptions: $("assumptions").value,
    owner: $("owner").value,
    acceptance_condition: $("acceptance").value,
    risk: $("risk").value,
    evidence_refs: [...document.querySelectorAll('input[name="citation"]:checked')].map(
      (input) => input.value,
    ),
    terminal_route: $("terminalRoute").value,
  };

  try {
    state.run = await api(
      `/api/runs/${encodeURIComponent(state.run.run_id)}/decisions`,
      { method: "POST", body: JSON.stringify(payload) },
    );
    if (state.run.status === "completed") {
      await loadDebrief();
    } else {
      renderRun();
      showToast(`${payload.decision_id} committed. The run is saved.`);
    }
  } catch (error) {
    showToast(error.message, true);
  } finally {
    setBusy(button, false);
  }
}

async function loadDebrief() {
  try {
    state.report = await api(
      `/api/runs/${encodeURIComponent(state.run.run_id)}/debrief`,
    );
    renderDebrief();
  } catch (error) {
    showToast(error.message, true);
  }
}

function gateStatusClass(status) {
  if (status === "pass") return "status-pass";
  if (status === "fail") return "status-fail";
  return "status-unresolved";
}

function renderDebrief() {
  const report = state.report;
  $("landing").classList.add("hidden");
  $("workspace").classList.add("hidden");
  $("debrief").classList.remove("hidden");
  $("topbarRun").classList.remove("hidden");
  $("topbarRunName").textContent = report.run_id;
  $("saveStatus").textContent = "First attempt frozen";

  const gateRows = report.gates
    .map(
      (gate) => `
        <tr>
          <td><strong>${escapeHtml(gate.gate_id)}</strong><br />${escapeHtml(gate.title)}</td>
          <td><span class="status-badge ${gateStatusClass(gate.status)}">${escapeHtml(gate.status)}</span></td>
          <td>${escapeHtml(gate.reason)}</td>
          <td>${gate.overall_cap ? `Overall cap ${gate.overall_cap}` : "No cap"}</td>
        </tr>`,
    )
    .join("");

  const dimensionCards = report.dimensions
    .map(
      (dimension) => `
        <article class="dimension-card">
          <div class="dimension-head">
            <h3>${escapeHtml(dimension.label)}</h3>
            <strong>${dimension.reported_score.toFixed(1)}</strong>
          </div>
          <div class="score-track">
            <div class="score-fill" style="width:${Math.max(0, Math.min(100, dimension.reported_score))}%"></div>
          </div>
          ${
            dimension.cap
              ? `<p>Raw ${dimension.raw_score.toFixed(1)}. Capped at ${dimension.cap} by a critical gate.</p>`
              : ""
          }
          <div class="criterion-list">
            ${dimension.criteria
              .map(
                (criterion) => `
                  <div class="criterion-row" title="${escapeHtml(criterion.reason)}">
                    <span>${escapeHtml(criterion.id)} · ${escapeHtml(criterion.name)}</span>
                    <strong>${criterion.score}</strong>
                  </div>`,
              )
              .join("")}
          </div>
        </article>`,
    )
    .join("");

  const strengths = report.strengths
    .map(
      (item) => `
        <article class="insight-card">
          <h3>${escapeHtml(item.criterion_id)} · ${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.why)} Evidence: ${escapeHtml(item.evidence.join(", ") || "none cited")}.</p>
        </article>`,
    )
    .join("");
  const needs = report.development_needs
    .map(
      (item) => `
        <article class="insight-card">
          <h3>${escapeHtml(item.criterion_id)} · ${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.priority)}</p>
        </article>`,
    )
    .join("");

  const perspectives = report.perspectives
    .map(
      (item) => `
        <article class="perspective">
          <span>${escapeHtml(item.role)} view</span>
          <strong>${item.score.toFixed(1)}</strong>
          <p>${escapeHtml(item.view)}</p>
        </article>`,
    )
    .join("");

  const timeline = report.timeline
    .map(
      (item) => `
        <div class="timeline-item">
          <div class="timeline-id">${escapeHtml(item.decision_id)}</div>
          <div class="timeline-copy">
            <strong>${escapeHtml(item.title)} · ${escapeHtml(item.choice)}</strong>
            <span>${escapeHtml(item.rationale)}</span>
            ${
              item.signals.length
                ? `<span>Observed: ${escapeHtml(item.signals.join(" "))}</span>`
                : ""
            }
          </div>
        </div>`,
    )
    .join("");

  const programState = report.dimensions
    .map((dimension) => {
      const value = report.program_state[dimension.id];
      return value === undefined
        ? ""
        : `<div class="criterion-row"><span>${escapeHtml(dimension.label)}</span><strong>${value.toFixed(1)}</strong></div>`;
    })
    .join("");

  $("debriefContent").innerHTML = `
    <section class="debrief-hero">
      <div>
        <span class="panel-kicker">Frozen first attempt · ${escapeHtml(report.scenario)}</span>
        <h1>${escapeHtml(report.recommendation)}</h1>
        <p>${escapeHtml(report.scope_assessed)}</p>
      </div>
      <div class="overall-score">
        <strong>${report.release_valid ? "Valid" : "Invalid"}</strong>
        <span>release gate status</span>
        <small>${escapeHtml(report.run_id)}</small>
      </div>
    </section>

    <div class="debrief-actions">
      <button class="button button-secondary" id="downloadReport" type="button">Download JSON</button>
      <button class="button button-primary" id="printReport" type="button">Print report</button>
    </div>

    <section class="report-section">
      <h2>Critical gates</h2>
      <p>Critical failures cannot be compensated by a strong aggregate score.</p>
      <div class="table-wrap">
        <table class="gate-table">
          <thead><tr><th>Gate</th><th>Status</th><th>Factual reason</th><th>Treatment</th></tr></thead>
          <tbody>${gateRows}</tbody>
        </table>
      </div>
    </section>

    <section class="report-section">
      <h2>Seven-dimension assessment</h2>
      <p>Scores come from the criterion anchors and recorded evidence, not hidden program health.</p>
      <div class="dimension-grid">${dimensionCards}</div>
    </section>

    <section class="report-section">
      <h2>What the run demonstrated</h2>
      <p>Strongest recorded judgments and the highest-priority changes for a replay.</p>
      <div class="two-column">
        <div><span class="panel-kicker">Three strengths</span>${strengths}</div>
        <div><span class="panel-kicker">Three development priorities</span>${needs}</div>
      </div>
    </section>

    <section class="report-section">
      <h2>Executive perspectives</h2>
      <p>CIO, CISO, and CFO lenses applied to the same frozen evidence.</p>
      <div class="perspective-grid">${perspectives}</div>
    </section>

    <section class="report-section">
      <h2>Consequential decision timeline</h2>
      <p>The first attempt remains immutable. Later replays must be stored separately.</p>
      <div class="timeline">${timeline}</div>
    </section>

    <section class="report-section">
      <h2>Secondary overall summary</h2>
      <div class="two-column">
        <article class="insight-card">
          <h3>${report.reported_overall.toFixed(1)} · ${escapeHtml(report.provisional_label)}</h3>
          <p>Raw overall ${report.raw_overall.toFixed(1)}${
            report.overall_cap ? `. Reported result capped at ${report.overall_cap}` : ""
          }.</p>
        </article>
        <article class="insight-card">
          <h3>Scenario-state trace</h3>
          <div class="criterion-list">${programState || "Stored in the downloaded evidence pack."}</div>
        </article>
      </div>
      <div class="notice">${escapeHtml(report.notice)}</div>
    </section>
  `;

  $("downloadReport").addEventListener("click", downloadReport);
  $("printReport").addEventListener("click", () => window.print());
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function downloadReport() {
  const blob = new Blob([JSON.stringify(state.report, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${state.report.run_id}-arena-debrief.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

initialize();
