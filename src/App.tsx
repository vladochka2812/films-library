import { RoutesList } from './app/routes/RoutesList';
import { Footer } from './widgets/Footer/Footer';
import { Header } from './widgets/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <RoutesList />
      <Footer />
    </Router>
  );
}

export default App;
