import Link from "next/link";
import "./styles.scss";

export default function Home() {
  return (
    <main>
      <nav className="💪 justify-center items-center gap-4">
        <Link className="hover:text-gray-400" href="/docs">
          Docs
        </Link>
        <Link className="hover:text-gray-400" href="/getstarted">
          Blog
        </Link>
        <Link className="hover:text-gray-400" href="/about">
          Showcase
        </Link>
        
      </nav>
      <div className="💪  😶‍🌫️ gap-4">
        <p>hello</p>
        <p>world</p>
      </div>
    </main>
  );
}
