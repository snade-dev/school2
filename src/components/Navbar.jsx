import burger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const navRef = useRef(null);
  useGSAP(
    () => {
      gsap.to("li", { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 });
    },
    { scope: navRef }
  );

  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className=" fixed bg-white w-full z-30" ref={navRef}>
      <div className="mx-auto flex h-20 max-w-screen-xl justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 relative">
        <Link
          className="flex items-center text-amber-300 text-3xl font-bold"
          to="/"
        >
          <img src={logo} className="h-9" alt="" />
          <span className="">CSP Carnot</span>
        </Link>
        <nav
          aria-label="Global"
          className={`${showMenu ? "flex" : "hidden"} lg:flex bg-none`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-9 text-sm absolute top-full left-0 lg:relative z-10 w-full border-t-2 border-slate-300 py-2 md:py-0 md:border-0 bg-white ">
            <li className=" opacity-0 -translate-y-8">
              <a
                className="text-black text-lg transition hover:text-black/75 font-semibold uppercase"
                href="/#propos"
              >
                Acceuil
              </a>
            </li>

            <li className=" opacity-0 -translate-y-8">
              <Link
                className="text-black text-lg transition hover:text-black/75 font-semibold uppercase"
                to="/presentation"
              >
                Notre Ecole
              </Link>
            </li>

            <li className=" opacity-0 -translate-y-8">
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className=" text-black text-lg transition hover:text-black/75 font-semibold uppercase"
                >
                  Enseignement ⬇️
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to={"/enseignement/1"}>Guarderie</Link>
                  </li>
                  <li>
                    <Link to={"/enseignement/2"}>Maternelle</Link>
                  </li>
                  <li>
                    <Link to={"/enseignement/3"}>Fondamental</Link>
                  </li>
                  <li>
                    <Link to={"/enseignement/4"}>Lycée</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" opacity-0 -translate-y-8">
              <Link
                className="text-black text-lg transition hover:text-black/75 font-semibold uppercase"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>

          <img className=" w-5 h-5" src={showMenu ? close : burger} alt="" />
        </button>
      </div>
    </header>
  );
}
