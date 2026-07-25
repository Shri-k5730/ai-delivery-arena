import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import App, { type ArenaModel } from "./App";

afterEach(cleanup);

const base: ArenaModel = {
  product: {
    name: "AI Delivery Arena",
    tagline: "Judgment under pressure",
    version: "0.3.0",
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
