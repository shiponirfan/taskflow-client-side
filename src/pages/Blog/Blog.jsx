import AboutSection from "../../components/AboutSection/AboutSection";
import CallToAction from "../../components/CallToAction/CallToAction";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import Testimonial from "../../components/Testimonial/Testimonial";
import WorkingProcess from "../../components/WorkingProcess/WorkingProcess";

const Blog = () => {
  return (
    <div>
      <CallToAction />
      <WorkingProcess />
      <AboutSection />
      <MarqueeSlider />
      <Testimonial />
    </div>
  );
};

export default Blog;
