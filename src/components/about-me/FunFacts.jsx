import { funFacts } from "../../services/Data";
import outline from "../../assets/outline.png";
import dots from "../../assets/Dots.svg"

const FunFacts = () => {
  return (
    <div className="w-full sm:w-[90vw] mt-6 max-w-7xl mx-auto px-4 py-6">
      {/* title */}
      <div className="">
        <div className="flex items-center w-full sm:w-2/3">
          <h1 className="text-white text-2xl sm:text-3xl mr-3 flex">
            <span className="text-[#C778DD]">#</span>my-fun-facts{" "}
          </h1>
        </div>
      </div>

      {/* funfacts */}
     <div className="flex flex-col md:flex-row w-full mt-5 gap-6">
  {/* Fun Facts Section */}
  <div className="flex md:w-1/2 flex-wrap gap-4">
    {funFacts.map((fact, index) => (
      <p
        key={index}
        className="text-gray-200 border border-gray-400 py-1 px-2 text-sm rounded"
      >
        {fact}
      </p>
    ))}
  </div>

  {/* Image Section */}
  <div className="relative md:w-1/2 min-h-40 w-full flex">
    <img
      src={outline}
      alt="outline"
      className="absolute right-0 bottom-0 opacity-70"
    />
    <img src={dots} alt="decorative dots" className="w-14 z-10" />
  </div>
</div>

    </div>
  );
};

export default FunFacts;
