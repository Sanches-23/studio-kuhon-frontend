import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    // <Navbar/>
    <main>
      <Outlet />
    </main>
    // <Footer/>
  );
}

export default App;
