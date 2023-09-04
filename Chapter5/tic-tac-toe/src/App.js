import './App.css';
import Board from './tictactoe';
import Game from './ttt2';

function App() {
  return (
    <div className="App">
      <h1> Hello From React </h1>

      <Board></Board>

      <h1> Completed Game </h1>
      <Game> </Game>

    </div>
  );
}

export default App;
