import { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { PageContext } from "../context/PageContext";
import { StileContext } from "../context/StileContext.jsx";

import "../scss/components/Form.scss";
import InputField from "../components/InputField";
import { CheckboxField } from "../components/InputField.jsx";

function StileCalc() {
  const { setCurrentPage } = useContext(PageContext);
  const { windowType, setWindowType } = useContext(StileContext);
  const { sashType, setSashType } = useContext(StileContext);


  const [inputs, setInputs] = useState([
    {id: "width",val: "400",},
    {id: "height",val: "900",},
    {id: "Quantity",val: "1",},
  ]);

  let types = [
    {val: 'casement-window',},
    {val: 'sliding-window',},
    {val: 'frameless-window',}
  ];

  let sashes= [
    {val: 'one',},
    {val: 'two',},
  ];

  useEffect(() => {
    types?.forEach(option => console.log(option.val, option.val == windowType));
  },[windowType]);

  function handleInputChange() {
    
  }

  useEffect(() => {
    setCurrentPage('Stile Calc')
  });

  return (
    <>
      <main>
        <section className="form">

          <form className="container">
            {types && <CheckboxField
              id="window-type"
              classNames={["windowType"]}
              options={types}
              name="type"
              selectedValue={windowType}
              onChange={setWindowType}
            />}

            {sashes && <CheckboxField
              id="number-of-sashes"
              // classNames={["sash-field"]}
              options={sashes}
              name="sash"
              selectedValue={sashType}
              onChange={setSashType}
            />}

            {inputs && inputs.map((input, key) => {
              return <InputField
                id={input.id}
                val={input.val}
                key={key}
                onchange={handleInputChange}
              />;
            })}
      
            <button id="compute">
              <i className="fa fa-calculator"></i>
              <span>CALCULATE</span>
            </button>
          </form>

          <Results/>
        </section>
      </main>
    </>
  )
}

function Results() {
  
}

export default StileCalc