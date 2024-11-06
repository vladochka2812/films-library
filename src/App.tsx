import { RoutesList } from './app/routes/RoutesList';
import { Footer } from './widgets/Footer/Footer';
import { Header } from './widgets/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <RoutesList />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
