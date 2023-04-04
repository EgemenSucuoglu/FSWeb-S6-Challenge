import React, from "react";

import axios from "axios";
import Arama from "./components/Arama";

const [data, setData] = useState([]);
const [arama, setArama] = useState("");
const [icerik, setIcerik] = useState("");
const App = () => {
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => setData(response.data));
  }, []);

  function handeClick(name) {
    setIcerik(name === icerik ? null : name);
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Charecters</h1>
      {<Arama setArama={setArama} arama={arama} />}
      {data
        .filter((person) => {
          if (arama === "") {
            return person;
          } else if (
            person.name.toLowerCase().includes(arama.toLocaleLowerCase())
          ) {
            return person;
          }
        })
        .map((person) => {
          return (
            <Section
              key={person.name}
              data={person}
              handleClick={handleClick}
              icerik={icerik}
              setIcerik={setIcerik}
            />
          );
        })}
    </div>
  );
};
export default App;
