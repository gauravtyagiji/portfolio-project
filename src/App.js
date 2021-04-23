import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"

import Project from './components/Project'
import Hobbies from './components/Hobbies'
import Post from './components/Post'
import AboutMe from './components/AboutMe'
import SinglePost from './components/SinglePost'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe';

import Home from './components/Home'

function App() {
  return (
    <>
  <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route component={Home} path='/' exact/>
    <Route component={AboutMe} path='/about' />
    <Route component={SinglePost} path='/post/:slug' />
    <Route component={Post} path='/post' />
    <Route component={Hobbies} path='/hobbies' />
    <Route component={Project} path='/project' />
    <Route component={ContactMe} path='/contact' />
    </Switch>
    <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
