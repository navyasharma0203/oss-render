import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase.js";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./NavBar";
import Footer from "./Footer";

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

  return (
    <div>
      <NavBar />

      <div className="click-box">
        <button className="click-btn" onClick={getData}>
          Saved Repos
        </button>
        <div className="saveAll-box">
          {saves.map((save) => {
            return (
              <div className="save-box">
                <div className="repo-title">{save.name}</div>
                <div className="repo-desc">{save.desc}</div>
                <div className="repo-link">
                  <a href={save.link}>Read more</a>
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
