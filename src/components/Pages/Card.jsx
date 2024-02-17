import { IoIosBook } from "react-icons/io";

const Card = ({ habib }) => {
  console.log(habib);
  const { courseImg, courseName, description, coursePrice, credit } = habib;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-44 overflow-hidden">
          <img
            className="h-full hover:scale-110 transition-all duration-700"
            src={courseImg}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {courseName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="flex justify-center justify-between">
            <div className="">Price: ${coursePrice}</div>
            <div className="flex gap-1 items-center">
              <span>
                <IoIosBook />
              </span>
              <h1>Credit: {credit}</h1>
            </div>
          </div>
		  <button className="btn btn-primary btn-sm btn-block mt-3">Select now</button>
        </div>
      </div>
    </>
  );
};

export default Card;
