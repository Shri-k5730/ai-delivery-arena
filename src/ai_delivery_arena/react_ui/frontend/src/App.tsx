import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  Clock3,
  Cloud,
  Download,
  ExternalLink,
  Eye,
  FileCheck2,
  FileJson,
  Github,
  History,
  Info,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Menu,
  Pencil,
  RefreshCcw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  Trash2,
  Upload,
  UserRound,
  WalletCards,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import {
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type JsonMap = Record<string, any>;

export type ArenaModel = {
  product: {
    name: string;
    tagline: string;
    version: string;
    status: string;
  };
  screen: string;
  configured?: boolean;
  local_mode?: boolean;
  authenticated?: boolean;
  user?: { id: string; email: string } | null;
  links?: {
    github?: string;
    privacy?: string;
    terms?: string;
    feedback?: string;
    incident?: string;
  };
  canary?: {
    admission_ready?: boolean;
    feedback_ready?: boolean;
    incident_ready?: boolean;
    allow_local_mode?: boolean;
    ready?: boolean;
  };
  notice?: { kind: string; message: string } | null;
  marketing?: JsonMap;
  centre?: JsonMap;
  briefing?: JsonMap;
  run?: JsonMap;
  stages?: JsonMap[];
  draft?: Draft;
  sync?: JsonMap | null;
  consequence?: JsonMap;
  report?: JsonMap;
  run_context?: JsonMap;
  comparison?: JsonMap;
  completed_run_document?: JsonMap | null;
  fatal?: { title: string; message: string };
};

type Draft = {
  option_id: string | null;
  rationale: string;
  assumptions: string;
  owner: string;
  acceptance_condition: string;
  risk: string;
  evidence_refs: string[];
  terminal_route: string;
};

type SeenActivity = {
  signalCount: number;
  evidenceIds: string[];
};

type BufferedDraft = {
  draft: Draft;
  updatedAt: string;
  synced: string | null;
};

type Emit = (type: string, payload?: Record<string, unknown>) => void;

const EMPTY_DRAFT: Draft = {
  option_id: null,
  rationale: "",
  assumptions: "",
  owner: "",
  acceptance_condition: "",
  risk: "",
  evidence_refs: [],
  terminal_route: "conditional_release",
};

const STAGE_ICONS = [Target, Search, Zap, ShieldCheck, BadgeCheck];

const PUBLIC_GATES = [
  ["G1", "Commercial authority", "Binding supplier or commercial actions require an authorized human."],
  ["G2", "Data and model permission", "Released data flows and model routes must be explicitly permitted."],
  ["G3", "Evaluation sufficiency", "Acceptance needs segmented thresholds, severity, abstention and an authorized acceptor."],
  ["G4", "Severe cohort failure", "A known materially failing cohort must be blocked, excluded or safely routed."],
  ["G5", "Accountable ownership", "A material risk needs an owner who has authority to accept it."],
  ["G6", "Claim integrity", "Material value, accuracy, cost and readiness claims must follow the evidence."],
  ["G7", "Operational control", "Action-capable AI needs usable monitoring, incident ownership, containment and rollback."],
] as const;

function cx(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

function dateLabel(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function activityStorageKey(data: ArenaModel, runId: string): string {
  const owner = data.user?.id ?? (data.local_mode ? "local" : "participant");
  return `ai-delivery-arena:seen-activity:${owner}:${runId}`;
}

function draftStorageKey(
  data: ArenaModel,
  runId: string,
  decisionId: string,
  revision: number,
): string {
  const owner = data.user?.id ?? (data.local_mode ? "local" : "participant");
  return `ai-delivery-arena:draft:${owner}:${runId}:${decisionId}:${revision}`;
}

function clearRunBrowserData(data: ArenaModel, runId: string): void {
  if (typeof window === "undefined") return;
  const owner = data.user?.id ?? (data.local_mode ? "local" : "participant");
  const prefixes = [
    `ai-delivery-arena:draft:${owner}:${runId}:`,
    `ai-delivery-arena:seen-activity:${owner}:${runId}`,
  ];
  const keys = Array.from(
    { length: window.localStorage.length },
    (_, index) => window.localStorage.key(index),
  ).filter((key): key is string => Boolean(key));
  keys.forEach((key) => {
    if (prefixes.some((prefix) => key.startsWith(prefix))) {
      window.localStorage.removeItem(key);
    }
  });
}

function serializeDraft(draft: Draft): string {
  return JSON.stringify({
    acceptance_condition: draft.acceptance_condition,
    assumptions: draft.assumptions,
    evidence_refs: [...draft.evidence_refs],
    option_id: draft.option_id,
    owner: draft.owner,
    rationale: draft.rationale,
    risk: draft.risk,
    terminal_route: draft.terminal_route,
  });
}

function isDraft(value: unknown): value is Draft {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Record<string, unknown>;
  return (
    (candidate.option_id === null || typeof candidate.option_id === "string") &&
    typeof candidate.rationale === "string" &&
    typeof candidate.assumptions === "string" &&
    typeof candidate.owner === "string" &&
    typeof candidate.acceptance_condition === "string" &&
    typeof candidate.risk === "string" &&
    Array.isArray(candidate.evidence_refs) &&
    candidate.evidence_refs.every((item) => typeof item === "string") &&
    typeof candidate.terminal_route === "string"
  );
}

function readBufferedDraft(key: string, serverDraft: Draft): BufferedDraft {
  const fallback: BufferedDraft = {
    draft: serverDraft,
    updatedAt: new Date(0).toISOString(),
    synced: serializeDraft(serverDraft),
  };
  if (typeof window === "undefined") return fallback;
  try {
    const stored = JSON.parse(window.localStorage.getItem(key) ?? "null");
    if (!stored || typeof stored !== "object" || !isDraft(stored.draft)) {
      return fallback;
    }
    const serialized = serializeDraft(stored.draft);
    if (stored.synced === serialized) {
      return fallback;
    }
    return {
      draft: stored.draft,
      updatedAt:
        typeof stored.updatedAt === "string"
          ? stored.updatedAt
          : new Date().toISOString(),
      synced: typeof stored.synced === "string" ? stored.synced : null,
    };
  } catch {
    return fallback;
  }
}

function writeBufferedDraft(
  key: string,
  draft: Draft,
  synced?: string | null,
): void {
  if (typeof window === "undefined") return;
  try {
    const previous = JSON.parse(window.localStorage.getItem(key) ?? "null");
    const record: BufferedDraft = {
      draft,
      updatedAt: new Date().toISOString(),
      synced:
        synced !== undefined
          ? synced
          : typeof previous?.synced === "string"
            ? previous.synced
            : null,
    };
    window.localStorage.setItem(key, JSON.stringify(record));
  } catch {
    // The cloud debounce still works when browser storage is unavailable.
  }
}

function nextSyncId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `sync-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function readSeenActivity(key: string): SeenActivity {
  if (typeof window === "undefined") {
    return { signalCount: 0, evidenceIds: [] };
  }
  try {
    const stored = JSON.parse(window.localStorage.getItem(key) ?? "{}");
    return {
      signalCount:
        typeof stored.signalCount === "number" && stored.signalCount >= 0
          ? stored.signalCount
          : 0,
      evidenceIds: Array.isArray(stored.evidenceIds)
        ? stored.evidenceIds.filter((item: unknown) => typeof item === "string")
        : [],
    };
  } catch {
    return { signalCount: 0, evidenceIds: [] };
  }
}

function writeSeenActivity(key: string, value: SeenActivity): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Badges still work for the current render when browser storage is blocked.
  }
}

function downloadJson(name: string, value: unknown): void {
  const blob = new Blob([JSON.stringify(value, null, 2)], {
    type: "application/json",
  });
  const href = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.download = name;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(href);
}

function draftIssues(draft: Draft): string[] {
  const checks: Array<[boolean, string]> = [
    [Boolean(draft.option_id), "Choose an action."],
    [
      draft.rationale.trim().length >= 40,
      "Rationale must contain at least 40 characters.",
    ],
    [draft.owner.trim().length >= 2, "Name an accountable owner."],
    [
      draft.assumptions.trim().length >= 10,
      "State a critical assumption.",
    ],
    [
      draft.acceptance_condition.trim().length >= 10,
      "State a measurable acceptance or stop condition.",
    ],
    [draft.risk.trim().length >= 10, "State the material risk."],
  ];
  return checks.filter(([valid]) => !valid).map(([, message]) => message);
}

function Button({
  children,
  variant = "primary",
  className,
  disabled,
  busy,
  type = "button",
  onClick,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  className?: string;
  disabled?: boolean;
  busy?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  return (
    <button
      className={cx("button", `button-${variant}`, className)}
      disabled={disabled || busy}
      type={type}
      onClick={onClick}
    >
      {busy && <span className="spinner" aria-hidden="true" />}
      {children}
    </button>
  );
}

function ProductHeader({
  data,
  emit,
  transparent = false,
}: {
  data: ArenaModel;
  emit: Emit;
  transparent?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={cx("product-header", transparent && "header-transparent")}>
      <button
        className="brand"
        type="button"
        onClick={() =>
          data.authenticated || data.local_mode
            ? emit("navigate", { view: "centre" })
            : window.scrollTo({ top: 0, behavior: "smooth" })
        }
        aria-label="AI Delivery Arena home"
      >
        <span className="brand-mark">A</span>
        <span className="brand-copy">
          <strong>{data.product.name}</strong>
          <small>{data.product.tagline}</small>
        </span>
      </button>
      <nav className="header-actions" aria-label="Product actions">
        <a
          className="header-link desktop-only"
          href={data.links?.github}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={16} /> Source
        </a>
        {data.authenticated || data.local_mode ? (
          <div className="account-menu">
            <button
              className="account-button"
              type="button"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span className="account-avatar">
                <UserRound size={16} />
              </span>
              <span className="desktop-only">
                {data.local_mode ? "Local participant" : data.user?.email}
              </span>
              <ChevronDown size={15} />
            </button>
            {menuOpen && (
              <div className="account-popover">
                <div>
                  <small>Signed in as</small>
                  <strong>
                    {data.local_mode ? "Local preview" : data.user?.email}
                  </strong>
                </div>
                {!data.local_mode && (
                  <button type="button" onClick={() => emit("sign_out")}>
                    <LogOut size={15} /> Sign out
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          <a className="button button-secondary header-cta" href="#access">
            Sign in
          </a>
        )}
        <button
          className="mobile-menu"
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}

function Notice({ notice }: { notice?: ArenaModel["notice"] }) {
  const [visible, setVisible] = useState(Boolean(notice));
  useEffect(() => {
    setVisible(Boolean(notice));
    if (!notice) return;
    const timer = window.setTimeout(() => setVisible(false), 6000);
    return () => window.clearTimeout(timer);
  }, [notice?.kind, notice?.message]);
  if (!notice || !visible) return null;
  const Icon = notice.kind === "error" ? XCircle : CheckCircle2;
  return (
    <div className={cx("toast", `toast-${notice.kind}`)} role="status">
      <Icon size={18} />
      <span>{notice.message}</span>
      <button type="button" onClick={() => setVisible(false)} aria-label="Dismiss">
        <X size={16} />
      </button>
    </div>
  );
}

function AuthPanel({ data, emit }: { data: ArenaModel; emit: Emit }) {
  const [mode, setMode] = useState<"signin" | "create">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => setBusy(false), [data.notice, data.authenticated]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    emit(mode === "signin" ? "sign_in" : "sign_up", {
      email,
      password,
      consent,
    });
  };

  if (!data.configured) {
    return (
      <aside className="auth-panel" id="access">
        <span className="eyebrow">Local preview</span>
        <h2>Cloud access is not configured</h2>
        <p>
          Add the Supabase and Arena secrets to enable private cloud accounts.
          The local edition remains available for development.
        </p>
        {data.canary?.allow_local_mode && (
          <Button className="button-full" onClick={() => emit("open_local")}>
            Open local edition <ArrowRight size={17} />
          </Button>
        )}
      </aside>
    );
  }

  if (!data.canary?.ready) {
    return (
      <aside className="auth-panel" id="access">
        <span className="eyebrow">Private canary</span>
        <h2>Canary access is closed</h2>
        <p>
          Account access stays closed until invitation admission, participant
          feedback, and incident reporting are all configured. This prevents an
          unfinished canary from becoming an accidental public beta.
        </p>
        <div className="auth-trust">
          <LockKeyhole size={15} />
          <span>No participant access is available yet.</span>
        </div>
      </aside>
    );
  }

  return (
    <aside className="auth-panel" id="access">
      <div className="auth-heading">
        <span className="status-pill status-live">
          <span /> Private canary
        </span>
        <h2>Enter the Arena</h2>
        <p>Invited participants only. Durable cloud save. Resume across devices.</p>
      </div>
      <div className="segmented-control" role="tablist">
        <button
          type="button"
          className={mode === "signin" ? "active" : ""}
          onClick={() => setMode("signin")}
          role="tab"
          aria-selected={mode === "signin"}
        >
          Sign in
        </button>
        <button
          type="button"
          className={mode === "create" ? "active" : ""}
          onClick={() => setMode("create")}
          role="tab"
          aria-selected={mode === "create"}
        >
          Create account
        </button>
      </div>
      <form className="auth-form" onSubmit={submit}>
        <label>
          <span>{mode === "signin" ? "Email" : "Work email"}</span>
          <div className="input-with-icon">
            <UserRound size={17} />
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              required
            />
          </div>
        </label>
        <label>
          <span>{mode === "signin" ? "Password" : "Create password"}</span>
          <div className="input-with-icon">
            <KeyRound size={17} />
            <input
              type="password"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={mode === "create" ? 8 : undefined}
              placeholder={mode === "create" ? "At least 8 characters" : "Your password"}
              required
            />
          </div>
        </label>
        {mode === "create" && (
          <label className="consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
            />
            <span>
              I understand this beta stores my synthetic simulation responses.
            </span>
          </label>
        )}
        <Button type="submit" className="button-full" busy={busy}>
          {mode === "signin" ? "Continue" : "Create invited account"}
          {!busy && <ArrowRight size={17} />}
        </Button>
      </form>
      <div className="auth-trust">
        <LockKeyhole size={15} />
        <span>Encrypted runs. No service-role key in the application.</span>
      </div>
    </aside>
  );
}

function Marketing({ data, emit }: { data: ArenaModel; emit: Emit }) {
  return (
    <div className="marketing-page">
      <div className="marketing-hero-wrap">
        <ProductHeader data={data} emit={emit} transparent />
        <main className="marketing-hero">
          <section className="hero-copy-block">
            <span className="eyebrow eyebrow-light">
              Open-source enterprise simulation
            </span>
            <h1>
              Enterprise AI leadership,
              <span>tested under pressure.</span>
            </h1>
            <p>
              Lead a consequential AI initiative through incomplete evidence,
              stakeholder pressure, delivery crises and a final release decision.
              Your choices create consequences. Your debrief shows the evidence.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#access">
                Enter the private canary <ArrowRight size={18} />
              </a>
              <a
                className="button button-hero-ghost"
                href={data.links?.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> View source
              </a>
            </div>
            <div className="hero-proof">
              <div>
                <strong>20</strong>
                <span>decisions</span>
              </div>
              <div>
                <strong>6</strong>
                <span>crises</span>
              </div>
              <div>
                <strong>7</strong>
                <span>dimensions</span>
              </div>
              <div>
                <strong>90</strong>
                <span>minutes</span>
              </div>
            </div>
          </section>
          <AuthPanel data={data} emit={emit} />
        </main>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
      </div>

      <section className="proof-band">
        <span>Designed for decisions across</span>
        <div>
          <strong>Value</strong><i />
          <strong>Architecture</strong><i />
          <strong>Data</strong><i />
          <strong>Governance</strong><i />
          <strong>Cost</strong><i />
          <strong>Adoption</strong>
        </div>
      </section>

      <section className="content-section assessment-gap">
        <div className="section-lead">
          <span className="eyebrow">The assessment gap</span>
          <h2>Vocabulary is cheap. Judgment under pressure is not.</h2>
          <p>
            Courses test recall. Interviews reward storytelling. The Arena records
            what you actually decide when enterprise constraints compete for attention.
          </p>
        </div>
        <div className="gap-comparison">
          <article>
            <span className="comparison-label">Conventional assessment</span>
            <h3>What do you know?</h3>
            <ul>
              <li><Circle size={10} /> Definitions and frameworks</li>
              <li><Circle size={10} /> Self-reported experience</li>
              <li><Circle size={10} /> Answers without consequences</li>
            </ul>
          </article>
          <ArrowRight className="comparison-arrow" size={28} />
          <article className="comparison-primary">
            <span className="comparison-label">AI Delivery Arena</span>
            <h3>What do you do?</h3>
            <ul>
              <li><Check size={14} /> Evidence-led commitments</li>
              <li><Check size={14} /> Traceable decision records</li>
              <li><Check size={14} /> Consequences and critical gates</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="content-section method-section">
        <div className="section-lead centered">
          <span className="eyebrow">How the Arena works</span>
          <h2>One scenario. A complete executive decision loop.</h2>
        </div>
        <div className="method-grid">
          {[
            {
              number: "01",
              icon: Target,
              title: "Understand",
              copy: "Enter a synthetic enterprise programme with a fixed mandate, incomplete evidence and explicit constraints.",
            },
            {
              number: "02",
              icon: Search,
              title: "Investigate",
              copy: "Spend limited credits on the evidence that can materially improve your next decisions.",
            },
            {
              number: "03",
              icon: FileCheck2,
              title: "Commit",
              copy: "Record the action, accountable owner, rationale, assumption, risk and measurable stop condition.",
            },
            {
              number: "04",
              icon: Eye,
              title: "Experience",
              copy: "Observe stakeholder reactions, operational signals and deterministic crises caused by prior choices.",
            },
          ].map(({ number, icon: Icon, title, copy }) => (
            <article className="method-card" key={number}>
              <div>
                <span>{number}</span>
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section methodology-band">
        <div>
          <span className="eyebrow eyebrow-light">Transparent by design</span>
          <h2>Inspect the scenario, engine and assessment methodology.</h2>
        </div>
        <div>
          <p>
            The deterministic engine and scenario fixtures are public. First-attempt
            scores remain concealed until D20. Results are simulation assessments,
            not certification or an independently calibrated benchmark.
          </p>
          <a href={data.links?.github} target="_blank" rel="noreferrer">
            Explore on GitHub <ExternalLink size={16} />
          </a>
        </div>
      </section>

      <footer className="marketing-footer">
        <div className="brand">
          <span className="brand-mark">A</span>
          <span className="brand-copy">
            <strong>AI Delivery Arena</strong>
            <small>Private Canary v{data.product.version}</small>
          </span>
        </div>
        <div>
          <a href={data.links?.privacy} target="_blank" rel="noreferrer">Privacy</a>
          <a href={data.links?.terms} target="_blank" rel="noreferrer">Terms</a>
          {data.links?.incident && <a href={data.links.incident}>Report an incident</a>}
          <span>Synthetic scenario</span>
          <span>Apache-2.0</span>
        </div>
      </footer>
    </div>
  );
}

function AppShell({
  data,
  emit,
  children,
  compact = false,
}: {
  data: ArenaModel;
  emit: Emit;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div className={cx("product-page", compact && "product-page-compact")}>
      <ProductHeader data={data} emit={emit} />
      {children}
      <footer className="product-footer">
        <span>Private Canary v{data.product.version}</span>
        <span>Simulation assessment. Not independently calibrated.</span>
        {data.links?.incident && <a href={data.links.incident}>Report an incident</a>}
      </footer>
    </div>
  );
}

function EmptyState({ children }: { children: ReactNode }) {
  return (
    <div className="empty-state">
      <FileJson size={26} />
      <p>{children}</p>
    </div>
  );
}

function RunCentre({ data, emit }: { data: ArenaModel; emit: Emit }) {
  const centre = data.centre ?? {};
  const runs: JsonMap[] = centre.runs ?? [];
  const active = runs.find((run) => run.status !== "completed");
  const completed = runs.filter((run) => run.status === "completed").length;
  const [renaming, setRenaming] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [importBusy, setImportBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => setImportBusy(false), [data.notice, data.screen]);

  const openRun = (run: JsonMap) =>
    emit("navigate", {
      view: run.status === "completed" ? "debrief" : "decision",
      run_id: run.run_id,
    });

  const importFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImportBusy(true);
    try {
      const document = JSON.parse(await file.text());
      emit("import_run", { document });
    } catch {
      setImportBusy(false);
      window.alert("That file is not valid JSON.");
    } finally {
      event.target.value = "";
    }
  };

  return (
    <AppShell data={data} emit={emit}>
      <main className="run-centre page-width">
        <section className="page-title-row">
          <div>
            <span className="eyebrow">Run centre</span>
            <h1>Your leadership evidence.</h1>
            <p>
              Continue an attempt, review a completed debrief or begin a clean run.
              Committed decisions remain immutable.
            </p>
          </div>
          <Button onClick={() => emit("open_briefing")}>
            New attempt <ArrowRight size={17} />
          </Button>
        </section>

        <section className="summary-grid">
          <article>
            <LayoutDashboard size={19} />
            <div><strong>{runs.length}</strong><span>Total attempts</span></div>
          </article>
          <article>
            <Clock3 size={19} />
            <div><strong>{active ? 1 : 0}</strong><span>In progress</span></div>
          </article>
          <article>
            <BadgeCheck size={19} />
            <div><strong>{completed}</strong><span>Debriefs ready</span></div>
          </article>
          <article>
            <Cloud size={19} />
            <div><strong>{data.local_mode ? "Local" : "Cloud"}</strong><span>Save mode</span></div>
          </article>
        </section>

        {active ? (
          <section className="active-run-card">
            <div className="active-run-main">
              <div className="active-run-kicker">
                <span className="status-pill status-progress">
                  <span /> In progress
                </span>
                {active.attempt_kind === "practice_replay" && (
                  <span className="attempt-kind-pill">Practice replay</span>
                )}
                <span>Last saved {dateLabel(active.updated_at)}</span>
              </div>
              <h2>{active.display_name}</h2>
              <p>
                Procurement Under Pressure · {active.completed} of {active.total} decisions committed
              </p>
              <div className="progress-track" aria-label={`${active.completed} of ${active.total}`}>
                <span style={{ width: `${(active.completed / active.total) * 100}%` }} />
              </div>
              <div className="active-run-meta">
                <span>{Math.round((active.completed / active.total) * 100)}% complete</span>
                <span>Next D{String(active.completed + 1).padStart(2, "0")}</span>
              </div>
            </div>
            <div className="active-run-action">
              <div className="progress-ring" style={{ "--progress": `${(active.completed / active.total) * 360}deg` } as any}>
                <span>{active.completed}/{active.total}</span>
              </div>
              <Button onClick={() => openRun(active)}>
                Continue at D{String(active.completed + 1).padStart(2, "0")}
                <ArrowRight size={17} />
              </Button>
            </div>
          </section>
        ) : (
          <section className="first-run-banner">
            <div>
              <span className="eyebrow">Your first attempt</span>
              <h2>Procurement Under Pressure</h2>
              <p>Five stages, 20 decisions and approximately 90 minutes.</p>
            </div>
            <Button onClick={() => emit("open_briefing")}>
              Read the briefing <ArrowRight size={17} />
            </Button>
          </section>
        )}

        <section className="run-library">
          <div className="section-toolbar">
            <div>
              <span className="eyebrow">Attempt library</span>
              <h2>All runs</h2>
            </div>
            <div>
              <input
                ref={fileRef}
                className="visually-hidden"
                type="file"
                accept=".json,application/json"
                onChange={importFile}
              />
              <Button
                variant="secondary"
                busy={importBusy}
                onClick={() => fileRef.current?.click()}
              >
                <Upload size={16} /> Import local run
              </Button>
            </div>
          </div>
          {runs.length === 0 ? (
            <EmptyState>No attempts yet. Start with the mission briefing.</EmptyState>
          ) : (
            <div className="run-table">
              <div className="run-table-head">
                <span>Attempt</span><span>Progress</span><span>Updated</span><span />
              </div>
              {runs.map((run) => (
                <article className="run-table-row" key={run.run_id}>
                  <div className="run-name-cell">
                    <span className={cx("run-icon", run.status === "completed" && "run-icon-complete")}>
                      {run.status === "completed" ? <Check size={16} /> : <Clock3 size={16} />}
                    </span>
                    <div>
                      {renaming === run.run_id ? (
                        <form
                          className="rename-form"
                          onSubmit={(event) => {
                            event.preventDefault();
                            emit("rename_run", {
                              run_id: run.run_id,
                              display_name: renameValue,
                            });
                            setRenaming(null);
                          }}
                        >
                          <input
                            autoFocus
                            value={renameValue}
                            maxLength={100}
                            onChange={(event) => setRenameValue(event.target.value)}
                          />
                          <button type="submit"><Check size={15} /></button>
                          <button type="button" onClick={() => setRenaming(null)}><X size={15} /></button>
                        </form>
                      ) : (
                        <strong>{run.display_name}</strong>
                      )}
                      <small>
                        {run.attempt_kind === "practice_replay" ? "Practice replay" : "First attempt"}
                        {run.source_run_id ? ` · source ${run.source_run_id}` : ""}
                      </small>
                    </div>
                  </div>
                  <div>
                    <span className={cx("status-pill", run.status === "completed" ? "status-complete" : "status-progress")}>
                      {run.status === "completed" ? "Complete" : "In progress"}
                    </span>
                    <small>{run.completed}/{run.total} decisions</small>
                  </div>
                  <div><span>{dateLabel(run.updated_at)}</span><small>Revision {run.revision}</small></div>
                  <div className="run-row-actions">
                    <button
                      type="button"
                      aria-label={`Rename ${run.display_name}`}
                      onClick={() => {
                        setRenaming(run.run_id);
                        setRenameValue(run.display_name);
                      }}
                    >
                      <Pencil size={15} />
                    </button>
                    <button
                      className="run-delete-action"
                      type="button"
                      aria-label={`Delete ${run.display_name}`}
                      onClick={() => {
                        if (window.confirm(
                          `Delete ${run.display_name}? This removes the run and cannot be undone. Download any completed evidence first.`,
                        )) {
                          clearRunBrowserData(data, run.run_id);
                          emit("delete_run", { run_id: run.run_id });
                        }
                      }}
                    >
                      <Trash2 size={15} />
                    </button>
                    <Button variant="secondary" onClick={() => openRun(run)}>
                      {run.status === "completed" ? "Open debrief" : "Resume"}
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
          <div className="import-note">
            <Info size={15} />
            <span>
              Local JSON checkpoints are replay-verified before they enter your account.
            </span>
          </div>
        </section>
      </main>
    </AppShell>
  );
}

function Briefing({ data, emit }: { data: ArenaModel; emit: Emit }) {
  const briefing = data.briefing ?? {};
  const scenario = briefing.scenario ?? {};
  const stages: JsonMap[] = briefing.stages ?? [];
  const [busy, setBusy] = useState(false);
  useEffect(() => setBusy(false), [data.screen, data.notice]);

  return (
    <AppShell data={data} emit={emit}>
      <main className="briefing-page page-width">
        <button
          className="text-back"
          type="button"
          onClick={() => emit("navigate", { view: "centre" })}
        >
          <ArrowLeft size={16} /> Run centre
        </button>
        <section className="briefing-hero">
          <div>
            <span className="eyebrow eyebrow-light">Mission briefing</span>
            <h1>Procurement Under Pressure</h1>
            <p>
              You are the accountable AI delivery lead. The executive team expects
              a defensible recommendation, not automatic agreement with the sponsor.
            </p>
          </div>
          <div className="briefing-classification">
            <ShieldCheck size={17} />
            Synthetic enterprise scenario
          </div>
        </section>
        <section className="briefing-metrics">
          {[
            ["16 weeks", "Fixed timeline"],
            ["€1.2m", "Budget envelope"],
            ["12 systems", "Fragmented data"],
            ["10 credits", "Investigation"],
          ].map(([value, label]) => (
            <article key={label}><strong>{value}</strong><span>{label}</span></article>
          ))}
        </section>
        <section className="briefing-body">
          <div className="briefing-main">
            <span className="eyebrow">Your mandate</span>
            <h2>Turn ambiguity into a defensible release recommendation.</h2>
            <p className="briefing-premise">{scenario.premise}</p>
            <h3>Known constraints</h3>
            <div className="constraint-grid">
              {[
                ["Commercial pressure", "The sponsor has already announced an aggressive savings ambition."],
                ["Model approval", "The preferred external LLM has not been approved."],
                ["Data sovereignty", "European data-processing constraints apply."],
                ["Decision authority", "Governance ownership and the meaning of business release remain unresolved."],
              ].map(([title, copy], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{title}</strong><p>{copy}</p></div>
                </article>
              ))}
            </div>
            <section className="assessment-contract-preview">
              <span className="eyebrow">What this exercise measures</span>
              <h3>Three results. Do not confuse them.</h3>
              <div className="assessment-layer-grid">
                <article>
                  <strong>1. Your competency</strong>
                  <p>Selected actions, evidence use, response completeness, chronology and later corrections produce a seven-dimension score.</p>
                </article>
                <article>
                  <strong>2. Programme health</strong>
                  <p>Your choices change the simulated initiative. This state shows consequences; it is not your competency score.</p>
                </article>
                <article>
                  <strong>3. Critical gates</strong>
                  <p>Seven non-compensable release controls can cap the result. Strength elsewhere cannot cancel a material breach.</p>
                </article>
              </div>
              <p className="assessment-boundary-note">
                Your written rationale is retained for traceability and must be complete.
                This release does not semantically judge prose. Substantive deterministic
                scoring follows the action selected and the evidence recorded.
              </p>
            </section>
            <section className="gate-handbook">
              <span className="eyebrow">The seven release controls</span>
              <h3>What every final recommendation must establish.</h3>
              <p>
                These are control expectations, not an answer key. You still decide how
                to satisfy them as evidence and pressure change.
              </p>
              <div>
                {PUBLIC_GATES.map(([id, title, copy]) => (
                  <article key={id}>
                    <span>{id}</span>
                    <div><strong>{title}</strong><p>{copy}</p></div>
                  </article>
                ))}
              </div>
            </section>
            <h3>Programme stages</h3>
            <div className="briefing-stages">
              {stages.map((stage, index) => {
                const Icon = STAGE_ICONS[index] ?? Circle;
                return (
                  <article key={stage.id}>
                    <span><Icon size={17} /></span>
                    <div>
                      <small>Stage {index + 1}</small>
                      <strong>{stage.label}</strong>
                      <p>{stage.purpose}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="briefing-rules">
            <span className="eyebrow">Before you enter</span>
            <h2>Commit means permanent.</h2>
            <ul>
              <li><Search size={17} /><span><strong>Investigate deliberately</strong>Evidence windows can close.</span></li>
              <li><FileCheck2 size={17} /><span><strong>Make the record complete</strong>Owner, rationale, assumption, risk and stop condition.</span></li>
              <li><Eye size={17} /><span><strong>No live coaching</strong>Scores and preferred paths stay concealed.</span></li>
              <li><BadgeCheck size={17} /><span><strong>Debrief after D20</strong>Critical gates and criterion evidence then unlock.</span></li>
            </ul>
            <div className="mechanics-box">
              <strong>How evidence and signals work</strong>
              <p><span>Cite now</span>Available evidence can support the decision you are recording.</p>
              <p><span>Order for later</span>Spend a credit now. It cannot support today’s decision.</p>
              <p><span>Due Week X</span>The ordered finding becomes citable in that programme week.</p>
              <p><span>Signals</span>Observable changes appear after commitment and stay marked until opened.</p>
            </div>
            <div className="time-box">
              <Clock3 size={19} />
              <div><strong>75–90 minutes</strong><span>Save and resume at any point</span></div>
            </div>
            <Button
              className="button-full"
              busy={busy}
              onClick={() => {
                setBusy(true);
                emit("start_run");
              }}
            >
              Enter the Arena {!busy && <ArrowRight size={17} />}
            </Button>
          </aside>
        </section>
      </main>
    </AppShell>
  );
}

function StageRail({ stages, run }: { stages: JsonMap[]; run: JsonMap }) {
  const completed = new Set((run.history ?? []).map((item: JsonMap) => item.decision_id));
  return (
    <div className="stage-rail" aria-label="Programme stages">
      {stages.map((stage, index) => {
        const done = (stage.decision_ids ?? []).every((id: string) => completed.has(id));
        const active = stage.id === run.stage?.id;
        const Icon = STAGE_ICONS[index] ?? Circle;
        return (
          <div className={cx("stage-step", done && "done", active && "active")} key={stage.id}>
            <span className="stage-step-icon">{done ? <Check size={14} /> : <Icon size={14} />}</span>
            <span><small>Stage {index + 1}</small><strong>{stage.label}</strong></span>
          </div>
        );
      })}
    </div>
  );
}

function DecisionCockpit({ data, emit }: { data: ArenaModel; emit: Emit }) {
  const run = data.run ?? {};
  const decision = run.current_decision ?? {};
  const decisionKey = `${run.run_id}:${decision.id}`;
  const draftKey = useMemo(
    () =>
      draftStorageKey(
        data,
        String(run.run_id),
        String(decision.id),
        Number(run.revision),
      ),
    [
      data.local_mode,
      data.user?.id,
      decision.id,
      run.revision,
      run.run_id,
    ],
  );
  const initialBuffer = useMemo(
    () => readBufferedDraft(draftKey, data.draft ?? EMPTY_DRAFT),
    [decisionKey, draftKey],
  );
  const [draft, setDraft] = useState<Draft>(initialBuffer.draft);
  const [contextTab, setContextTab] = useState<"evidence" | "signals" | "record">("evidence");
  const [evidenceFilter, setEvidenceFilter] = useState("all");
  const [evidenceSearch, setEvidenceSearch] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [syncLabel, setSyncLabel] = useState(
    initialBuffer.synced === serializeDraft(initialBuffer.draft)
      ? "Cloud synchronized"
      : "Recovered on this device",
  );
  const [issues, setIssues] = useState<string[]>([]);
  const [syncRetry, setSyncRetry] = useState(0);
  const lastSynced = useRef(serializeDraft(data.draft ?? EMPTY_DRAFT));
  const inFlight = useRef<{ id: string; serialized: string } | null>(null);
  const initialized = useRef(decisionKey);
  const activityKey = useMemo(
    () => activityStorageKey(data, String(run.run_id)),
    [data.local_mode, data.user?.id, run.run_id],
  );
  const [seenActivity, setSeenActivity] = useState<SeenActivity>(() =>
    readSeenActivity(activityKey),
  );

  useEffect(() => {
    if (initialized.current !== decisionKey) {
      initialized.current = decisionKey;
      const serverDraft = data.draft ?? EMPTY_DRAFT;
      const buffered = readBufferedDraft(draftKey, serverDraft);
      setDraft(buffered.draft);
      lastSynced.current = serializeDraft(serverDraft);
      inFlight.current = null;
      setSyncLabel(
        buffered.synced === serializeDraft(buffered.draft)
          ? "Cloud synchronized"
          : "Recovered on this device",
      );
      setIssues([]);
      setBusy(null);
    }
  }, [decisionKey, data.draft, draftKey]);

  useEffect(() => {
    setSeenActivity(readSeenActivity(activityKey));
  }, [activityKey]);

  useEffect(() => {
    if (data.notice || data.sync) {
      setBusy(null);
    }
    const pending = inFlight.current;
    if (
      pending &&
      data.sync?.decision_id === decision.id &&
      data.sync?.sync_id === pending.id
    ) {
      lastSynced.current = pending.serialized;
      writeBufferedDraft(draftKey, draft, pending.serialized);
      inFlight.current = null;
      setSyncLabel(
        serializeDraft(draft) === pending.serialized
          ? "Cloud synchronized"
          : "Saved on this device",
      );
      return;
    }
    if (data.notice?.kind === "error" && pending) {
      inFlight.current = null;
      setSyncLabel("Saved on this device · retry pending");
      setSyncRetry((value) => value + 1);
    }
  }, [
    data.notice,
    data.sync?.saved_at,
    data.sync?.sync_id,
    decision.id,
    draft,
    draftKey,
  ]);

  useEffect(() => {
    const serialized = serializeDraft(draft);
    if (serialized === lastSynced.current) {
      writeBufferedDraft(draftKey, draft, serialized);
      setSyncLabel("Cloud synchronized");
      return;
    }
    writeBufferedDraft(draftKey, draft);
    setSyncLabel("Saved on this device");
    const timer = window.setTimeout(() => {
      if (inFlight.current?.serialized === serialized) return;
      const syncId = nextSyncId();
      inFlight.current = { id: syncId, serialized };
      setSyncLabel("Syncing to cloud…");
      emit("save_draft", {
        run_id: run.run_id,
        decision_id: decision.id,
        expected_revision: run.revision,
        sync_id: syncId,
        draft,
      });
    }, 10_000);
    return () => window.clearTimeout(timer);
  }, [
    draft,
    draftKey,
    decision.id,
    emit,
    run.revision,
    run.run_id,
    syncRetry,
  ]);

  const availableEvidence: JsonMap[] = (run.evidence ?? []).filter((item: JsonMap) =>
    ["available", "verified"].includes(item.state),
  );
  const allSignals: string[] = run.operational_signals ?? [];
  const arrivedEvidence: JsonMap[] = availableEvidence.filter(
    (item: JsonMap) => item.request_week !== null && item.request_week !== undefined,
  );
  const arrivedEvidenceIds = new Set(arrivedEvidence.map((item: JsonMap) => item.id));
  const unreadSignals = allSignals.slice(
    Math.min(seenActivity.signalCount, allSignals.length),
  );
  const unreadEvidence = arrivedEvidence.filter(
    (item: JsonMap) => !seenActivity.evidenceIds.includes(item.id),
  );
  const currentCrisis = (run.crises ?? []).find(
    (item: JsonMap) => item.linked_decision === decision.id,
  );

  const filteredEvidence = (run.evidence ?? [])
    .filter((item: JsonMap) => {
      const matchesText = `${item.id} ${item.title}`.toLowerCase().includes(evidenceSearch.toLowerCase());
      const matchesFilter =
        evidenceFilter === "all" ||
        (evidenceFilter === "available" && ["available", "verified"].includes(item.state)) ||
        (evidenceFilter === "requested" && item.state === "requested") ||
        (evidenceFilter === "requestable" && item.state === "requestable");
      return matchesText && matchesFilter;
    })
    .sort(
      (left: JsonMap, right: JsonMap) =>
        Number(arrivedEvidenceIds.has(right.id)) -
        Number(arrivedEvidenceIds.has(left.id)),
    );

  const update = <K extends keyof Draft>(key: K, value: Draft[K]) =>
    setDraft((current) => ({ ...current, [key]: value }));

  const persistencePayload = () => ({
    run_id: run.run_id,
    decision_id: decision.id,
    expected_revision: run.revision,
    draft,
  });

  const emitFromCockpit: Emit = (type, payload = {}) => {
    if (type === "navigate" || type === "sign_out") {
      setSyncLabel("Syncing before exit…");
      emit(type, { ...payload, ...persistencePayload() });
      return;
    }
    emit(type, payload);
  };

  const requestEvidence = (evidenceId: string) => {
    const serialized = serializeDraft(draft);
    const syncId = nextSyncId();
    inFlight.current = { id: syncId, serialized };
    setBusy(`evidence:${evidenceId}`);
    setSyncLabel("Syncing to cloud…");
    emit("request_evidence", {
      evidence_id: evidenceId,
      sync_id: syncId,
      ...persistencePayload(),
    });
  };

  const openContext = (tab: "evidence" | "signals" | "record") => {
    setContextTab(tab);
    if (tab === "record") return;
    if (tab === "evidence") {
      setEvidenceFilter("available");
      setEvidenceSearch("");
    }
    setSeenActivity((current) => {
      const next: SeenActivity = {
        signalCount: tab === "signals" ? allSignals.length : current.signalCount,
        evidenceIds:
          tab === "evidence"
            ? Array.from(
                new Set([
                  ...current.evidenceIds,
                  ...arrivedEvidence.map((item: JsonMap) => item.id),
                ]),
              )
            : current.evidenceIds,
      };
      writeSeenActivity(activityKey, next);
      return next;
    });
  };

  const review = () => {
    const nextIssues = draftIssues(draft);
    setIssues(nextIssues);
    if (nextIssues.length > 0) {
      document.querySelector(".decision-form")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setBusy("review");
    emit("review_decision", {
      ...persistencePayload(),
    });
  };

  return (
    <AppShell data={data} emit={emitFromCockpit} compact>
      <main className="cockpit">
        <section className="cockpit-topbar">
          <button
            type="button"
            onClick={() =>
              emitFromCockpit("navigate", {
                view: "centre",
                run_id: run.run_id,
              })
            }
          >
            <ArrowLeft size={15} /> Run centre
          </button>
          <StageRail stages={data.stages ?? []} run={run} />
          <div className="save-state">
            <Cloud size={15} />
            <span>{syncLabel}</span>
            <small>Rev {run.revision}</small>
          </div>
        </section>

        <section className="decision-titlebar">
          <div>
            <span className="eyebrow">
              {run.stage?.label} · Week {decision.week}
            </span>
            <h1>{decision.id}. {decision.title}</h1>
          </div>
          <div className="decision-progress">
            <strong>{Number(run.progress?.completed ?? 0) + 1}</strong>
            <span>of {run.progress?.total}</span>
          </div>
        </section>

        <div className="cockpit-grid">
          <section className="decision-workspace">
            {(unreadSignals.length > 0 || unreadEvidence.length > 0) && (
              <section className="change-strip" aria-live="polite">
                <span className="change-strip-icon"><Sparkles size={18} /></span>
                <div>
                  <strong>Changes since your last decision</strong>
                  <p>
                    {[
                      unreadSignals.length > 0
                        ? `${unreadSignals.length} new operational ${
                            unreadSignals.length === 1 ? "signal" : "signals"
                          }`
                        : null,
                      unreadEvidence.length > 0
                        ? `${unreadEvidence.length} evidence ${
                            unreadEvidence.length === 1 ? "item has" : "items have"
                          } arrived`
                        : null,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                </div>
                <div className="change-strip-actions">
                  {unreadSignals.length > 0 && (
                    <button type="button" onClick={() => openContext("signals")}>
                      View signals <ChevronRight size={15} />
                    </button>
                  )}
                  {unreadEvidence.length > 0 && (
                    <button type="button" onClick={() => openContext("evidence")}>
                      View evidence <ChevronRight size={15} />
                    </button>
                  )}
                </div>
              </section>
            )}
            <article className="situation-panel">
              <div className="panel-label"><Target size={15} /> Decision moment</div>
              <p className="decision-moment">{decision.moment}</p>
              <div className="known-info">
                <Info size={17} />
                <div><strong>Known information</strong><p>{decision.information}</p></div>
              </div>
            </article>

            {currentCrisis && (
              <article className="crisis-alert">
                <ShieldAlert size={20} />
                <div><strong>Material event</strong><p>{currentCrisis.observation}</p></div>
              </article>
            )}

            <section className="action-section">
              <div className="section-title">
                <span className="step-number">1</span>
                <div><h2>Choose your action</h2><p>Select the stance you are prepared to defend.</p></div>
              </div>
              <div className="option-list" role="radiogroup" aria-label="Action choices">
                {(decision.options ?? []).map((option: JsonMap) => (
                  <button
                    type="button"
                    role="radio"
                    aria-checked={draft.option_id === option.id}
                    className={cx("option-card", draft.option_id === option.id && "selected")}
                    key={option.id}
                    onClick={() => update("option_id", option.id)}
                  >
                    <span className="option-letter">{option.id}</span>
                    <span className="option-label">{option.label}</span>
                    <span className="radio-mark">{draft.option_id === option.id && <Check size={14} />}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="decision-form">
              <div className="section-title">
                <span className="step-number">2</span>
                <div><h2>Build the decision record</h2><p>{decision.required_response}</p></div>
              </div>
              {issues.length > 0 && (
                <div className="validation-summary" role="alert">
                  <XCircle size={18} />
                  <div><strong>Complete the record before review</strong>
                    <ul>{issues.map((issue) => <li key={issue}>{issue}</li>)}</ul>
                  </div>
                </div>
              )}
              <label className="field field-large">
                <span>Rationale <small>{draft.rationale.trim().length}/40 minimum</small></span>
                <textarea
                  value={draft.rationale}
                  onChange={(event) => update("rationale", event.target.value)}
                  placeholder="State what you will do, why it is proportionate now, and what evidence supports it."
                />
              </label>
              <div className="form-grid form-grid-owner">
                <label className="field">
                  <span>Accountable owner</span>
                  <input
                    value={draft.owner}
                    onChange={(event) => update("owner", event.target.value)}
                    placeholder="Named role or person"
                  />
                </label>
                <label className="field">
                  <span>Acceptance or stop condition</span>
                  <input
                    value={draft.acceptance_condition}
                    onChange={(event) => update("acceptance_condition", event.target.value)}
                    placeholder="A measurable threshold or condition"
                  />
                </label>
              </div>
              <div className="form-grid">
                <label className="field">
                  <span>Critical assumption</span>
                  <textarea
                    value={draft.assumptions}
                    onChange={(event) => update("assumptions", event.target.value)}
                    placeholder="What must remain true?"
                  />
                </label>
                <label className="field">
                  <span>Material risk</span>
                  <textarea
                    value={draft.risk}
                    onChange={(event) => update("risk", event.target.value)}
                    placeholder="What could invalidate this action?"
                  />
                </label>
              </div>
              <fieldset className="citation-field">
                <legend>Evidence cited <small>Optional. Select only items marked Cite now.</small></legend>
                {availableEvidence.length === 0 ? (
                  <p>No evidence is currently available to cite.</p>
                ) : (
                  <div className="citation-list">
                    {availableEvidence.map((item) => {
                      const checked = draft.evidence_refs.includes(item.id);
                      return (
                        <label key={item.id} className={checked ? "selected" : ""}>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              update(
                                "evidence_refs",
                                checked
                                  ? draft.evidence_refs.filter((id) => id !== item.id)
                                  : [...draft.evidence_refs, item.id],
                              )
                            }
                          />
                          <span><strong>{item.id}</strong>{item.title}</span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </fieldset>
              {decision.id === "D20" && draft.option_id === "F" && (
                <label className="field">
                  <span>Custom final route</span>
                  <select
                    value={draft.terminal_route}
                    onChange={(event) => update("terminal_route", event.target.value)}
                  >
                    {["conditional_release", "reduced_scope", "extended_pilot", "pause", "full_release"].map((route) => (
                      <option key={route} value={route}>
                        {route.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              <div className="decision-actions">
                <div><Cloud size={15} /><span>{syncLabel}</span></div>
                <Button busy={busy === "review"} onClick={review}>
                  Review decision {!busy && <ArrowRight size={17} />}
                </Button>
              </div>
            </section>
          </section>

          <aside className="context-panel">
            <div className="context-tabs" role="tablist">
              {[
                [
                  "evidence",
                  unreadEvidence.length > 0
                    ? `Evidence · ${unreadEvidence.length} arrived`
                    : "Evidence",
                  BookOpen,
                ],
                [
                  "signals",
                  unreadSignals.length > 0
                    ? `Signals · ${unreadSignals.length} new`
                    : "Signals",
                  Zap,
                ],
                ["record", "Record", History],
              ].map(([id, label, Icon]: any) => (
                <button
                  type="button"
                  key={id}
                  className={contextTab === id ? "active" : ""}
                  role="tab"
                  aria-selected={contextTab === id}
                  onClick={() => openContext(id)}
                >
                  <Icon size={15} /> <span>{label}</span>
                </button>
              ))}
            </div>

            {contextTab === "evidence" && (
              <div className="context-content evidence-desk">
                <div className="credit-card">
                  <div><WalletCards size={18} /><span>Investigation credits</span></div>
                  <strong>{run.credits?.remaining}<small> / {run.credits?.total}</small></strong>
                  <div className="credit-track"><span style={{ width: `${(run.credits?.remaining / run.credits?.total) * 100}%` }} /></div>
                </div>
                <div className="evidence-tools">
                  <label><Search size={15} /><input value={evidenceSearch} onChange={(event) => setEvidenceSearch(event.target.value)} placeholder="Search evidence" /></label>
                  <select value={evidenceFilter} onChange={(event) => setEvidenceFilter(event.target.value)}>
                    <option value="all">All states</option>
                    <option value="available">Cite now</option>
                    <option value="requested">Due later</option>
                    <option value="requestable">Order for later</option>
                  </select>
                </div>
                <div className="evidence-list">
                  {filteredEvidence.map((item: JsonMap) => (
                    <EvidenceItem
                      key={item.id}
                      item={item}
                      arrived={arrivedEvidenceIds.has(item.id)}
                      credits={run.credits?.remaining}
                      busy={busy === `evidence:${item.id}`}
                      onRequest={() => requestEvidence(item.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {contextTab === "signals" && (
              <div className="context-content">
                <div className="context-heading"><span className="eyebrow">Operational view</span><h3>Observable signals</h3></div>
                {(run.operational_signals ?? []).length === 0 ? (
                  <EmptyState>No consequence signals have been observed yet.</EmptyState>
                ) : (
                  <div className="signal-list">
                    {(run.operational_signals ?? []).slice(-8).reverse().map((signal: string, index: number) => (
                      <article key={`${signal}-${index}`}><Zap size={15} /><p>{signal}</p></article>
                    ))}
                  </div>
                )}
                {currentCrisis && <div className="context-crisis"><ShieldAlert size={16} /><p>{currentCrisis.observation}</p></div>}
              </div>
            )}

            {contextTab === "record" && (
              <div className="context-content">
                <div className="context-heading"><span className="eyebrow">Immutable ledger</span><h3>Committed record</h3></div>
                {(run.history ?? []).length === 0 ? (
                  <EmptyState>Committed decisions will appear here.</EmptyState>
                ) : (
                  <div className="history-list">
                    {[...(run.history ?? [])].reverse().map((item: JsonMap) => (
                      <details key={item.decision_id}>
                        <summary><span>{item.decision_id}</span><strong>{item.title}</strong><ChevronDown size={15} /></summary>
                        <div><small>Committed action</small><p>{item.choice_label}</p><small>Rationale</small><p>{item.rationale}</p></div>
                      </details>
                    ))}
                  </div>
                )}
                <div className="ledger-chip"><LockKeyhole size={14} /> {run.ledger?.entries} ledger entries</div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </AppShell>
  );
}

function EvidenceItem({
  item,
  arrived,
  credits,
  busy,
  onRequest,
}: {
  item: JsonMap;
  arrived: boolean;
  credits: number;
  busy: boolean;
  onRequest: () => void;
}) {
  const [open, setOpen] = useState(["available", "verified"].includes(item.state));
  const stateLabel: Record<string, string> = {
    available: "Cite now",
    verified: "Cite now",
    requested:
      item.arrival_week !== null && item.arrival_week !== undefined
        ? `Due Week ${item.arrival_week}`
        : "Due later",
    requestable: "Order for later",
    unavailable: "Window closed",
  };
  const requestable = item.state === "requestable" && credits >= item.cost;
  return (
    <article className={cx("evidence-item", `evidence-${item.state}`, arrived && "evidence-arrived")}>
      <button className="evidence-summary" type="button" onClick={() => setOpen((value) => !value)}>
        <span className="evidence-state-icon">
          {["available", "verified"].includes(item.state) ? <Check size={14} /> : item.state === "requested" ? <Clock3 size={14} /> : <FileJson size={14} />}
        </span>
        <span><small>{item.id}</small><strong>{item.title}</strong></span>
        <span className="evidence-status">{stateLabel[item.state] ?? item.state}</span>
        <ChevronDown size={15} className={open ? "rotated" : ""} />
      </button>
      {open && (
        <div className="evidence-detail">
          {item.reveal ? (
            <p>{item.reveal}</p>
          ) : item.state === "requested" ? (
            <p>Ordered in Week {item.request_week}. It becomes citable in Week {item.arrival_week}.</p>
          ) : (
            <p>Order this finding now. Its contents remain sealed until the due week.</p>
          )}
          <div>
            <span>{item.cost === 0 ? "Included" : `${item.cost} credit`}</span>
            {arrived ? (
              <span>Arrived Week {item.arrival_week}</span>
            ) : (
              <span>{item.lead_time_weeks} week lead</span>
            )}
          </div>
          {requestable && (
            <Button variant="secondary" className="button-full" busy={busy} onClick={onRequest}>
              Order for later {!busy && <ArrowRight size={15} />}
            </Button>
          )}
          {item.state === "requestable" && !requestable && (
            <small className="insufficient-credit">Insufficient investigation credits</small>
          )}
        </div>
      )}
    </article>
  );
}

function ReviewDecision({ data, emit }: { data: ArenaModel; emit: Emit }) {
  const run = data.run ?? {};
  const decision = run.current_decision ?? {};
  const draft = data.draft ?? EMPTY_DRAFT;
  const option = (decision.options ?? []).find((item: JsonMap) => item.id === draft.option_id);
  const evidence = (run.evidence ?? []).filter((item: JsonMap) => draft.evidence_refs.includes(item.id));
  const [confirmed, setConfirmed] = useState(false);
  const [busy, setBusy] = useState(false);
  useEffect(() => setBusy(false), [data.notice, data.screen]);

  return (
    <AppShell data={data} emit={emit} compact>
      <main className="review-page page-width-narrow">
        <button
          className="text-back"
          type="button"
          onClick={() => emit("navigate", { view: "decision", run_id: run.run_id })}
        >
          <ArrowLeft size={16} /> Back to edit
        </button>
        <section className="review-heading">
          <span className="eyebrow">Review before permanent commitment</span>
          <h1>{decision.id}. {decision.title}</h1>
          <p>This is the last editable boundary. Confirm the record reflects the judgment you intend to defend.</p>
        </section>
        <section className="review-card">
          <div className="review-action">
            <span className="option-letter">{option?.id}</span>
            <div><small>Selected action</small><h2>{option?.label}</h2></div>
          </div>
          <div className="review-record">
            <article className="review-wide"><small>Rationale</small><p>{draft.rationale}</p></article>
            <article><small>Accountable owner</small><p>{draft.owner}</p></article>
            <article><small>Critical assumption</small><p>{draft.assumptions}</p></article>
            <article><small>Acceptance or stop condition</small><p>{draft.acceptance_condition}</p></article>
            <article><small>Material risk</small><p>{draft.risk}</p></article>
            <article className="review-wide">
              <small>Evidence cited</small>
              {evidence.length ? (
                <div className="review-evidence">{evidence.map((item: JsonMap) => <span key={item.id}>{item.id} · {item.title}</span>)}</div>
              ) : <p>None cited</p>}
            </article>
          </div>
        </section>
        <section className="commit-boundary">
          <ShieldAlert size={22} />
          <div>
            <h3>Permanent commitment boundary</h3>
            <p>After commitment, this decision cannot be edited, replaced or silently rewritten.</p>
            <label>
              <input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />
              <span>I understand this decision becomes permanent.</span>
            </label>
          </div>
        </section>
        <div className="review-actions">
          <Button variant="secondary" onClick={() => emit("navigate", { view: "decision", run_id: run.run_id })}>
            <ArrowLeft size={16} /> Back to edit
          </Button>
          <Button
            disabled={!confirmed}
            busy={busy}
            onClick={() => {
              setBusy(true);
              emit("commit_decision", { run_id: run.run_id, confirmed: true });
            }}
          >
            <LockKeyhole size={16} /> Commit permanently
          </Button>
        </div>
      </main>
    </AppShell>
  );
}

function Consequence({ data, emit }: { data: ArenaModel; emit: Emit }) {
  const consequence = data.consequence ?? {};
  const run = data.run ?? {};
  const [busy, setBusy] = useState(false);
  useEffect(() => setBusy(false), [data.notice, data.screen]);
  const hasObservation =
    (consequence.signals ?? []).length ||
    (consequence.crises ?? []).length ||
    (consequence.evidence_arrived ?? []).length;
  return (
    <AppShell data={data} emit={emit} compact>
      <main className="consequence-page page-width-narrow">
        <section className="commit-success">
          <span className="success-ring"><Check size={28} /></span>
          <span className="eyebrow">Decision recorded</span>
          <h1>{consequence.decision_id} is now permanent.</h1>
          <p>{consequence.choice}</p>
          <div className="ledger-confirmation">
            <LockKeyhole size={14} /> Added to immutable run ledger · revision {run.revision}
          </div>
        </section>
        <section className="observable-panel">
          <div className="section-title">
            <span className="step-number"><Eye size={16} /></span>
            <div><h2>Observable consequence</h2><p>Only legitimate operational signals are shown during a first attempt.</p></div>
          </div>
          {!hasObservation && (
            <article className="neutral-observation"><Info size={18} /><p>No new operational signal was observable at this boundary.</p></article>
          )}
          <div className="observation-list">
            {(consequence.signals ?? []).map((signal: string, index: number) => (
              <article className="observation signal-observation" key={`${signal}-${index}`}>
                <Zap size={18} /><div><small>New signal</small><p>{signal}</p></div>
              </article>
            ))}
            {(consequence.crises ?? []).map((crisis: JsonMap) => (
              <article className="observation crisis-observation" key={crisis.id}>
                <ShieldAlert size={18} /><div><small>Material event</small><p>{crisis.observation}</p></div>
              </article>
            ))}
            {(consequence.evidence_arrived ?? []).map((item: string) => (
              <article className="observation evidence-observation" key={item}>
                <FileCheck2 size={18} /><div><small>Evidence arrived</small><p>{item} is now available.</p></div>
              </article>
            ))}
          </div>
        </section>
        <aside className="spoiler-note">
          <ShieldCheck size={18} />
          <p>No score, critical-gate outcome or preferred-path coaching is exposed during a first attempt.</p>
        </aside>
        <Button
          className="button-full consequence-next"
          busy={busy}
          onClick={() => {
            setBusy(true);
            emit("continue_consequence", { run_id: run.run_id });
          }}
        >
          {consequence.completed ? "Open executive debrief" : `Continue to ${consequence.next_decision}`}
          {!busy && <ArrowRight size={17} />}
        </Button>
      </main>
    </AppShell>
  );
}

function Debrief({ data, emit }: { data: ArenaModel; emit: Emit }) {
  const report = data.report ?? {};
  const run = data.run ?? {};
  const outcome = report.outcome ?? {};
  const [tab, setTab] = useState<"summary" | "gates" | "scorecard" | "development" | "timeline">("summary");
  const failed = (report.gates ?? []).filter((gate: JsonMap) => gate.status === "fail");
  const unresolved = (report.gates ?? []).filter((gate: JsonMap) => gate.status === "unresolved");
  const standing = outcome.gate_standing === "blocked"
    ? "Blocked"
    : outcome.gate_standing === "review_required"
      ? "Review required"
      : "Cleared";
  return (
    <AppShell data={data} emit={emit}>
      <main className="debrief-page">
        <section className="debrief-hero">
          <div className="page-width debrief-hero-inner">
            <button className="text-back text-back-light" type="button" onClick={() => emit("navigate", { view: "centre" })}>
              <ArrowLeft size={16} /> Run centre
            </button>
            <div className="debrief-heading-grid">
              <div>
                <span className="eyebrow eyebrow-light">Executive debrief</span>
                <h1>{outcome.label ?? report.recommendation}</h1>
                <p className="debrief-verdict">{outcome.verdict}</p>
                <p className="debrief-recommendation"><strong>Your D20 recommendation:</strong> {report.recommendation}</p>
              </div>
              <div className="score-lockup">
                <strong>{report.reported_overall}</strong>
                <div><span>Gate-adjusted competency</span><b>{report.provisional_label}</b></div>
              </div>
            </div>
            <div className="debrief-facts">
              <div><span>Gate standing</span><strong className={standing === "Cleared" ? "positive" : "negative"}>{standing}</strong></div>
              <div><span>Critical controls</span><strong>{failed.length} failed · {unresolved.length} unresolved</strong></div>
              <div><span>Programme health</span><strong>{outcome.program_health_average ?? "–"} / 100</strong></div>
              <div><span>Score before overall cap</span><strong>{outcome.score_before_overall_cap ?? report.raw_overall} / 100</strong></div>
            </div>
          </div>
        </section>

        <div className="debrief-nav-wrap">
          <nav className="debrief-nav page-width" aria-label="Debrief sections">
            {[
              ["summary", "Executive summary"],
              ["gates", "Critical gates"],
              ["scorecard", "Competency scorecard"],
              ["development", "Development plan"],
              ["timeline", "Decision timeline"],
            ].map(([id, label]) => (
              <button key={id} className={tab === id ? "active" : ""} type="button" onClick={() => setTab(id as any)}>
                {label}
              </button>
            ))}
          </nav>
        </div>

        <section className="debrief-content page-width">
          {tab === "summary" && <DebriefSummary report={report} />}
          {tab === "gates" && <GateReport gates={report.gates ?? []} />}
          {tab === "scorecard" && <Scorecard report={report} />}
          {tab === "development" && (
            <DevelopmentPlan
              report={report}
              run={run}
              runContext={data.run_context ?? { attempt_kind: "first_attempt" }}
              comparison={data.comparison}
              emit={emit}
            />
          )}
          {tab === "timeline" && <DecisionTimeline timeline={report.timeline ?? []} />}
        </section>

        <section className="export-band">
          <div className="page-width export-inner">
            <div><span className="eyebrow eyebrow-light">Portable evidence</span><h2>Take the complete record with you.</h2><p>Download the executive report or the replay-verifiable completed run.</p></div>
            <div>
              <Button variant="secondary" onClick={() => downloadJson(`${run.run_id}-debrief.json`, report)}>
                <Download size={16} /> Evidence pack
              </Button>
              <Button
                disabled={!data.completed_run_document}
                onClick={() => downloadJson(`${run.run_id}.json`, data.completed_run_document)}
              >
                <FileJson size={16} /> Completed run
              </Button>
              {data.links?.feedback && (
                <a className="button button-light" href={data.links.feedback} target="_blank" rel="noreferrer">
                  Share canary feedback <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </section>
        <div className="page-width calibration-notice">
          <Info size={17} /><p>{report.notice}</p>
        </div>
      </main>
    </AppShell>
  );
}

function DebriefSummary({ report }: { report: JsonMap }) {
  const outcome = report.outcome ?? {};
  const contract = report.assessment_contract ?? {};
  return (
    <div className="summary-view">
      <section className="result-explainer">
        <div className="subsection-heading"><Info size={19} /><div><span className="eyebrow">How to read this result</span><h2>One run produced three different judgments.</h2></div></div>
        <div className="result-layer-grid">
          <article>
            <span>Participant competency</span>
            <strong>{report.reported_overall} / 100</strong>
            <p>{contract.participant_score}</p>
            {outcome.overall_cap != null && <small>Overall score capped at {outcome.overall_cap} by a failed critical gate.</small>}
          </article>
          <article>
            <span>Simulated programme</span>
            <strong>{outcome.program_health_average} / 100</strong>
            <p>{contract.program_state}</p>
          </article>
          <article>
            <span>Release controls</span>
            <strong>{outcome.gate_standing === "blocked" ? "Blocked" : outcome.gate_standing === "review_required" ? "Review" : "Cleared"}</strong>
            <p>{contract.critical_gates}</p>
          </article>
        </div>
        <p className="assessment-disclosure"><ShieldAlert size={16} />{contract.free_text_boundary}</p>
      </section>
      <section className="judgment-columns">
        <div>
          <div className="subsection-heading"><CheckCircle2 size={19} /><div><span className="eyebrow">Strongest evidence</span><h2>Judgments that held</h2></div></div>
          <div className="judgment-list">
            {(report.strengths ?? []).map((item: JsonMap) => (
              <article className="strength-card" key={item.criterion_id}>
                <div><span>{item.criterion_id}</span><strong>{item.score}</strong></div>
                <h3>{item.name}</h3><p>{item.why}</p>
                <small>Supporting decisions: {(item.evidence ?? []).join(", ") || "Structural evidence"}</small>
              </article>
            ))}
          </div>
        </div>
        <div>
          <div className="subsection-heading"><Target size={19} /><div><span className="eyebrow">Replay priorities</span><h2>Where judgment broke</h2></div></div>
          <div className="judgment-list">
            {(report.development_needs ?? []).map((item: JsonMap) => (
              <article className="priority-card" key={item.criterion_id}>
                <div><span>{item.criterion_id}</span><strong>{item.score}</strong></div>
                <h3>{item.name}</h3><p>{item.priority}</p>
                <small>Contrary evidence: {(item.contrary_evidence ?? []).join(", ") || "Insufficient evidence"}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="perspective-section">
        <div className="subsection-heading"><UserRound size={19} /><div><span className="eyebrow">Executive perspectives</span><h2>How the decision reads upstairs</h2></div></div>
        <div className="perspective-grid">
          {(report.perspectives ?? []).map((item: JsonMap) => (
            <article key={item.role}>
              <div><span>{item.role}</span><strong>{item.score}</strong></div>
              <p>{item.view}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function GateReport({ gates }: { gates: JsonMap[] }) {
  const counts = gates.reduce((total: JsonMap, gate: JsonMap) => {
    total[gate.status] = (total[gate.status] ?? 0) + 1;
    return total;
  }, {});
  return (
    <div className="gate-view">
      <div className="section-lead">
        <span className="eyebrow">Non-compensable controls</span>
        <h2>Critical gates</h2>
        <p>A failed critical gate cannot be offset by strength elsewhere. Unresolved is not a pass.</p>
        <div className="gate-counts">
          <span>{counts.pass ?? 0} passed</span>
          <span>{counts.fail ?? 0} failed</span>
          <span>{counts.unresolved ?? 0} unresolved</span>
        </div>
      </div>
      <div className="gate-grid">
        {gates.map((gate) => {
          const Icon = gate.status === "pass" ? CheckCircle2 : gate.status === "unresolved" ? ShieldAlert : gate.status === "not_applicable" ? Circle : XCircle;
          const trace = (gate.basis_decisions ?? []).length > 0 ? gate.basis_decisions : gate.relevant_decisions;
          return (
          <article className={cx("gate-card", `gate-${gate.status.replace("_", "-")}`)} key={gate.gate_id}>
            <div>
              <span><Icon size={18} />{gate.status.replace("_", " ").toUpperCase()}</span>
              <strong>{gate.gate_id}</strong>
            </div>
            <h3>{gate.title}</h3>
            <dl>
              <div><dt>Control expected</dt><dd>{gate.expected_control}</dd></div>
              <div><dt>What your run established</dt><dd>{gate.reason}</dd></div>
              <div><dt>{gate.status === "pass" ? "Keep it passed" : "Required recovery"}</dt><dd>{gate.required_next_step}</dd></div>
            </dl>
            <footer><span>{gate.effect}</span><small>Trace: {(trace ?? []).join(", ") || "Final scope evidence"}</small></footer>
          </article>
          );
        })}
      </div>
    </div>
  );
}

function Scorecard({ report }: { report: JsonMap }) {
  const dimensions: JsonMap[] = report.dimensions ?? [];
  const [open, setOpen] = useState<string | null>(dimensions[0]?.id ?? null);
  return (
    <div className="scorecard-view">
      <div className="section-lead">
        <span className="eyebrow">Seven dimensions · 28 criteria</span>
        <h2>Competency scorecard</h2>
        <p>Scores reflect selected actions, normalized evidence, chronology, corrections and response completeness.</p>
        {report.overall_cap != null && (
          <div className="score-cap-callout">
            <ShieldAlert size={18} />
            <span>The criterion-weighted score was {report.raw_overall}. A critical gate capped the reported result at {report.overall_cap}.</span>
          </div>
        )}
      </div>
      <div className="dimension-list">
        {dimensions.map((dimension) => (
          <article className="dimension-card" key={dimension.id}>
            <button type="button" onClick={() => setOpen(open === dimension.id ? null : dimension.id)}>
              <div className="dimension-score"><strong>{dimension.reported_score.toFixed(1)}</strong><span>/ 100</span></div>
              <div className="dimension-name">
                <strong>{dimension.label}</strong>
                <span>Weight {Math.round(dimension.weight * 100)}%{dimension.cap != null ? ` · capped at ${dimension.cap}` : ""}</span>
                <div><i style={{ width: `${Math.max(0, Math.min(100, dimension.reported_score))}%` }} /></div>
              </div>
              <ChevronDown size={18} className={open === dimension.id ? "rotated" : ""} />
            </button>
            {open === dimension.id && (
              <div className="criterion-table">
                <div><span>Criterion</span><span>Score</span><span>Recorded evidence</span></div>
                {(dimension.criteria ?? []).map((criterion: JsonMap) => (
                  <article key={criterion.id}>
                    <div><strong>{criterion.id}</strong><span>{criterion.name}</span></div>
                    <strong>{criterion.score}</strong>
                    <div><p>{criterion.reason}</p><small>{criterion.stronger_evidence}</small></div>
                  </article>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

function DevelopmentPlan({
  report,
  run,
  runContext,
  comparison,
  emit,
}: {
  report: JsonMap;
  run: JsonMap;
  runContext: JsonMap;
  comparison?: JsonMap;
  emit: Emit;
}) {
  const learning = comparison?.source_learning_outcome ?? report.learning_outcome ?? {};
  const actions: JsonMap[] = comparison?.source_development_actions ?? report.development_actions ?? [];
  const replayActions: JsonMap[] = comparison?.actions ?? [];
  const replayById = Object.fromEntries(
    replayActions.map((item) => [item.id, item]),
  );
  const isReplay = runContext.attempt_kind === "practice_replay";
  return (
    <div className="development-view">
      <section className="learning-hero">
        <div>
          <span className="eyebrow">Primary learning</span>
          <h2>{learning.primary_learning}</h2>
          <p>{learning.closure_standard}</p>
        </div>
        <div className="learning-status">
          <span>Development status</span>
          <strong>{comparison?.practice_status === "corrected" ? "Practice corrected" : actions.length ? "Diagnosed" : "Practice ready"}</strong>
          <small>Transfer {comparison?.transfer_status === "verified" ? "verified" : "not yet verified"}</small>
        </div>
      </section>

      <section className="closure-path" aria-label="Gap closure path">
        {(learning.stages ?? []).map((stage: JsonMap, index: number) => {
          let status = stage.status;
          if (comparison) {
            if (index <= 1) status = "complete";
            if (index === 2) status = comparison.practice_status === "corrected" ? "complete" : "next";
            if (index === 3) status = "locked";
          }
          return (
            <article className={cx("closure-stage", `closure-${status}`)} key={stage.id}>
              <span>{index + 1}</span>
              <div><strong>{stage.label}</strong><small>{status === "complete" ? "Complete" : status === "next" ? "Next" : "Not verified"}</small></div>
            </article>
          );
        })}
      </section>
      <p className="artifact-boundary"><ShieldAlert size={16} />{learning.artifact_boundary}</p>

      {comparison && (
        <section className={cx("replay-comparison", comparison.practice_status === "corrected" && "replay-corrected")}>
          <div>
            <RefreshCcw size={20} />
            <div><span className="eyebrow">Corrective replay result</span><h2>{comparison.corrected_actions} of {comparison.total_actions} actions practice-corrected</h2></div>
          </div>
          <dl>
            <div><dt>Competency change</dt><dd>{comparison.score_change > 0 ? "+" : ""}{comparison.score_change} points</dd></div>
            <div><dt>Gate standing</dt><dd>{comparison.gate_standing_before} → {comparison.gate_standing_after}</dd></div>
            <div><dt>Transfer</dt><dd>Not verified</dd></div>
          </dl>
          <p>{comparison.transfer_note}</p>
        </section>
      )}

      <section className="development-actions">
        <div className="section-lead">
            <span className="eyebrow">From diagnosis to observable proof</span>
            <h2>{actions.length} corrective assignments</h2>
            <p>Each assignment identifies the control and artefact required before the decision is tested again.</p>
        </div>
        <div className="development-action-list">
          {actions.map((action) => {
            const replay = replayById[action.id];
            const status = replay?.status ?? action.status;
            return (
              <article className={cx("development-action-card", `development-${action.severity}`)} key={action.id}>
                <header>
                  <div><span>Priority {action.priority}</span><strong>{action.id}</strong></div>
                  <span className={cx("development-status", status === "practice_corrected" && "development-status-corrected")}>
                    {status === "practice_corrected" ? "Practice corrected" : status === "still_open" ? "Still open" : action.severity}
                  </span>
                </header>
                <h3>{action.title}</h3>
                <p className="action-diagnosis">{action.diagnosis}</p>
                <dl>
                  <div><dt>Pattern to interrupt</dt><dd>{action.failure_pattern}</dd></div>
                  <div><dt>Corrective control</dt><dd>{action.corrective_control}</dd></div>
                  <div><dt>Artefact to build</dt><dd><FileCheck2 size={15} />{action.required_artifact}</dd></div>
                  <div><dt>Replay assignment</dt><dd>{action.practice_assignment}</dd></div>
                  <div><dt>Proof required</dt><dd>{action.closure_test}</dd></div>
                </dl>
                <footer>
                  <span>Source: {(action.source_decisions ?? []).join(", ") || "Assessment evidence"}</span>
                  {replay && <strong>{replay.evidence}</strong>}
                </footer>
              </article>
            );
          })}
        </div>
      </section>

      <section className="development-next-step">
        <div>
          <span className="eyebrow">Next evidence boundary</span>
          <h2>{isReplay ? "Carry the corrected controls into the next transformation." : "Test the controls without changing the first attempt."}</h2>
          <p>
            {isReplay
              ? "A replay shows whether you can correct the same situation after feedback. The next scenario must test whether the judgment transfers when the facts and pressure pattern change."
              : "The replay uses the same scenario and remains uncoached. It creates a separate record and never replaces this benchmark result."}
          </p>
        </div>
        {!isReplay && (
          <Button onClick={() => emit("start_replay", { source_run_id: run.run_id })}>
            Start corrective replay <RefreshCcw size={16} />
          </Button>
        )}
      </section>
    </div>
  );
}

function DecisionTimeline({ timeline }: { timeline: JsonMap[] }) {
  return (
    <div className="timeline-view">
      <div className="section-lead">
        <span className="eyebrow">Chronological evidence</span>
        <h2>Decision timeline</h2>
        <p>The first-attempt record exactly as it was committed.</p>
      </div>
      <div className="timeline-list">
        {timeline.map((item) => (
          <details key={item.decision_id}>
            <summary>
              <span>{item.decision_id}</span>
              <div><strong>{item.title}</strong><small>{item.choice}</small></div>
              <ChevronDown size={18} />
            </summary>
            <div className="timeline-detail">
              <article><small>Rationale</small><p>{item.rationale}</p></article>
              {(item.signals ?? []).length > 0 && <article><small>Observable signals</small><p>{item.signals.join(" · ")}</p></article>}
              {(item.crises ?? []).length > 0 && <article className="timeline-crisis"><small>Material events</small><p>{item.crises.join(" · ")}</p></article>}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

function Fatal({ data }: { data: ArenaModel }) {
  return (
    <div className="fatal-page">
      <span className="brand-mark">A</span>
      <ShieldAlert size={30} />
      <h1>{data.fatal?.title ?? "The Arena could not start"}</h1>
      <p>{data.fatal?.message}</p>
      <a className="button button-primary" href={data.links?.github} target="_blank" rel="noreferrer">
        Open repository <ExternalLink size={16} />
      </a>
    </div>
  );
}

export default function App({ data, emit }: { data: ArenaModel; emit: Emit }) {
  const screen = data.screen;
  const navigationKey = `${screen}:${data.run?.run_id ?? ""}:${
    data.run?.current_decision?.id ?? ""
  }`;
  useEffect(() => {
    const streamlitMain = document.querySelector<HTMLElement>(
      '[data-testid="stMain"]',
    );
    if (streamlitMain) streamlitMain.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [navigationKey]);

  return (
    <>
      {screen === "marketing" && <Marketing data={data} emit={emit} />}
      {screen === "centre" && <RunCentre data={data} emit={emit} />}
      {screen === "briefing" && <Briefing data={data} emit={emit} />}
      {screen === "decision" && <DecisionCockpit data={data} emit={emit} />}
      {screen === "review" && <ReviewDecision data={data} emit={emit} />}
      {screen === "consequence" && <Consequence data={data} emit={emit} />}
      {screen === "debrief" && <Debrief data={data} emit={emit} />}
      {screen === "fatal" && <Fatal data={data} />}
      <Notice notice={data.notice} />
    </>
  );
}
