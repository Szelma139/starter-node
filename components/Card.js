import React from "react";
import styles from "./Card.module.css";

import { IoIosArrowDroprightCircle } from "react-icons/io";

export const Card = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.box}>
        <div className={`${styles.red} ${styles.card}`}>
          <div className={`${styles.number} ${styles.start}`}>
            <h2>01</h2>
          </div>
          <div className={`${styles.start}`}>
            <p>Schematic Design</p>
          </div>
          <div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accucantium doloremque laudantium
            </p>
          </div>

          <div className="styles.icon">
            <IoIosArrowDroprightCircle size={"3em"} />
          </div>
        </div>
        </div>
    </div>
  );
};
