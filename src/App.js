import ProjectCards from './ProjectCards';
import AboutMe from './AboutMe';
import './App.css';

function App() {
  return (
    <div className="Flexbox-container">
      <div className="Flexbox-sidebar">
        <a href='#'>About Me</a>
        <a href='#'>My Projects</a>
      </div>

      <AboutMe/>

    </div>
  );
}

export default App;
