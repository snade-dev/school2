import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Histoire() {
  const divRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.to("img", {
        autoAlpha: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: divRef.current,
          end: "top 60%",
          scrub: 1,
        },
      });
      gsap.to(".content", {
        autoAlpha: 1,
        x: 0,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: { trigger: divRef.current, scrub: 1, end: "top" },
      });
    },
    { scope: divRef }
  );

  return (
    <div ref={divRef}>
      {/* <Details /> */}
      <section className="overflow-hidden bg-white sm:grid sm:grid-cols-2 my-8">
        <img
          alt="Student"
          src={profile}
          className="h-auto w-full object-cover sm:h-full -translate-x-8 opacity-0"
        />

        <div className="p-8 -translate-x-8 opacity-0 content">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right px-0">
            <h2 className="text-3xl text-left text-amber-500 font-bold md:text-3xl drop-shadow-md hover:text-amber-600 hover:drop-shadow-lg">
              Présentation de notre école
            </h2>

            <p className=" text-gray-500 text-left md:mt-4 md:block">
              Après avoir suivi de nombreuses formations, je me suis orienté
              vers l'entrepreneuriat, motivé par le constat alarmant de la
              pollution au Mali. Notre environnement, pollué par divers types de
              déchets, est devenu insalubre, propageant des maladies telles que
              le paludisme et la diarrhée, ainsi que des maladies liées à la
              pollution de l'air. Nous assistons à l'accumulation de déchets
              dans les caniveaux, les inondations, et le déversement de déchets
              non protégés dans les fosses. L'insalubrité de la ville de Bamako,
              particulièrement marquée par les odeurs de déchets, est devenue
              insuportable.
            </p>
          </div>
          <Link
            to="/presentation"
            className="btn mt-4 bg-amber-300 hover:bg-amber-500 hover:shadow-md text-white"
          >
            Notre Ecole
          </Link>
        </div>
      </section>
    </div>
  );
}
