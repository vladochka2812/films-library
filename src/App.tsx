import { Footer } from './widgets/Footer/Footer';
import { Header } from './widgets/Header/Header';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes></Routes>
      <Footer />
    </Router>
  );
}

export default App;
