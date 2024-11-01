import { RoutesList } from './app/routes/RoutesList';
import { Header } from './widgets/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <RoutesList />
    </Router>
  );
}

export default App;
