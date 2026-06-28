
import { useEffect, useState } from "react"
import "../scss/components/InputField.scss";

function InputField({
  inputType = "number",
  id,
  val,
  msgType,
  msg,
}) {
  const [value, setValue] = useState(val);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="InputField">
      <div className="InputField__container">
        <input
          type={inputType}
          id={`${id}_input`}
          val={val}
          value={value}
          onChange={handleChange}
        />
        <label
          htmlFor={`${id}_input`}>
          {id && id}
        </label>
      </div>

      <div
        className={`error-message ${id}Error ${msgType && msgType}`}>
        {(msg)
          ? msg
          : <>Please input a valid number</>
        }
        
      </div>
    </div>
  )
}


export function CheckboxField({
  id,
  classNames = [],
  options = [],
  name,
  selectedValue,
  onChange,
}) {
  // console.log(selectedValue);
  // useEffect(() => {
  //   selectedValue = selectedValue;
  // },[selectedValue]);

  return (
    <fieldset id={id} className={classNames.join(" ")}>
      <legend>Select {id.replace('-',' ')}</legend>

      <div className="types">
        {options.map((option, key) => (
          <Checkbox
            data={option}
            key={key}
            name={name}
            selectedValue={selectedValue}
            onChange={onChange}
          />
        ))}

        <div className="error-msg">Please select an option</div>
      </div>
    </fieldset>
  )
}

function Checkbox({ data, name, selectedValue, onChange }) {
  const value = data?.val ?? "Option";

  return (
    <label htmlFor={value}>
      <input
        type="radio"
        name={name}
        id={value}
        checked={selectedValue == value}
        onChange={() => {
          onChange(value)
          console.log(data, selectedValue, value, selectedValue == value);
        }}
      />
      <span>{value.replace('-'," ")}</span>
    </label>
  );
}

export default InputField