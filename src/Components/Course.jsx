import { BiDollarCircle } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ course }) => {
  const { photo, name, description, price, credit } = course;

  return (
    <div className="m-3 p-3 ">
      <div className="card h-full bg-slate-300 ">
        <figure>
          <img src={photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex pb-2 gap-3">
            <div className="flex items-center space-x-1">
              <BiDollarCircle />
              <h2>Price:{price}</h2>
            </div>
            <div className="flex items-center space-x-1">
              <IoBookOutline />
              <h2>Credit:{credit}hr</h2>
            </div>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-secondary text-black border-none bg-green-400 font-bold">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
