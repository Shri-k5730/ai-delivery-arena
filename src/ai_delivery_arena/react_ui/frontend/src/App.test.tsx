import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import App, { type ArenaModel } from "./App";

afterEach(() => {
  cleanup();
  window.localStorage.clear();
  vi.useRealTimers();
});

const base: ArenaModel = {
  product: {
    name: "AI Delivery Arena",
    tagline: "Judgment under pressure",
    version: "0.4.0",
    status: "Hosted Beta",
  },
  screen: "marketing",
  configured: true,
  authenticated: false,
  links: {
    github: "https://github.com/example/arena",
    privacy: "https://github.com/example/arena/privacy",
    terms: "https://github.com/example/arena/terms",
  },
};

const run = {
  run_id: "attempt-one",
  revision: 1,
  status: "in_progress",
  progress: { completed: 0, total: 20, percent: 0 },
  stage: { id: "S1", label: "Mandate", purpose: "Frame the programme" },
  current_decision: {
    id: "D01",
    title: "Define the mandate",
    week: 1,
    moment: "The sponsor asks for an immediate commitment.",
    information: "The baseline is incomplete.",
    required_response: "Record a bounded decision.",
    options: [
      { id: "A", label: "Commit the full programme." },
      { id: "B", label: "Bound the pilot and define exit criteria." },
    ],
  },
  credits: { used: 0, total: 10, remaining: 10 },
  evidence: [
    {
      id: "EV-POLICY-01",
      title: "AI policy",
      state: "available",
      reveal: "The preferred model is not approved.",
      cost: 0,
      lead_time_weeks: 0,
    },
  ],
  crises: [],
  operational_signals: [],
  history: [],
  ledger: { entries: 1, head: "abc" },
};

describe("AI Delivery Arena React product", () => {
  it("renders the public product proposition and account access", () => {
    render(<App data={base} emit={vi.fn()} />);
    expect(
      screen.getByText("Enterprise AI leadership,", { exact: false }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Enter the Arena" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument();
  });

  it("renders the decision cockpit without assessment leakage", () => {
    render(
      <App
        data={{
          ...base,
          screen: "decision",
          configured: false,
          local_mode: true,
          authenticated: true,
          run,
          stages: [
            { id: "S1", label: "Mandate", decision_ids: ["D01"] },
            { id: "S2", label: "Discovery", decision_ids: ["D02"] },
          ],
          draft: {
            option_id: null,
            rationale: "",
            assumptions: "",
            owner: "",
            acceptance_condition: "",
            risk: "",
            evidence_refs: [],
            terminal_route: "conditional_release",
          },
        }}
        emit={vi.fn()}
      />,
    );
    expect(screen.getByText("D01. Define the mandate")).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: /Bound the pilot/ })).toBeInTheDocument();
    expect(screen.queryByText(/^G1$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/terminal_health/i)).not.toBeInTheDocument();
  });

  it("explains evidence mechanics without exposing an answer path", () => {
    render(
      <App
        data={{
          ...base,
          screen: "briefing",
          configured: false,
          local_mode: true,
          authenticated: true,
          briefing: {
            scenario: { premise: "A fixed synthetic enterprise mandate." },
            stages: [],
          },
        }}
        emit={vi.fn()}
      />,
    );
    expect(screen.getByText("How evidence and signals work")).toBeInTheDocument();
    expect(screen.getByText("Cite now")).toBeInTheDocument();
    expect(screen.getByText("Order for later")).toBeInTheDocument();
    expect(screen.getByText("Due Week X")).toBeInTheDocument();
    expect(screen.queryByText(/best answer/i)).not.toBeInTheDocument();
  });

  it("keeps new signal and evidence badges until each context is opened", () => {
    const activityRun = {
      ...run,
      revision: 5,
      operational_signals: [
        "The sponsor accepts the bounded scope.",
        "Finance marks the benefit claim provisional.",
      ],
      evidence: [
        ...run.evidence,
        {
          id: "EV-FINANCE-01",
          title: "Finance baseline review",
          state: "available",
          reveal: "The baseline cannot yet support the headline claim.",
          cost: 1,
          lead_time_weeks: 2,
          request_week: 1,
          arrival_week: 3,
        },
        {
          id: "EV-USER-01",
          title: "Buyer observation study",
          state: "requestable",
          reveal: null,
          cost: 1,
          lead_time_weeks: 1,
          request_week: null,
          arrival_week: null,
        },
        {
          id: "EV-VOLUME-01",
          title: "Transaction-volume model",
          state: "requested",
          reveal: null,
          cost: 1,
          lead_time_weeks: 1,
          request_week: 2,
          arrival_week: 4,
        },
      ],
    };
    render(
      <App
        data={{
          ...base,
          screen: "decision",
          configured: false,
          local_mode: true,
          authenticated: true,
          run: activityRun,
          stages: [{ id: "S1", label: "Mandate", decision_ids: ["D01"] }],
          draft: {
            option_id: null,
            rationale: "",
            assumptions: "",
            owner: "",
            acceptance_condition: "",
            risk: "",
            evidence_refs: [],
            terminal_route: "conditional_release",
          },
        }}
        emit={vi.fn()}
      />,
    );

    expect(screen.getByText("Changes since your last decision")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Signals · 2 new/ })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Evidence · 1 arrived/ })).toBeInTheDocument();
    expect(screen.getAllByText("Cite now").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Order for later").length).toBeGreaterThan(0);
    expect(screen.getByText("Due Week 4")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /View signals/ }));
    expect(screen.getByRole("tab", { name: "Signals" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Evidence · 1 arrived/ })).toBeInTheDocument();
    expect(screen.getByText("Changes since your last decision")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /View evidence/ }));
    expect(screen.getByRole("tab", { name: "Evidence" })).toBeInTheDocument();
    expect(screen.queryByText("Changes since your last decision")).not.toBeInTheDocument();
  });

  it("buffers drafts immediately and batches cloud sync after ten seconds", () => {
    vi.useFakeTimers();
    const emit = vi.fn();
    const view = {
      ...base,
      screen: "decision",
      configured: false,
      local_mode: true,
      authenticated: true,
      run,
      stages: [{ id: "S1", label: "Mandate", decision_ids: ["D01"] }],
      draft: {
        option_id: null,
        rationale: "",
        assumptions: "",
        owner: "",
        acceptance_condition: "",
        risk: "",
        evidence_refs: [],
        terminal_route: "conditional_release",
      },
    };
    const first = render(<App data={view} emit={emit} />);
    fireEvent.change(
      screen.getByPlaceholderText(/State what you will do/),
      { target: { value: "Recovered local rationale" } },
    );

    expect(screen.getAllByText("Saved on this device").length).toBeGreaterThan(0);
    expect(
      Array.from({ length: window.localStorage.length }, (_, index) =>
        window.localStorage.key(index),
      ).some((key) => key?.startsWith("ai-delivery-arena:draft:")),
    ).toBe(true);

    act(() => vi.advanceTimersByTime(9_999));
    expect(
      emit.mock.calls.some(([type]) => type === "save_draft"),
    ).toBe(false);
    act(() => vi.advanceTimersByTime(1));
    expect(emit).toHaveBeenCalledWith(
      "save_draft",
      expect.objectContaining({
        run_id: "attempt-one",
        decision_id: "D01",
        expected_revision: 1,
        sync_id: expect.any(String),
        draft: expect.objectContaining({
          rationale: "Recovered local rationale",
        }),
      }),
    );

    first.unmount();
    render(<App data={view} emit={vi.fn()} />);
    expect(screen.getByDisplayValue("Recovered local rationale")).toBeInTheDocument();
  });

  it("forces the current draft into review and navigation actions", () => {
    const emit = vi.fn();
    const actionRun = {
      ...run,
      evidence: [
        ...run.evidence,
        {
          id: "EV-USER-01",
          title: "Buyer observation study",
          state: "requestable",
          reveal: null,
          cost: 1,
          lead_time_weeks: 1,
        },
      ],
    };
    render(
      <App
        data={{
          ...base,
          screen: "decision",
          configured: false,
          local_mode: true,
          authenticated: true,
          run: actionRun,
          stages: [{ id: "S1", label: "Mandate", decision_ids: ["D01"] }],
          draft: {
            option_id: null,
            rationale: "",
            assumptions: "",
            owner: "",
            acceptance_condition: "",
            risk: "",
            evidence_refs: [],
            terminal_route: "conditional_release",
          },
        }}
        emit={emit}
      />,
    );

    fireEvent.click(screen.getByRole("radio", { name: /Bound the pilot/ }));
    fireEvent.change(screen.getByPlaceholderText(/State what you will do/), {
      target: {
        value:
          "Use a bounded pilot because the current evidence supports controlled scope.",
      },
    });
    fireEvent.change(screen.getByPlaceholderText("Named role or person"), {
      target: { value: "CPO" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("A measurable threshold or condition"),
      { target: { value: "Stop when the agreed threshold is missed." } },
    );
    fireEvent.change(screen.getByPlaceholderText("What must remain true?"), {
      target: { value: "The sponsor accepts a bounded pilot." },
    });
    fireEvent.change(screen.getByPlaceholderText("What could invalidate this action?"), {
      target: { value: "The baseline may fail validation." },
    });
    fireEvent.click(screen.getByRole("button", { name: /EV-USER-01.*Order for later/ }));
    fireEvent.click(screen.getByRole("button", { name: "Order for later" }));
    expect(emit).toHaveBeenCalledWith(
      "request_evidence",
      expect.objectContaining({
        evidence_id: "EV-USER-01",
        sync_id: expect.any(String),
        run_id: "attempt-one",
        decision_id: "D01",
        expected_revision: 1,
        draft: expect.objectContaining({ option_id: "B", owner: "CPO" }),
      }),
    );

    fireEvent.click(screen.getByRole("button", { name: /Review decision/ }));
    expect(emit).toHaveBeenCalledWith(
      "review_decision",
      expect.objectContaining({
        run_id: "attempt-one",
        decision_id: "D01",
        expected_revision: 1,
        draft: expect.objectContaining({ option_id: "B", owner: "CPO" }),
      }),
    );

    fireEvent.click(screen.getByRole("button", { name: "Run centre" }));
    expect(emit).toHaveBeenCalledWith(
      "navigate",
      expect.objectContaining({
        view: "centre",
        run_id: "attempt-one",
        decision_id: "D01",
        expected_revision: 1,
        draft: expect.objectContaining({ option_id: "B", owner: "CPO" }),
      }),
    );
  });

  it("renders a consequence boundary after permanent commitment", () => {
    render(
      <App
        data={{
          ...base,
          screen: "consequence",
          local_mode: true,
          authenticated: true,
          run: { ...run, revision: 2 },
          consequence: {
            decision_id: "D01",
            choice: "Bound the pilot and define exit criteria.",
            signals: ["The sponsor accepts the bounded scope."],
            crises: [],
            evidence_arrived: [],
            completed: false,
            next_decision: "D02",
          },
        }}
        emit={vi.fn()}
      />,
    );
    expect(screen.getByText("D01 is now permanent.")).toBeInTheDocument();
    expect(screen.getByText("The sponsor accepts the bounded scope.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Continue to D02/ })).toBeInTheDocument();
  });

  it("renders the executive debrief and export actions", () => {
    render(
      <App
        data={{
          ...base,
          screen: "debrief",
          authenticated: true,
          run: { ...run, status: "completed", progress: { completed: 20, total: 20, percent: 100 } },
          report: {
            recommendation: "Conditional release",
            scope_assessed: "Release only after the named control tests pass.",
            release_valid: true,
            reported_overall: 74.5,
            provisional_label: "Integrated",
            gates: [{ gate_id: "G1", name: "Authority", status: "pass", reason: "Authority stayed human." }],
            timeline: new Array(20).fill(null).map((_, index) => ({ decision_id: `D${String(index + 1).padStart(2, "0")}` })),
            strengths: [],
            development_needs: [],
            perspectives: [],
            dimensions: [],
            notice: "Not independently calibrated.",
          },
          completed_run_document: { run: { run_id: "attempt-one" } },
        }}
        emit={vi.fn()}
      />,
    );
    expect(screen.getByText("Conditional release")).toBeInTheDocument();
    expect(screen.getByText("74.5")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Evidence pack/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Completed run/ })).toBeInTheDocument();
  });
});
