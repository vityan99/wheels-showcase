import { useState } from "react";
import style from "./show.module.css";
import cn from "classnames";

import Image from "../image/Image";
import Button from "../button/Button";

interface IWheels {
  id: number;
  key: number;
  src: string;
  alt: string;
  title: string;
}

type IWheelsType = IWheels[];

function Wheels({ config }: { config: IWheelsType }) {
  interface IActiveWheel {
    id: number;
    clicked: boolean;
  }

  type ActiveWheelType = IActiveWheel[];

  const [activeWheel, setActiveWheel] = useState<ActiveWheelType>(config.map((data) => ({ id: data.id, clicked: false })));

  const clickActiveHandler = (id: number): void => {
    setActiveWheel((prevActive) => prevActive.map((item) => (item.id === id ? { ...item, clicked: !item.clicked } : item)));
  };

  return (
    <div className={style.wheels}>
      <div className={style.wheels__container}>
        {config.map((data) => {
          const currentActive = activeWheel.find((el) => el.id === data.id) || { id: data.id, clicked: false };
          return (
            <div className={cn(style["wheels__img-wrapper"])} key={data.key}>
              <Image src={data.src} alt={data.alt} active={currentActive} />
            </div>
          );
        })}
      </div>
      <div className={style.wheels__controllers}>
        {config.map((data) => (
          <Button title={data.title} id={data.id} key={data.key} clickHandler={clickActiveHandler} />
        ))}
      </div>
    </div>
  );
}

export default Wheels;
