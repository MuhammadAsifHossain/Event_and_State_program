//step 1 importing State
import { useState } from "react";
// step 11 import Child Compnent
import ChildComp from "./ChildComp";
// step 4: creating a function to return random animal to an array
const AddRandomAnimal = () => {
  const animals = ["Lion", "Tiger", "Jaguar", "Leopard", "Cheetah"];
  return animals[Math.floor(Math.random() * animals.length)];
  //Math.random() generates a random number and Math.floor() rounds a number to the nearest integer
};

//step 2: creating the component in order to export to index.js
const App = () => {
  // step 5: initializing state with an empty array in order to add values
  const [Animal, setAnimal] = useState([]);
  //step 6 putting values into the state using Event function and state concet
  const ButtonClick = () => {
    /* STEP 7: ... Updates Arrays with State: In React components, 
    this pattern is often used to create a new array based on an existing state variable 
    and potentially some dynamic data from a function call (here AddRandomAnimal).*/
    setAnimal([...Animal, AddRandomAnimal()]);
  };
  // step 12:
  const newAnimals = Animal.map((animal, index) => {
    return <ChildComp type={animal} index={index} />;
  });
  //Step 8: using onClick Event with ButtonClick function we use {} here
  //and not call a function because it will call the fucntion even if button is not clicked
  return (
    <div>
      <button onClick={ButtonClick}>Add Animal</button>
      <div>{newAnimals}</div>
    </div>
  );
  // step 9:to show on screen the randomly generated value {} the state value
};
//step 3 exporting App component as default export
export default App;
