import React from 'react';
import NavBar from './NavBar';
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

  useEffect(() => {
    async function fetchData() {
      try {
        let dataArray = [];
        for(let i = 1; i <= 200; i++) {
          const { data } = await axios.get(`../../json/data (${i}).json`);
          dataArray.push(data)
          console.log(data)
        }
        setPosts(dataArray)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  

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
  }

  return (
    <>
      <NavBar />
      <div class="grid grid-cols-3 gap-2 w-full my-16 pl-20 relative">
        <div class="flex flex-col col-span-1 items-left m-5 p-5 pl-16 bg-blue-200">
          <h2 class="text-2xl mb-5">Popular Repositories</h2>

          <li class="font-mono text-base">React</li>
          <li class="font-mono text-base">TensorFlow</li>
          <li class="font-mono text-base">Apache Kafka</li>
          <li class="font-mono text-base">MySQL</li>
          <li class="font-mono text-base">Apache Hadoop</li>
          <li class="font-mono text-base">Node.js</li>
          <li class="font-mono text-base">Git</li>
          <li class="font-mono text-base">Apache Spark</li>
          <li class="font-mono text-base">OpenCV</li>
          <li class="font-mono text-base">Docker</li>
        </div>
        <div class="flex flex-col col-span-2 items-center m-5 ">
          <h2 className="text-2xl mb-5 ">Search</h2>
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
    </>
  );
}

export default MainPage;
