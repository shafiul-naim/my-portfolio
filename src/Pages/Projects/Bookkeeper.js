import React from "react";
import tool1 from "../../images/book.png";
import tool2 from "../../images/book1.png";
import tool3 from "../../images/book2.png";
import tool4 from "../../images/book4.png";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";

const Bookkeeper = () => {
  return (
    <div>
      <div className="lg:w-4/6 mx-auto  p-4 m-5">
        <div className="my-6 ">
          <h2 className="my-4 text-2xl  text-gray-500 ">BookKeeper</h2>
          <div className="w-11/12">
            <p>
            This website is about managing the inventory of books. Where user can manage his book inventory with ease
            </p>
            <p>
            This website is protected by react-router and connected to MongoDB by node.js. It also has secure authentication with firebase.

            </p>
            <p>
            On this website, users can track how many books they have, how much they sold, and how much they delivered. Also, one can add and delete items.
            </p>
            <p>
            Users can reduce the quantity of an item and restock the item.
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
            <div class="badge bg-[#010a13] mx-2 badge-outline">Tailwind</div>
            <div class="badge bg-[#010a13] mx-2 badge-outline">Node.js</div>
            <div class="badge bg-[#010a13] mx-2 badge-outline">MongoDB</div>
          </div>
        </div>
        <div class="divider"></div> 
        <div className="grid lg:grid-cols-3 w-5/6 mx-auto">
            
          <div className="flex items-center  text-green-200 hover:text-stone-500   w-3/6">
            <CgWebsite size={24}></CgWebsite>
            <a
              href="https://warehouse-management-a-11.web.app/"
              alt="github"
              target="_blank"
              rel="noreferrer"
              className="lg:text-xl my-2 sm:text-sm  "
            >
              Live site
            </a>
          </div>
          <div className="flex items-center  text-slate-400 hover:text-stone-500 w-3/6">
            <AiOutlineGithub size={24}></AiOutlineGithub>
            <a
              href="https://github.com/shafiul-naim/book-keeper-A-11-server"
              alt="github"
              target="_blank"
              rel="noreferrer"
              className="lg:text-xl my-2 sm:text-sm"
            >
              Server side
            </a>
          </div>
          <div className="flex items-center text-slate-400 hover:text-stone-500  w-3/6">
            <AiOutlineGithub size={24}></AiOutlineGithub>
            <a
              href="https://github.com/shafiul-naim/book-keeper-A-11"
              alt="github"
              target="_blank"
              rel="noreferrer"
              className="lg:text-xl my-2 sm:text-sm"
            >
              Client side
            </a>
          </div>
        </div>
        <div class="divider"></div> 
      </div>
      
      <div className="lg:w-9/12 sm:w-full mx-auto my-8">
        <div class="carousel  rounded-box">
          <div class="carousel-item ">
            <img className="mx-1 p-2" src={tool1} alt="tool" />
          </div>
          <div class="carousel-item ">
            <img className="mx-1 p-2" src={tool2} alt="tool" />
          </div>
          <div class="carousel-item ">
            <img className="mx-1 p-2" src={tool3} alt="tool" />
          </div>
          <div class="carousel-item ">
            <img className=" mx-1 p-2" src={tool4} alt="tool" />
          </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default Bookkeeper;
