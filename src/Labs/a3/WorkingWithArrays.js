import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   
   blockScoped,
   constant1,       
   numberArray1,   
   stringArray1
];

function WorkingWithArrays() {
    console.log("Working with Arrays");
    return (
      <>
      <h3>Working with Arrays</h3>
      numberArray1 = {numberArray1}<br />
      stringArray1 = {stringArray1}<br />
      variableArray1 = {variableArray1}<br/>
      <FindFunction/>
      <FindIndex/>
      <FilterFunction/>
      </>
    )
}

export default WorkingWithArrays;
