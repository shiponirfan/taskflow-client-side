import task from "../../assets/banner/task.png";
const HeroBanner = () => {
  return (
    <div
      className="h-[calc(100vh-64px)]"
    >
      <div className="container mx-auto px-6 lg:px-8 gap-8  h-full justify-between items-center flex">
      <div className="lg:w-1/2 h-full w-full">
          <img className="w-full h-full object-contain" src={task} alt="task image" />
        </div>
        <div className="lg:w-1/2 w-full space-y-2 text-center lg:text-left">
          <h2 className="font-extrabold text-bg-primary 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl text-xl uppercase">
          Effortless Task Mastery
          </h2>
          <h2 className="font-extrabold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl text-xl  uppercase">
          Ultimate Task Manager
          </h2>
          <p>
          Elevate your productivity with our intuitive Task Management Platform. Seamlessly organize, prioritize, and conquer your tasks with efficiency and ease. Get started on the path to streamlined success.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default HeroBanner;
