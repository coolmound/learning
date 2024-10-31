import {ReactComponent as Logo } from './svg/image.svg';
// import logo from './svg/image.svg'

import './App.css';
const myComp = <div>vjhkvhrith</div>

function App() {
  return (
    <div className="App">
      <div className='general'>
        <div className='leftside'>
          <h1 className='title'>You can do it!</h1>
          <p className='text'>Although web design has a fairly recent history, it can be linked to other areas such as graphic design, user experience, and multimedia arts, but is more aptly seen from a technological standpoint.</p>
          <button className='button' onMouseEnter={()=>{alert('ok')}}>JUST START</button>
        </div>
        <div className='rightside'>
          <Logo />
          {myComp}
          {/* <img src={logo} /> */}
        </div>
      </div>
    </div>
  );

}
export default App;
