import style from "./image.module.css";
import cn from "classnames";

interface IImage {
  src: string;
  alt: string;
  active?: IActive;
}

interface IActive {
  id: number;
  clicked: boolean;
}

function Image({ src, alt, active }: IImage) {
  return <img src={src} alt={alt} className={cn(style.image, active && active.clicked && style["image--rotate"])} />;
}

export default Image;
