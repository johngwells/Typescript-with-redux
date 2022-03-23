import { Provider } from 'react-redux';
import { store } from './redux';

import './App.css';
import RepoList from './components/RepoList';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <h1>Redux with TypeScript</h1>
          <RepoList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
