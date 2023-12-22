import { HiPencilSquare, HiSquare3Stack3D, HiUsers } from "react-icons/hi2";
import aboutSvg from "../../assets/banner/task-management.png";
const AboutSection = () => {
  return (
    <div className=" bg-white py-10 xl:py-0">
      <div className="container mx-auto p-4 px-6 lg:px-8">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 xl:pl-20">
            <h4 data-aos="fade-up" data-aos-delay="100" className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900  sm:leading-9">
            About TaskFlow
            </h4>
            <ul className="mt-10">
              <li data-aos="fade-up" data-aos-delay="200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-bg-primary rounded-md">
                      <HiSquare3Stack3D />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 ">
                    Tailored Task Recommendations
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 ">
                    Leverage intelligent algorithms to receive personalized task recommendations based on your preferences, priorities, and workflow. TaskFlow ensures efficient task discovery that aligns seamlessly with your work style.
                    </p>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300" className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-bg-primary rounded-md">
                      <HiPencilSquare />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 ">
                    Effortless Task Assignment
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 ">
                    Simplify your workflow with TaskFlow&apos;s streamlined task assignment process. Enjoy the ease of assigning tasks with just a few clicks, saving you time and enhancing overall productivity.
                    </p>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="400" className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-bg-primary  rounded-md">
                      <HiUsers />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 ">
                    Collaborative Efficiency
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 ">
                    Harness the power of collaborative task management. TaskFlow facilitates seamless teamwork, allowing users to work together efficiently on shared tasks, projects, and goals.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className="">
            <img
              src={aboutSvg}
              alt="about illustration"
              className="w-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
