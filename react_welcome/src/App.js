
import React from 'react';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <h1>Сообщения</h1>
      <Message text="Привет, мир!" />
      <Message text="Это компонент Message." />
    </div>
  );
}

export default App;
