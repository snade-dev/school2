import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaLaptopHouse } from "react-icons/fa";

export default function Details() {
  return (
    <ul className=" flex justify-around p-10 text-2xl font-bold bg-amber-300 text-center">
      <li className=" flex flex-col justify-center items-center" >
        <PiStudent className=" text-4xl"/>
        <span>1225</span>
        <span>Elèves</span>
      </li>
      <li className=" flex flex-col justify-center  items-center">
        <GiTeacher className=" text-4xl"/>
        <span>960</span>
        <span>Elèves</span>
      </li>
      <li className=" flex flex-col justify-center    items-center">
        <FaLaptopHouse className=" text-4xl"/>
        <span>70</span>
        <span>Classe</span>
      </li>
    </ul>
  );
}
