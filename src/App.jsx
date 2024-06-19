//React hook = Special function that allows functional components
//             to use React features without writing class components
//             (useState, useEffect, useContent, useReducer, useCallback, ...etc.)

import Counter from "./Counter"
import MyComponent from "./MyComponent"

//useState() = A react hook that allows the creation of a stateful variable
//             And a setter function to update its value in the Virtual DOM.
//             [name, setName]



function App() {
  return (
    <>
      <MyComponent  />
      <Counter />
    </>
  )
 
}

export default App
