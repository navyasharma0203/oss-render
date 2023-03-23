import React from 'react';
import NavBar from './NavBar';
import Repos from './Repos';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useEffect, useContext } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../firebase/firebase';


function MainPage() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
   
  },[user])
  
  const posts = [
    {
      title: 'React',
      img: 'https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png',
      content:
        'Features: component-based architecture, virtual DOM, server-side rendering, hooks API',
    },
    {
      title: 'TensorFlow',
      img: 'https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png',
      content:
        'Features: high-level APIs, distributed training, model deployment, support for various platforms and devices',
    },
    {
      title: 'Apache Kafka',
      img: 'https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png',
      content:
        'Features: scalable, fault-tolerant, publish-subscribe messaging model, support for stream processing with Kafka Streams API',
    },
    {
      title: 'MySQL',
      img: 'https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png',
      content:
        'ACID-compliant, transaction support, high availability, replication, security features',
    },
    {
      title: 'Apache Hadoop',
      img: 'https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png',
      content:
        'Hadoop Distributed File System (HDFS), MapReduce processing model, YARN resource management, scalability, fault-tolerance',
    },
    {
      title: 'Node.js',
      img: 'https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png',
      content:
        'Features: fast, lightweight, easy to use, support for building scalable network applications, ecosystem of modules',
    },
    {
      title: 'Git',
      img: 'https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png',
      content:
        'Features: distributed architecture, branching and merging, support for large repositories, tools for code review and conflict resolution',
    },
  ];

  return (
    <>
      <NavBar />
      <div class="grid grid-cols-3 gap-2 w-full my-16 relative">
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
        <div class="flex flex-col col-span-2 items-center m-5">
          <h2 className="text-2xl mb-5">Search</h2>
          <div className="flex space-y-10 flex-col ">
            <div className="flex items-center m-15">
            
              <div className="flex border border-blue-200 rounded w-full">
                
                <input
                  type="text"
                  className="block w-full px-14 py-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search by name..."
                />
                <button className="px-4 pt-2 text-white bg-blue-600 border-l rounded ">
                  Search
                </button>
              </div>
            </div>
            <div className="flex border border-blue-200 rounded w-full">
                
                <input
                  type="text"
                  className="block w-full px-14 py-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search by tags..."
                />
                <button className="px-4 pt-2 text-white bg-blue-600 border-l rounded ">
                  Search
                </button>
              </div>

            <div className="flex items-center">
              <div className="flex border border-blue-200 rounded">
                <input
                  type="text"
                  className="block w-full px-14 py-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search by features..."
                />
                <button className="px-4 pt-2 text-white bg-blue-600 border-l rounded ">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Repos posts={posts} />
    </>
  );
}

export default MainPage;
