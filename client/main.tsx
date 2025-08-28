import { createRoot } from "react-dom/client";
import App from "./App";

// Prevent multiple root creation during development hot reloads
const rootElement = document.getElementById("root")!;
let root = (window as any).__reactRoot;

if (!root) {
  root = createRoot(rootElement);
  (window as any).__reactRoot = root;
}

root.render(<App />);
