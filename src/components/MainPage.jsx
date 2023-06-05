import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Repos from './Repos';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useEffect, useContext } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../firebase/firebase';
import { useState} from 'react';
import axios from 'axios';

function MainPage() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');
  const [desc, setDesc] = useState('');

  const [search, setSearch] = useState({
    name: '',
    tags: '',
    desc: ''
  });

    async function fetchData() {
      try {
        let searchedPosts=[];
           const res  = await fetch('http://127.0.0.1:5000/similar_repos',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
              query : tags,

            })
          });
          const data = await res.json();
          if (data.status === "success"){
            searchedPosts=[...data.msg]
          }
        
       
          
          const res2  = await fetch('http://127.0.0.1:5000/similar_repos',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
              query : name,

            })
          });
          const data2 = await res2.json();
          if (data2.status === "success"){
            searchedPosts=[...searchedPosts, ...data2.msg]
          }
          if (searchedPosts.length === 0){
            alert("No results found")
          } else {
            setPosts(searchedPosts)
            console.log(searchedPosts)
          }
          console.log(searchedPosts)
         
      } 
      catch (error) {
        console.log(error);
      }
    }


  useEffect(() => {
    if (!user) {
      navigate('/');
    }
   
  },[user])

  const handleSearch = () => {
    setSearch({
      name,
      tags,
      desc
    })
    fetchData()
  }

  return (
    <>
      <NavBar />
      <div class="main-box grid grid-cols-3 gap-2 w-full my-16 pl-20 relative">
        <div class="flex flex-col col-span-1 items-left m-5 p-5 pl-16 popular-box">
          <h2 class="text-2xl mb-5 hd-box">Popular Searches</h2>

          <ul>
            <a href="https://www.mozilla.org/en-US/firefox/new/">
              <li class="font-mono text-base tbox"><a href="">Mozilla Firefox</a></li>
            </a>
            <a href="https://www.libreoffice.org/download/download-libreoffice/">
              <li class="font-mono text-base tbox">LibreOffice</li>
            </a>
            <a href="https://www.openoffice.org/download/">
              <li class="font-mono text-base tbox">Apache OpenOffice</li>
            </a>
            <a href="https://www.linux.org/">
              <li class="font-mono text-base tbox">Linux</li>
            </a>
            <a href="https://www.blender.org/">
              <li class="font-mono text-base tbox">Blender</li>
            </a>
            <a href="https://gcc.gnu.org/">
              <li class="font-mono text-base tbox">GNU Compiler</li>
            </a>
            <a href="https://www.gimp.org/">
              <li class="font-mono text-base tbox">Gimp</li>
            </a>
            <a href="https://www.python.org/">
              <li class="font-mono text-base tbox">Python</li>
            </a>
            <a href="https://www.php.net/">
              <li class="font-mono text-base tbox">PHP</li>
            </a>
            <a href="https://shotcut.org/">
              <li class="font-mono text-base tbox">Shotcut</li>
            </a>
          </ul>
        </div>

        <div class="flex flex-col col-span-2 items-center m-5 s-box">
          <h2 className="text-2xl my-5 stext ">Search</h2>
          <div className="flex space-y-10 flex-col">
            <div className="flex items-center m-15">
              <div className="flex rounded w-full">
                <input
                  type="text"
                  className="block w-full px-16 py-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search by name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex rounded w-full">
                <input
                  type="text"
                  className="block w-full px-16 py-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search by tags..."
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
                
              </div>

            <div className="flex items-center">
                <input
                  type="text"
                  className="block w-full px-16 py-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search by keywords..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
                
            </div>
            <button className=" px-4 pt-2 text-white bg-blue-600 border-l rounded " onClick={handleSearch}>
                  Search
                </button>
          </div>
        </div>
      </div>
      <Repos posts={posts} name={search.name} tags={search.tags} desc={search.desc} />
      <Footer />
    </>
    
  );
}

export default MainPage;
