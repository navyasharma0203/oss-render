import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";


export default function App() {
  return (
    <footer className="backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 w-full nav-bg shadow z-50 bottom-0 py-8 mt-16">
      <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-58 mx:150px">
        
        <div className="btns">
    
          <div className = "small-btn">
            <div className='flex justify-end items-center'>
              <a className=" sbtn hover:cursor-pointer">
                <div className="s-btn"><AiFillGithub className="text-cyan-600 hover:text-teal-800  text-2xl" /></div>
              </a>
            </div>

            <div className='flex justify-end items-center'>
              <a className="ibtn hover:cursor-pointer">
                <div className="s-btn"><AiFillLinkedin className="text-indigo-500 hover:text-lime-800 text-2xl ml-2" /></div>
              </a>
            </div>

            <div className='flex justify-end items-center'>
              <a className="ibtn hover:cursor-pointer">
                <div className="s-btn"><AiFillInstagram className="text-indigo-500 hover:text-lime-800 text-2xl ml-2" /></div>
              </a>
            </div>

            <div className='flex justify-end items-center'>
              <a className="ibtn hover:cursor-pointer">
                <div className="s-btn"><AiFillTwitterCircle className="text-indigo-500 hover:text-lime-800 text-2xl ml-2" /></div>
              </a>
            </div>   

            <div className='flex justify-end items-center'>
              <a className="ibtn hover:cursor-pointer">
                <div className="s-btn"><AiFillFacebook className="text-indigo-500 hover:text-lime-800 text-2xl ml-2" /></div>
              </a>
            </div>   

          </div>
      
          <div className='flex justify-center mt-4'>
            <br />© 2020 Copyright : MDBootstrap.com
          </div>

        </div>
      
      </div>
    </footer>
  );
}