import React from 'react';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <h1>Каталог продуктов</h1>
      <AddProductForm />
      <ProductList />
    </div>
  );
}

export default App;
