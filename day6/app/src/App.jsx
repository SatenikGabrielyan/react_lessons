import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Child } from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProducts(data)
  });

  },[count]);

  const remove = id => {
    setProducts(products.filter(c => c.id != id));
  }

 

  return (
    <>
    <p>count {products.length}</p>
    <h1>{count}</h1>
    <button onClick={() => setCount(count+1)}>up</button>
    {
      products.map(item => <Child key={item.id} id = {item.id} onRemove = {remove} />)
    }
    
    
     
    </>
  )
};

export default App;
