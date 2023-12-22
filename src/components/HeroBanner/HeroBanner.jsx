import { Link } from "react-router-dom";
import task from "../../assets/banner/task.png";
const HeroBanner = () => {
  return (
    <div className="h-full lg:h-[calc(100vh-76px)]">
      <div className="container mx-auto px-6 lg:px-8 gap-8  h-full justify-between items-center flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 h-full w-full overflow-hidden">
          <img
          data-aos="fade-right" data-aos-delay="100"
            className="w-full h-full object-contain"
            src={task}
            alt="task image"
          />
        </div>
        <div className="lg:w-1/2 w-full py-12 md:py-28 lg:py-0 space-y-2 text-center lg:text-left">
          <h2 data-aos="fade-up" data-aos-delay="100" className="font-extrabold text-bg-primary 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl text-xl uppercase">
            Effortless Task Mastery
          </h2>
          <h2 data-aos="fade-up" data-aos-delay="200" className="font-extrabold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl text-xl  uppercase">
            Ultimate Task Manager
          </h2>
          <p data-aos="fade-up" data-aos-delay="300">
            Elevate your productivity with our intuitive Task Management
            Platform. Seamlessly organize, prioritize, and conquer your tasks
            with efficiency and ease. Get started on the path to streamlined
            success.
          </p>
          <Link
          data-aos="fade-up" data-aos-delay="400"
            to="/login"
            className="bg-bg-primary py-3 inline-block hover:bg-bg-secondary duration-300 text-white px-6  font-bold rounded"
          >
            Let’s Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
