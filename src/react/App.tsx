import { StrictMode } from "react";
import { Provider } from "react-redux";
import reactLogo from "../assets/react.svg";
import store from "./store";
import HomeView from "./views/HomeView";

export default function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <div className="flex">
          <img
            src={reactLogo}
            className="mr-2"
            alt="React logo"
          />
          <h2 className="color-blue">React test app</h2>
        </div>
        <HomeView />
      </Provider>
    </StrictMode>
  );
}
