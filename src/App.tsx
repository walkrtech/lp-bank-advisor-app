import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Carrer } from './components/Carrer/Carrer';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Mockups } from './components/Mockups/Mockups';
import { Navbar } from './components/Navbar/Navbar';
import { Plans } from './components/Plans/Plans';


function App() {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <Header />
      <Carrer />
      <Mockups />
      <Plans />
      <Footer />
    </>
  );
}

export default App;
