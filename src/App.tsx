import { Outlet } from 'react-router-dom';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
