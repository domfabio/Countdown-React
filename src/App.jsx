import './App.css';
import NewYear from './assets/newyear.jpg';

//router
import { Outlet } from 'react-router-dom';

import { useContext } from 'react';
import { CountdownContext } from './context/CountdownContext';

function App() {
  const { event } = useContext(CountdownContext);

  let eventImage = null;

  if (event) eventImage = event.image;

  return (
    <div
      className='App'
      style={
        eventImage
          ? { backgroundImage: `url(${eventImage})` }
          : { backgroundImage: `url(${NewYear})` }
      }
    >
      <div className='container'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
