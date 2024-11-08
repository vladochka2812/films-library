import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './app/store/store';
import { Header } from './widgets/Header/Header';
import { RoutesList } from './app/routes/RoutesList';
import { Footer } from './widgets/Footer/Footer';
import { PersonCard } from './shared/PersonCard/model/PersonCard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <RoutesList />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
