import React, {useState} from 'react';

function MyComponent() {


  const [name, setName] = useState("Guest"); //Guest is the initial state
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  function updateName() {
    setName("Amira");
  }

  function updateAge() {
    // setAge(23);
    setAge(age + 1)
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return(
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Age</button>

        <p>Is employed: {isEmployed ? "Yes" : "No"} </p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )

}

export default MyComponent