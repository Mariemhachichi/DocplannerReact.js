import logo from './logo.svg';
import './App.css';
import Navb from './composants/header'
import Titre from './composants/titres'
import Paragraphe from './composants/paragraphes'
import Carte from './composants/cartes'

function App() {
  return (
    <div className="App">
      <Navb />
      <div className="image1">
      <img src="./assets/images/image1.png" alt="img"/>
      <Titre />
      <div className="flex">
      <Paragraphe />
      <Paragraphe />
      </div>
      <div className="flex">
      <Carte />
      <Carte />
      <Carte />
      </div>
      <div className="flex">
        <Titre />
        <img src="./assets/images/capture2.png" alt="im"/>
      </div>
      <div>
      <Titre />
      <Paragraphe />
      </div>
      </div>
    </div>
  );
}

export default App;
