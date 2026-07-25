import type {
  FrontendRenderer,
  FrontendRendererArgs,
} from "@streamlit/component-v2-lib";
import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";

import App, { type ArenaModel } from "./App";
import "./styles.css";

type ArenaState = {
  event: { type: string; payload?: Record<string, unknown> } | null;
};

const roots: WeakMap<FrontendRendererArgs["parentElement"], Root> = new WeakMap();

const ArenaRoot: FrontendRenderer<ArenaState, ArenaModel> = (args) => {
  const { data, parentElement, setTriggerValue } = args;
  const rootElement = parentElement.querySelector(".arena-react-root");
  if (!rootElement) {
    throw new Error("AI Delivery Arena React root was not found.");
  }

  let root = roots.get(parentElement);
  if (!root) {
    root = createRoot(rootElement);
    roots.set(parentElement, root);
  }

  root.render(
    <StrictMode>
      <App
        data={data}
        emit={(type, payload = {}) => {
          setTriggerValue("event", { type, payload });
        }}
      />
    </StrictMode>,
  );

  return () => {
    const mounted = roots.get(parentElement);
    if (mounted) {
      mounted.unmount();
      roots.delete(parentElement);
    }
  };
};

export default ArenaRoot;
