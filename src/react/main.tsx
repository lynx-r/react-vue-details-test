import { createRoot } from "react-dom/client";
import { default as ReactApp } from "./App";

// const pinia = createPinia();

// Render your React component instead
const root = createRoot(document.getElementById("appReact")!);
root.render(<ReactApp />);
