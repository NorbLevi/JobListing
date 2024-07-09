import { Features } from "./components/Features";
import Footer from "./components/Footer"
import NavBar from "./components/Navbar";
import Presentation from "./components/Presentation"
import Explore from "./components/explore";
import FeaturedJobs from "./components/FeaturedJobs";
import LatestJobs from "./components/LatestJobs";

export const LandingPage = () => {
  return (
    <div className="min-w-screen overflow-y-auto">
      <div className="max-w-screen overflow-x-hidden flex justify-center items-center flex-col">
        <NavBar></NavBar>
        <div className="px-20 py-14 max-w-[1500px]">
          <Presentation></Presentation>
          <Explore></Explore>
          <FeaturedJobs></FeaturedJobs>
          <LatestJobs></LatestJobs>
          <Features></Features>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}