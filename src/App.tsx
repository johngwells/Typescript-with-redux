import { useEffect } from 'react';

import './App.css';

function App() {
  // async function getData() {
  //   let config = {
  //     headers: {
  //       Accept: 'application/json'
  //     }
  //   };
  //   const response = await fetch(
  //     'https://registry.npmjs.org/-/v1/search?text=react',
  //     config
  //   );
  //   const data = await response.json();
  //   console.log(data.objects);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Redux with TypeScript</h1>
      </header>
    </div>
  );
}

export default App;
