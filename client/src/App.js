import {Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import VideoGame from './components/Videogame/Videogame';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <>
      <Route exact path='/' component={LandingPage}/>
      <Route path="/(home|/videogame/)" component={Nav}/>
      <Route path='/home' component={Search}/>
      <Route path='/home' component={Filter}/>
      <Route path='/home' component={Home}/>
      <Route path='/videogame/:id' component={VideoGame}/>
    </>
  );
}

export default App;
