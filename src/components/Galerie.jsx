import { Link } from "react-router-dom";
import Cards from "./Cards";
import { data } from "../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Galerie() {
  const gRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.to("h2", {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: { trigger: "h2" },
      });
      gsap.to(".box", {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: { trigger: ".galerie" },
      });
    },
    { scope: gRef }
  );

  return (
    <div ref={gRef}>
      <div className=" px-8">
        <div className=" bg-slate-900 p-8 text-center">
          <h2 className=" text-3xl md:text-4xl text-amber-500 font-bold uppercase -translate-y-4 opacity-0">
            Nos cycles de formations
          </h2>
        </div>
        <div className="grid grid-cols-1 galerie">
          {data.map((unite) => (
            <Cards
              name={unite.name}
              url={unite.url}
              Tcolor={unite.Tcolor}
              Hcolor={unite.Hcolor}
              Bcolor={unite.Bcolor}
              desc={unite.desc}
              key={unite.id}
              id={unite.id}
              // className={}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
