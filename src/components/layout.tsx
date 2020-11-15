import { FC } from "react";
import styles from "./layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
