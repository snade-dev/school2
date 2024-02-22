import { infos } from "../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PresentationCard({ number, left, taille }) {
  const pRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  

  return (
    <div
      ref={pRef}
      className={`flex flex-col gap-4 md:grid md:grid-cols-${taille}
      } my-3 pBox`}
    >
      {left && (
        <div className=" sm:mr-6 rightBox">
          <img
            src={infos[number].img}
            className="h-[300px] w-full object-cover rightImg -translate-x-full opacity-0"
          />
        </div>
      )}
      <div className={`${!left && "sm:col-span-2"}`}>
        <h2 className=" text-3xl font-bold">{infos[number].title}</h2>
        <p>{infos[number].texte}</p>
      </div>
      {!left && (
        <div className=" sm:ml-6 leftBox">
          <img
            src={infos[number].img}
            className="h-[300px] w-full object-cover leftImg translate-x-full opacity-0"
          />
        </div>
      )}
    </div>
  );
}
