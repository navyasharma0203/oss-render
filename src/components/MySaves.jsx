import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase.js";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, deleteDoc } from "firebase/firestore";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { AiFillDelete } from "react-icons/ai";




export default function MySaves() {
  const [user] = useAuthState(auth);
  const [saves, setSaves] = useState([]);

  const getData = async () => {
    let userSaves = [];
    const querySnapshot = await getDocs(collection(db, "mySaves"));
    querySnapshot.forEach((doc) => {
      if (doc.data().userId === user.email) {
        userSaves.push(doc.data());
      }
    });
    setSaves(userSaves);
  };

  const deleteSave = async (name) => {
    const querySnapshot = await getDocs(collection(db, "mySaves"));
    querySnapshot.forEach((doc) => {
      if (doc.data().userId === user.email && doc.data().name === name) {
        deleteDoc(doc.ref);
      }
    });
    alert("Deleted Successfully!");
    getData();
  };
  
 

  return (
    <div>
      <NavBar />

      <div className="click-box">
        <button className="click-btn" onClick={getData}>
          Saved Repos
        </button>
        <div className="saveAll-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-10xl items-center mx-auto gap-16">
          {saves.map((save) => {
            return (
              <div className="save-box w-full rounded-lg shadow-md lg:max-w-sm m-4 grid gap-8 p-4 h-full">
                <div className="repo-title">{save.name}</div>
                <div className="repo-desc">{save.desc}</div>
                <div className="work-btn flex justify-between h-10 ">
                  <div className="repo-link text-sm text-blue-100 bg-blue-600 rounded shadow px-8 h-10 flex justify-end items-center">
                    <a href={save.link}>Read more</a>
                  </div>
                  <div className="repo-delete text-sm text-blue-100 flex justify-end items-center">
                    <button className="delete-btn" onClick={() => deleteSave(save.name)}><AiFillDelete /></button>
                                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}
