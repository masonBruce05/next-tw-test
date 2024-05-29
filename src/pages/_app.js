import Link from "next/link";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="bg-gray-900 p-4 text-white shadow-md">
        <div className="container mx-auto flex justify-between">
          <Link href="/" legacyBehavior>
            <a className="text-xl font-bold hover:text-gray-200 transition duration-300 ease-in-out">
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-xl font-bold hover:text-gray-200 transition duration-300 ease-in-out">
              About
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
