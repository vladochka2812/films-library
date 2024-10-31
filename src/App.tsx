import { Button } from './shared/Button/Button';
import { Input } from './shared/Input/Input';
import { Header } from './widgets/Header/Header';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div className="m-20 flex">
        <Input
          type="text"
          placeholder="Search for a movie, tv show, person......"
        />
        <Button>Search</Button>
      </div>

      <Routes></Routes>
    </Router>
  );
}

export default App;
