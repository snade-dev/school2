import { infos } from "../data";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

export default function PresentationCard({ number, left, taille }) {
  const pRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const className = clsx('flex flex-col gap-4 md:grid my-3 pBox', {
    'md:grid-cols-2': taille === 2,
    "md:grid-cols-3": taille === 3,
  })
  

  return (
    <div
      ref={pRef}
      className={className}
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
