import React from "react";
import sport from "../../images/sports.jpg";
import tool from "../../images/electool.png";
import book from "../../images/bookkeeper.png";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

const Projects = () => {
  const navigate = useNavigate();
  
  const navigateToToolDetails = () => {
    navigate("/electool");
  };
  const navigateToBookDetails = () => {
    navigate("/books");
  };
  const navigateToPhotoDetails = () => {
    navigate("/photos");
  };

  return (
    <div id="project" className=" py-8">
      <div className="grid lg:grid-cols-3 lg:px-12 my-12  lg:w-11/12 lg:mx-auto sm:w-full  ">
        <div className=" w-5/6 shadow-xl mx-auto">
          <figure class="px-10 pt-10">
            <img src={tool} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title ">Electool</h2>
            <div class="divider"></div>
            <p className="text-sm h-20">
              This is a MERN based manufacturing industry of electric tools
              website using Tailwind CSS and daisyUI.
            </p>
            <div class="card-actions">
              
              <button
                onClick={() => navigateToToolDetails()}
                className="btn text-gray-400 bg-base-300 border-0  hover:bg-base-300 hover:border-0 hover:text-gray-300 hover:text-lg h-6"
              >
                <BsArrowRightCircle className="" /><span className="ml-2">See Details</span>
              </button>
            </div>
          </div>
        </div>
        <div class="w-5/6  shadow-xl mx-auto">
          <figure class="px-10 pt-10">
            <img src={book} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">BookKeeper</h2>
            <div class="divider"></div>
            <p className="text-sm h-20">This website is about managing the inventory of books. Where user can manage his book inventory with ease </p>
            <div class="card-actions">
            <button
                onClick={() => navigateToBookDetails()}
                className="btn text-gray-400 bg-base-300 border-0  hover:bg-base-300 hover:border-0 hover:text-gray-300 hover:text-lg h-6"
              >
                <BsArrowRightCircle className="" /><span className="ml-2">See Details</span>
              </button>
            </div>
          </div>
        </div>
        <div class="w-5/6  shadow-xl mx-auto">
          <figure class="px-10 pt-10">
            <img src={sport} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">PhotoSports</h2>
            <div class="divider"></div>
            <p className="text-sm h-20">This website is about sports photography. Select a package and keep your memory stored </p>
            <div class="card-actions ">
            <button
                onClick={() => navigateToPhotoDetails()}
                className="btn text-gray-400 bg-base-300 border-0  hover:bg-base-300 hover:border-0 hover:text-gray-300 hover:text-lg h-6"
              >
                <BsArrowRightCircle className="" /><span className="ml-2">See Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
