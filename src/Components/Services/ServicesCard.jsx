/* eslint-disable react/prop-types */
import { AiOutlineArrowRight } from "react-icons/ai";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-[240px] w-full"
            src={img}
            alt="service"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-red-500 font-medium">Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-circle text-red-500"><AiOutlineArrowRight></AiOutlineArrowRight></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
