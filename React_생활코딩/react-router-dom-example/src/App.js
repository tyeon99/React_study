// import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import './App.css';

function Home(){
  return (
    <div>
      <h2>Home</h2>
      <p>Home...</p>
    </div>
  );
}

var contents = [
  {id:1, title:'HTML', description: 'HTML is...'},
  {id:1, title:'JS', description: 'JS is...'},
  {id:1, title:'REACT', description: 'REACT is...'},
];

function Topic(){
  var params = useParams();
  var topic_id = parms.topic_id;
  var selected_topic = {
    title: 'Sorry',
    description: 'Not Found'
  };
  for(var i = 0; i < contents.length; i++){
    if(contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  console.log(params);
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Topics() {
  var lis = [];
  for (var i = 0; i < contents.length; i++){
    lis.push(
      <li key={contents[i].id}><NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink></li>
    );
  }
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  );
}

function Contact(){
  return (
    <div>
      <h2>Conteact</h2>
      <p>Conteact...</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to="/ ">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      
    </div>
  );
}

export default App;
