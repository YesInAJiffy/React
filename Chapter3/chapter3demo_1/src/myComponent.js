import React from "react";

function MyComp()
{
    return(
        <div className="mycomp"> 
        <h3> I am from inside a component</h3>
        <label for="username">Username:</label><br/>
        <input type="text" id="username"></input><br/>
        <button> Click me </button>
        </div>
    );
}

export default MyComp;