import s from "./Container.module.css";
import clsx from "clsx";
const Container = ({ children }) => {
  return <div className={clsx(s.container)}>{children}</div>;
};

export default Container;
