import { AiOutlineFileSearch } from "react-icons/ai";
import { BsBuildings } from "react-icons/bs";
import { LiaFunnelDollarSolid } from "react-icons/lia";
import { HiOutlineDocumentText } from "react-icons/hi2";
const WorkingProcess = () => {
  return (
    <div>
      <div className="container mx-auto xl:pt-28 lg:pt-20 pt-10 px-6 lg:px-8 text-center space-y-2">
        <h3 data-aos="fade-up" data-aos-delay="100" className="text-xl text-job-primary text-bg-primary font-semibold ">
          Working Process
        </h3>
        <h2 data-aos="fade-up" data-aos-delay="200" className="text-3xl font-bold ">How TaskFlow Works For You</h2>
        <div data-aos="fade-up" data-aos-delay="300" className="grid xl:grid-cols-4 md:grid-cols-2 gap-8 pt-10 lg:pt-20">
          <div data-aos="fade-up" data-aos-delay="400" className="w-full group h-full py-8 text-bg-primary text-center  hover:bg-bg-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl ">
            <div className="flex flex-col justify-center items-center h-full">
              <AiOutlineFileSearch className="text-7xl group-hover:text-white duration-300 text-job-primary" />

              <p className="mt-4 text-2xl font-bold group-hover:text-white duration-300  text-gray-900 ">
              Seamless Onboarding
              </p>
              <p className="px-6 py-2 text-gray-700 group-hover:text-white duration-300 ">
              Effortless setup for quick task management initiation.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="w-full group h-full py-8 text-center hover:bg-bg-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl ">
            <div className="flex flex-col justify-center items-center h-full">
              <BsBuildings className="text-7xl text-bg-primary group-hover:text-white duration-300 text-job-primary" />

              <p className="mt-4 text-2xl font-bold group-hover:text-white duration-300 text-gray-900 ">
              Intuitive Interface
              </p>
              <p className="px-6 py-2 text-gray-700 group-hover:text-white duration-300 ">
              User-friendly design for easy navigation and interaction.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="w-full group h-full py-8 text-center  hover:bg-bg-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl ">
            <div className="flex flex-col justify-center items-center h-full">
              <LiaFunnelDollarSolid className="text-7xl group-hover:text-white duration-300 text-bg-primary text-job-primary" />

              <p className="mt-4 text-2xl font-bold group-hover:text-white duration-300 text-gray-900 ">
              Collaborative Efficiency
              </p>
              <p className="px-6 py-2 text-gray-700 group-hover:text-white duration-300 ">
              Streamlined teamwork for enhanced productivity.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="700" className="w-full group h-full py-8 text-center hover:bg-bg-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl ">
            <div className="flex flex-col justify-center items-center h-full">
              <HiOutlineDocumentText className="text-7xl text-bg-primary group-hover:text-white duration-300 text-job-primary" />

              <p className="mt-4 text-2xl font-bold group-hover:text-white duration-300 text-gray-900 ">
              Smart Insights
              </p>
              <p className="px-6 py-2 text-gray-700 group-hover:text-white duration-300 ">
              Data-driven analytics for informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
