import Head from "next/head";

import styles from "../../styles/index.module.scss";
import SignUp from "./signup";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Podfy | Ouça Podcasts</title>
      </Head>

      <SignUp />
    </div>
  );
}
