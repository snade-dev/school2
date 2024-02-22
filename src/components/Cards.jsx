import { Link } from "react-router-dom";

export default function Cards({ name, desc, url, Tcolor, Bcolor, Hcolor, id }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-3 md:grid md:grid-cols-3 box opacity-0 -translate-x-full">
      <figure className=" w-full">
        <img src={url} className="h-72 w-full object-cover" alt="Album" />
      </figure>
      <div className="card-body col-span-2">
        <h2 className={`card-title font-bold ${Tcolor}`}>{name}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-start">
          <Link
            className={`btn ${Bcolor} hover:${Hcolor} text-white font-bold`}
            to={`/presentation/${id}`}
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}
