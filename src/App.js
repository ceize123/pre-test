import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Tasks from './components/Tasks';

function App() {
  return (
    <BrowserRouter>
      <div className='App max-w-7xl mx-auto'>
        <Navigation />
        <Tasks />
      </div>
    </BrowserRouter>
  );
}

export default App;
