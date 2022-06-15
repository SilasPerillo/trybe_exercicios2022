import './App.css';
import imgCat from './cat_img.jpg'
import Image from './Image'

function App() {
  return (
    <div>
      <Image source={imgCat} alternativeText='Cute cat staring'/>
    </div>
  );
}

export default App;
