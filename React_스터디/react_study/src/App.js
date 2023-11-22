// import logo from './logo.svg';
import './App.css';

function Star() {
  let sum = "";
  for (let i = 1; i <= 5; i++) {

    for (let m = 1; m <= 2; m++) {
      for (let j = 1; j <= i; j++) {
        sum = sum + "*";
      }

      for (let k = 1; k <= 5 * 2 - 1 - 2 * i; k++) {
        sum = sum + " ";
      }

      if (i < 5) {
        for (let l = 1; l <= i; l++) {
          sum = sum + "*";
        }
      } 
      else {
        for (let l = 1; l < 5; l++) {
          sum = sum + "*";
        }
      }
    }
    
  }
  console.log(sum);
  return sum;
}

function App() {

  return (
    <div className="App">
      <h1>별 만들기</h1>
      <div>
        {Star()}
      </div>
    </div>
  );
}

export default App;
