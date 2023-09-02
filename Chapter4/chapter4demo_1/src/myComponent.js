import React from "react";
import ParentComponent from "./parentcomp"
import StateComponent from "./starthook";
import ArrayStateExample from "./complexstate"
import ExampleComponent from "./effecthook1"
import DataFetchingComponent2 from "./useeffect2"
function MyComp()
{
    return(
        <div className="mycomp"> 
        <DataFetchingComponent2></DataFetchingComponent2>
        <ArrayStateExample></ArrayStateExample>
        <ExampleComponent></ExampleComponent>
        <StateComponent></StateComponent>
        <ParentComponent></ParentComponent>
        <ParentComponent></ParentComponent>
        <ParentComponent></ParentComponent>
        <ParentComponent></ParentComponent>

        <h3> I am from inside a component</h3>
        <label>Username:</label><br/>
        <input type="text" id="username"></input><br/>
        <button> Click me </button>
     
        </div>
    );
}

export default MyComp;