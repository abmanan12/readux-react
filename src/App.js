import './App.scss';

import { Provider } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle';

import store from './pages/store';
import Todos from './pages/Todos';

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <Todos />
      </Provider>

    </div>
  );
}

export default App;
