import AboutSection from "../../components/AboutSection/AboutSection";
import CallToAction from "../../components/CallToAction/CallToAction";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import Testimonial from "../../components/Testimonial/Testimonial";
import WorkingProcess from "../../components/WorkingProcess/WorkingProcess";

const Home = () => {
    return (
        <div>
            <HeroBanner/>
            <WorkingProcess/>
            <AboutSection/>
            <CallToAction/>
            <MarqueeSlider/>
            <Testimonial/>
        </div>
    );
};

export default Home;