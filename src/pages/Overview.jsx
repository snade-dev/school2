import Details from "../components/Details";
import Footer from "../components/Footer";
import Galerie from "../components/Galerie";
import Hero from "../components/Hero";
import Histoire from "../components/Histoire";
import Infras from "../components/Infras";

export default function Overview() {
  return (
    <>
        <Hero/>
        <Histoire/>
        <Galerie />
        <Details />
        <Infras />
    </>
  )
}