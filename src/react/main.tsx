import { createRoot } from "react-dom/client";
import { default as ReactApp } from "./App";

// Render your React component instead
const root = createRoot(document.getElementById("appReact")!);
root.render(<ReactApp />);
