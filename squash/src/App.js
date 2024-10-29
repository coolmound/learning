import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className='title'>You can do it!</h1>
        <p className='text'>Although web design has a fairly recent history, it can be linked to other areas such as graphic design, user experience, and multimedia arts, but is more aptly seen from a technological standpoint.</p>
        <button className='button'>JUST START</button>
      </div>
      <div>
        <img src='./svg/image.svg' alt='SVG Image' width={445} height={742}></img></div>
    </div>
  );
}

export default App;
