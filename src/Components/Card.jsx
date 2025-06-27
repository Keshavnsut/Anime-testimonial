import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    let review = props.review;
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-10 mx-auto ">
                <img src={review.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-25" />
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl text-red-800 capitalize leading-3">{review.name}</p>
            </div>

            <div className="text-center mt-4">
                <p className="text-pink-800  text-lg font-bold uppercase">{review.job}</p>
            </div>

            <div className="text-red-900 mx-auto mt-5">
                <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-black ">{review.text}</div>

            <div className="text-red-900 mx-auto mt-5">
                <FaQuoteRight />
            </div>

      
        </div>
    );
};

export default Card;
