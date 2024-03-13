//step 1 importing State
import { useState } from "react";
// creating a function to return random animal to an array
const AddRandomAnimal = () => {
  const animals = ["Lion", "Tiger", "Leopard", "Jaguar", "Cheetah"];
  return animals[Math.floor(Math.random() * animals.length)];
  //Math.random() generates a random number and Math.floor() rounds a number to the nearest integer
};

//step 2: creating the component in order to export to index.js
const App = () => {
  // step 4: initializing state with an empty array in order to add values
  const [animal, setanimal] = useState([]);
  //step 4 putting values into the state using Event function and state concet
  const ButtonClick = () => {
    /* STEP 5: ... Updates Arrays with State: In React components, 
    this pattern is often used to create a new array based on an existing state variable 
    and potentially some dynamic data from a function call (here AddRandomAnimal).*/
    setanimal([...animal, AddRandomAnimal()]);
  };

  return (
    //Step 6: using onClick Event with ButtonClick function we use {} here
    //and not call a function because it will call the fucntion even if button is not clicked
    <div>
      <button onClick={ButtonClick}>Add Animal</button>
      <div>{animal}</div>
    </div>
  );
  // step 7:to show on screen the randomly generated value {} the state value
};
//step 3 exporting App component as default export
export default App;
