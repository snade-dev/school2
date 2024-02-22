import { useParams } from "react-router-dom";
import { data } from "../data";

export default function Enseignement() {
  const params = useParams();
  return (
    <div>
      <div
        className={` h-[300px] flex items-center justify-center bg-center bg-cover relative `}
        style={{
          backgroundImage: `url(${data[params.id - 1].url2})`,
        }}
      >
        <div className=" w-full h-full bg-black opacity-50 absolute z-0"></div>
        <h1 className="text-4xl text-white font-bold z-10">
          {data[params.id - 1].name}
        </h1>
      </div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src={data[params.id - 1].url}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  {data[params.id - 1].titre2}
                </h2>

                <p className="mt-4 text-gray-600">{data[params.id - 1].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-3xl font-bold text-center">Les documents à founir</h2>
    </div>
  );
}
