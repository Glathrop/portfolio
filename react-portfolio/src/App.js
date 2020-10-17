import React, {useState} from 'react';
import Header from './components/Header/';

import './App.css';

function App() {
  const navOptions = [
  {name: "About Me"}, 
  {name: "Past Projects"}, 
  {name: "Resume"}, 
  {name: "Contact Me"}
  ];

  const [currentTab, setCurrentTab] = useState(navOtions[0]);

  return (
    <div className="App">
      <Header 
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      />
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
