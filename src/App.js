import { Route } from 'react-router-dom';
import Home from './Views/Home/home';
import Landing from './Views/Landing/landing';
import Form from './Views/Form/form';
import Detail from './Views/Detail/detail';
import './App.css';

function App() {
  return (
    <div className="App"> 
    
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home}/>
      <Route path='/detail/:id' component={Detail}/>
      <Route path='/form' component={Form}/>      
    </div>
  );
}

export default App;
