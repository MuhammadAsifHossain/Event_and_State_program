import { useState } from "react";
// step 13: importing images
import Lion from "./img/lion.jpg";
import Tiger from "./img/tiger.jpeg";
import Jaguar from "./img/jaguar.jpg";
import Leopard from "./img/leopard.jpeg";
import Cheetah from "./img/cheetah.jpeg";
import Like from "./img/Like.png";
import Dislike from "./img/Dislike.png";
const myObject = {
  Lion, //equivalant to Lion:Lion
  Tiger,
  Jaguar,
  Leopard,
  Cheetah,
};
// step 10: creating child component here Animal and use {type} as prop
// note we have used destructing here
const ChildComp = ({ type }) => {
  const [One, setOne] = useState(0);
  const HandleClick1 = () => {
    setOne(One + 1);
  };

  const [Two, setTwo] = useState(0);
  const HandleClick2 = () => {
    setTwo(Two + 1);
  };
  return (
    <div>
      <img
        style={{ height: "150px", width: "200px" }}
        src={myObject[type]}
      ></img>
      <img
        onClick={HandleClick1}
        style={{ width: 20 + 10 * One + "px" }}
        src={Like}
      ></img>
      <img
        onClick={HandleClick2}
        style={{ width: 20 + 10 * Two + "px" }}
        src={Dislike}
      ></img>
    </div>
  );
};
export default ChildComp;
