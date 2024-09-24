import style from "./button.module.css";
import cn from "classnames";

interface IButton {
  title: string;
  id: number;
  clickHandler: (id: number) => void;
}

function Button({ title, id, clickHandler }: IButton) {
  return (
    <button className={cn(style.btn, style["btn--base"])} onClick={() => clickHandler(id)}>
      {title}
    </button>
  );
}

export default Button;
