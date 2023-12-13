import { BrowserRouter } from 'react-router-dom';
import Tasks from './components/Tasks';
import ay_logo from './assets/ay_logo.svg';

function App() {
  return (
    <BrowserRouter>
      <div className='App max-w-7xl mx-auto text-gray-700'>
        <div className='flex flex-col justify-center items-center h-screen'>
          <img src={ay_logo} alt='logo' width='250' />
          <h1>Pre-Test by 郭奕佐</h1>
        </div>
        <Tasks />
      </div>
    </BrowserRouter>
  );
}

export default App;
