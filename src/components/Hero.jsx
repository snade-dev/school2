import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  useGSAP(
    () => {
      const TL = gsap.timeline();
      TL.to("h1", { autoAlpha: 1, y: 0, duration: 1 });
      TL.to(".bouton", { autoAlpha: 1, y: 0, duration: 1 }, "-=0.4");
    },
    { scope: heroRef }
  );

  return (
    <div
      ref={heroRef}
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(/school.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-white mt-14">
        <div className="">
          <h1 className="mb-5 sm:text-7xl text-3xl font-bold opacity-0 -translate-y-8">
            L'éducation est l'art de former les enfants
          </h1>
          {/* <p className="mb-5">
            Nous sommes une entreprise engagée dans la protection de
            l'environnement et la promotion du développement durable.
          </p> */}
          <button className="btn btn-primary mt-3 bouton translate-y-7 opacity-0">
            <a href="#histoire">En savoir plus</a>
          </button>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1708077672">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
