import CallToAction from "../../components/CallToAction/CallToAction";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import Testimonial from "../../components/Testimonial/Testimonial";
import WorkingProcess from "../../components/WorkingProcess/WorkingProcess";
import AboutSection from "./../../components/AboutSection/AboutSection";
const About = () => {
  return (
    <div>
      <WorkingProcess />
      <AboutSection />
      <CallToAction />
      <MarqueeSlider />
      <Testimonial />
    </div>
  );
};

export default About;
