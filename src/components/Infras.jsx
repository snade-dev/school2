import { dataInfras } from "../data";
import InfraCard from "./InfraCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Infras() {
  const infrasRef = useRef(null);
  useGSAP(
    () => {
      gsap.to("h2", {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: { trigger: "h2" },
      });
      gsap.to(".infraBox", {
        autoAlpha: 1,
        y: 0,
        duration: 1.3,
        stagger: 0.3,
        scrollTrigger: { trigger: ".infras" },
      });
    },
    { scope: infrasRef }
  );

  return (
    <div ref={infrasRef}>
      <div className="p-8 text-center">
        <h2 className="text-3xl md:text-4xl text-amber-500 font-bold uppercase opacity-0 -translate-y-7">
          Nos Inrastructures
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 my-4 p-2 infras">
        {dataInfras.map((unite) => (
          <InfraCard
            url={unite.url}
            name={unite.name}
            desc={unite.desc}
            id={unite.id}
            key={unite.id}
          />
        ))}
      </div>
    </div>
  );
}
