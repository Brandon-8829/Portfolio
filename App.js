
import logo from './logo.svg';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './App.css';
import Navbar from'./Navbar.js';
import Projects from './Projects';
import About from './About';
import Articles from './Articles';
//import SocialMediaLink from './SocialMedia.js';


function Welcome(){
  return <p>Welcome to my React App!</p>;
}

function menue(){
  
}

function App() {
  return (
    <BrowserRouter>
    <div className="social-media"> 
      <SocialIcon url="https://www.linkedin.com/in/brandon-m-harris/"
      />
      <SocialIcon url="https://github.com/Brandon-8829" />
    </div>
    <div className="welcome-message">
      <h1 className="brandon-harris">Brandon Harris</h1>
      <h2 className="welcome-message">Welcome to my Portfolio!</h2>
    </div>
      <div className="App">
          <img src="https://media-exp1.licdn.com/dms/image/D4D35AQEV4tgmlCHu7A/profile-framedphoto-shrink_200_200/0/1622665830498?e=1623556800&v=beta&t=25pHz4G9JaBaQLTmsqp9n9fbYSKjgzFSjO0fvVKK3iE" className="App-logo" alt="logo" />
          
          <div>
            <Link href="" className="items">Projects</Link>
            <Link href="" className="items">Articles</Link>
            <Link href="" className="items">About</Link>
          </div>
      </div>
      <Route exact path="/" component={Projects} />
      <Route path="/" component={Articles} />
      <Route path="/" component={About} />
      </BrowserRouter>
  );
}

export default App;
