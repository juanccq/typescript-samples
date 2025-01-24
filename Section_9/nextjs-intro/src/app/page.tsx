import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Item from "./components/Item";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/users">Users</Link>
      </main>
    </div>
  );
}
