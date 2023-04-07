import Topnavbar from "./Topnavbar/Topnavbar";
import Buttomnavbar from "./buttomnavbar/buttomnavbar";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import About from "./About/About";
import Image from "./Image/Image";
import Project from "./Project/Project";
import Testimony from "./Testimony/Testimony";
import Why from "./Why/Why";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <>
      <Topnavbar />
      <Buttomnavbar />
      <Banner />
      <Services />
      <Image />
      <About />
      <Project />
      <Testimony />
      <Why />
      <Team />
      <Contact />
    </>
  );
};

export default App;
