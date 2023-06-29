
import React, {useState} from "react";
import './../styles/App.css';
import Select from 'react-select';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Delhi", label: "Delhi" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Kolkata", label: "Kolkata" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Pune", label: "Pune" },
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Lucknow", label: "Lucknow" },
    { value: "Kochi", label: "Kochi" },
    { value: "Surat", label: "Surat" },
    { value: "Kanpur", label: "Kanpur" },
    { value: "Goa", label: "Goa" },
    { value: "Ajmer", label: "Ajmer" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Jammu", label: "Jammu" },
    { value: "Navi Mumbai", label: "Navi Mumbai" },
    { value: "Jabalpur", label: "Jabalpur" },
    { value: "Vijayawada", label: "Vijayawada" },
    { value: "Jalander", label: "Jalander" },
  ];
  
  const handleSelectOption = (option) => {
    setSelectedOption(option)
  }
  return (
    <div>
      <h1>Autocomplete Form</h1>
        <form>
          <label htmlFor="city">Search cities of india: </label><br/>
         <Select
          options={options}
          value={selectedOption}
          onChange={handleSelectOption}
          // isClearable
          // isSearchable
         />

        </form>
    </div>
  )
}

export default App
