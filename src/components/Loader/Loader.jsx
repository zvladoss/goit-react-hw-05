import s from "./Loader.module.css";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={s.loader}>
      <HashLoader size={50} color="#36d7b7" />
    </div>
  );
};

export default Loader;
