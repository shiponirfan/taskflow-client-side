import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa";
const MarqueeSlider = () => {
  return (
    <div className="bg-bg-primary text-white text-3xl font-bold">
      <Marquee>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Effortless Task Organization</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Boost Productivity with TaskFlow</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Streamlined Task Management Made Simple</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Your Tasks, Your Way: TaskFlow</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Master Your Workflow with TaskFlow</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">TaskFlow: Where Efficiency Meets Innovation</span>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
