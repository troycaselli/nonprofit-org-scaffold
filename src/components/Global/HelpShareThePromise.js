import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import * as styles from "../../styles/Global/HelpShareThePromise.module.css";

import * as globalStyles from "../../styles/Global/Global.module.css";
import { FACEBOOK, INSTAGRAM, YOUTUBE } from "../../utils/data/socials";

export default function HelpShareThePromise() {
  const redirectTo = (link) => window.open(link);

  return (
    <div className={globalStyles.genericContainer}>
      <div className={styles.container}>
        <h1>Help share the promise</h1>

        <div className={styles.socials}>
          <FaFacebookF onClick={() => redirectTo(FACEBOOK)} />
          <FaYoutube onClick={() => redirectTo(YOUTUBE)} />
          <FaInstagram onClick={() => redirectTo(INSTAGRAM)} />
        </div>
      </div>
    </div>
  );
}
