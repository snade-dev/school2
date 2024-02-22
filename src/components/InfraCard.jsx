import { Link } from "react-router-dom";
import { CiLaptop } from "react-icons/ci";
import { CiForkAndKnife } from "react-icons/ci";
import { MdOutlineSportsBasketball } from "react-icons/md";

export default function InfraCard({ url, name, desc, id }) {
  const icons = [
    {
      id: 1,
      icone: <CiLaptop />,
      color: "text-green-500",
    },
    {
      id: 2,
      icone: <CiForkAndKnife />,
      color: "text-amber-500",
    },
    {
      id: 3,
      icone: <MdOutlineSportsBasketball />,
      color: "text-blue-500",
    },
  ];

  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg infraBox -translate-y-full opacity-0">
      <img alt="Office" src={url} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6">
        <div className=" flex items-center justify-between">
          <h3 className="mt-0.5 text-3xl md:text-lg text-gray-900">{name}</h3>
          <span className={` text-3xl ${icons[id - 1].color}`}>
            {icons[id - 1].icone}
          </span>
        </div>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {desc}
        </p>
        {/* <Link to={`/produit/${id}`} className=" text-blue-600">
          En savoir plus 
        </Link> */}
      </div>
    </article>
  );
}
