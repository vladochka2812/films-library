import { RoutesList } from './app/routes/RoutesList';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { Header } from './widgets/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <RoutesList />
      </Router>
    </Provider>
  );
}

export default App;
