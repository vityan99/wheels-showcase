import style from "./app.module.css";
import cn from "classnames";

import Show from "../show/Show";

import wheelsConfig from "../../assets/config/wheelsConfig";

function App() {
  return (
    <div className={cn(style.container)}>
      <Show config={wheelsConfig} />;
    </div>
  );
}

export default App;
