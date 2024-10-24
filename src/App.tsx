import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    // <Navbar/>
    <main>
      <Outlet />
    </main>
    // <Footer/>
  );
};

export default App;
