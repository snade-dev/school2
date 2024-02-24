import PresentationCard from "../components/PresentationCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Presentation() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("h1", { autoAlpha: 1, scale: 1.5 });
    gsap.to(".rightImg", {
      x: 0,
      autoAlpha: 1,
      duration: 1,
      stagger: 1.2,
      scrollTrigger: { trigger: ".rightBox" },
    });
    gsap.to(".leftImg", {
      x: 0,
      autoAlpha: 1,
      duration: 1,
      stagger: 1.2,
      scrollTrigger: { trigger: ".leftBox" },
    });

    const textAnimation = gsap.timeline();

    textAnimation.from(".char", {
      y: 100,
      stagger: { each: 0.1 },
      ease: "back.out",
    });
  });

  return (
    <div className=" overflow-hidden mx-6">
      <div
        className=" h-[300px] flex items-center justify-center bg-center bg-cover relative"
        style={{ backgroundImage: "url('/profile.jpg')" }}
      >
        <div className=" w-full h-full bg-black opacity-50 absolute z-0"></div>
        <h1 className="text-4xl text-white font-bold z-10 flex overflow-hidden">
          {"Notre Ecole".split("").map((word) => {
            return word === " " ? (
              <span className="char">&nbsp;</span>
            ) : (
              <span className="char">{word}</span>
            );
          })}
        </h1>
      </div>
      <div className=" flex flex-col gap-4">
        <PresentationCard number={0} left={true} taille={2} />
        <PresentationCard number={1} left={false} taille={3} />
        <PresentationCard number={2} left={true} taille={2} />
        <PresentationCard number={3} left={false} taille={3} />
      </div>
    </div>
  );
}
