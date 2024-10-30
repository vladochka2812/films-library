import { FilmCard } from './shared/FilmCard/FilmCard';
import { Header } from './widgets/Header/Header';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <div className="m-20">
        <FilmCard />
      </div>
      <Routes></Routes>
    </Router>
  );
}

export default App;
