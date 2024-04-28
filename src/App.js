import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState([
    {
      firstName: "",
      secondName: "",
    },
  ]);

  const handleOnChange = (e, valId) => {
    const { name, value } = e.target;
    const list = [...val];
    list[valId][name] = value;
    setVal(list);
  };

  const handleAdd = () => {
    setVal([
      ...val,
      {
        firstName: "",
        secondName: "",
      },
    ]);
  };

  const handleRemove = (removeIndex) => {
    const list = [...val];
    list.splice(removeIndex, 1);
    setVal(list);
  };

  const handleSave = () => {
    console.log("val", val);
    setVal([
      {
        firstName: "",
        secondName: "",
      },
    ]);
  };

  return (
    <>
      <div className="App">
        <h4>React Simple add and remove</h4>
        {val.map((each, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="m-1 d-flex align-items-center justify-content-center">
              <h5>First Name</h5>
              <input
                placeholder="Enter..."
                type="text"
                onChange={(e) => handleOnChange(e, index)}
                value={each.firstName}
                name="firstName"
              />
            </div>
            <div className="m-1 d-flex align-items-center justify-content-center">
              <h5>Second Name</h5>
              <input
                placeholder="Enter..."
                type="text"
                onChange={(e) => handleOnChange(e, index)}
                value={each.secondName}
                name="secondName"
              />
            </div>
            <div>
              {val.length - 1 === index && val.length < 4 && (
                <button className="m-1" onClick={handleAdd}>
                  Add
                </button>
              )}
              {val.length > 1 && (
                <button className="m-1" onClick={() => handleRemove(index)}>
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        <button onClick={handleSave}>Save</button>
      </div>
    </>
  );
}

export default App;
