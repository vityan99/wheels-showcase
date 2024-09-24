import disk1 from "../img/disk1.png";
import disk2 from "../img/disk2.png";
import disk3 from "../img/disk3.png";

interface IWheelsConfig {
  id: number;
  key: number;
  src: string;
  alt: string;
  title: string;
}

type WheelsConfigType = IWheelsConfig[];

const wheelsConfig: WheelsConfigType = [
  {
    id: 1,
    key: 1,
    src: disk1,
    alt: "wheel",
    title: "NFS",
  },
  {
    id: 2,
    key: 2,
    src: disk2,
    alt: "wheel",
    title: "GT",
  },
  {
    id: 3,
    key: 3,
    src: disk3,
    alt: "wheel",
    title: "PRO",
  },
];

export default wheelsConfig;
