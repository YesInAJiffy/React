import './styles.css'
import MyComp from './myComponent';


function App() {
  const divStyle = {
    backgroundColor: "lightblue",
    padding: "20px",
    border: "1px solid darkblue",
  };

  return (
    <div>
      <div style={divStyle}>
        <h1> This is the Chapter 3 react demo</h1>
      </div>
      <div className="compDiv">
        <h2> Inside the new div section</h2>
      </div>
      <MyComp></MyComp>
   

      <MyComp />
      <MyComp />
      <MyComp />
      <MyComp />
      <MyComp />
      
      
    </div>
  );
}

export default App;
