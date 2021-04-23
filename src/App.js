import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Particles from 'react-particles-js'
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
    <Particles className="particle-canvas"
    params = {{
      particles: {
        number:{
          value: 5, density:{
            enable: true, value_area: 100
          }
        },
        shape: "square", stroke: {
          width:6, color: "#f9ab00"
        }
      }
    }}
    />
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
