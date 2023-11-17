import Image from "next/image";
import Link from "next/link";
import styles  from "../../styles/Home.module.css"

export default function Nav() {
  return (
      <div className={styles.description}>
    <p>
      Get started by editing&nbsp;
      <code className={styles.code}>pages/index.tsx</code>
    </p>
    <div>
      <Link
        href="/"
      >
        By{' '}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  </div>
  )
}
