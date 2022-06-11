import React from "react";
import photo1 from "../../images/photo1.png";
import photo2 from "../../images/photo2.png";
import photo3 from "../../images/photo3.png";
import photo4 from "../../images/photo4.png";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";

const Photosports = () => {
  return (
    <div>
      <div className="lg:w-4/6 mx-auto  p-4 m-5">
        <div className="my-6 ">
          <h2 className="my-4 text-2xl  text-gray-500 ">PhotoSports</h2>
          <div className="w-11/12">
            <p>
              This website is about sports photography. Select a package and
              keep your memory stored
            </p>
            <p>
              Users can see what type of services the photographer provides and
              book the service as he likes.
            </p>
            <p>
              Users can also see the photos in the gallery previously taken by
              the photographer.
            </p>
            <p>
              Users can register through email or Google. Without registration,
              a user can not checkout.
            </p>
          </div>
        </div>
        <div className="my-6">
          <h2 className="my-4 text-xl  text-gray-500 ">Technology Used</h2>
          <div>
            <div class="badge bg-[#010a13] mx-2 badge-outline">HTML</div>
            <div class="badge bg-[#010a13] mx-2 badge-outline">CSS</div>
            <div class="badge bg-[#010a13] mx-2 badge-outline">JavaScript</div>
            <div class="badge bg-[#010a13] mx-2 badge-outline">React</div>
            <div class="badge bg-[#010a13] mx-2 badge-outline">BootStrap</div>
            <div class="badge bg-[#010a13] mx-2 badge-outline">Firebase</div>
          </div>
        </div>
        <div className="flex lg:flex-row mt-8 sm:flex-col ">
          <div className="flex items-center mx-4 text-green-200 hover:text-stone-500">
            <CgWebsite size={24}></CgWebsite>
            <a
              href="https://assignment-10-1e27c.web.app/"
              alt="github"
              target="_blank"
              rel="noreferrer"
              className="text-xl ml-2"
            >
              Live site
            </a>
          </div>
          <div className="flex items-center mx-4 text-slate-400 hover:text-stone-500">
            <AiOutlineGithub size={24}></AiOutlineGithub>
            <a
              href="https://github.com/shafiul-naim/photosports-A-11"
              alt="github"
              target="_blank"
              rel="noreferrer"
              className="text-xl ml-2"
            >
             Github link
            </a>
          </div>
        
        </div>
      </div>

      <div className="lg:w-10/12 sm:w-full mx-auto my-8">
        <div class="carousel  rounded-box">
          <div class="carousel-item ">
            <img className="mx-1 p-2" src={photo1} alt="tool" />
          </div>
          <div class="carousel-item ">
            <img className="mx-1 p-2" src={photo2} alt="tool" />
          </div>
          <div class="carousel-item ">
            <img className="mx-1 p-2" src={photo3} alt="tool" />
          </div>
          <div class="carousel-item ">
            <img className=" mx-1 p-2" src={photo4} alt="tool" />
          </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default Photosports;
