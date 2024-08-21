import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {id:101, name: "The Philosophy Book", price: 27000, picture: "https://m.media-amazon.com/images/I/91AiNeHUoNL._AC_UF1000,1000_QL80_.jpg"},
    {id:102, name: "The Psychology Book", price: 25000, picture: "https://m.media-amazon.com/images/I/81LDP+GDKVL._AC_UF1000,1000_QL80_.jpg"},
    {id:103, name: "The History Book", price: 29000, picture: "https://m.media-amazon.com/images/I/91liAp+oaQL._AC_UF1000,1000_QL80_.jpg"},
    {id:104, name: "The Science Book", price: 23000, picture: "https://m.media-amazon.com/images/I/71egR+xVYGL._AC_UF1000,1000_QL80_.jpg"},
    {id:105, name: "The Literature Book", price: 32000, picture: "https://m.media-amazon.com/images/I/81mn255RAiL._AC_UF1000,1000_QL80_.jpg"},
    {id:106, name: "The Religions Book", price: 26000, picture: "https://m.media-amazon.com/images/I/81ntPHZ00CL._AC_UF1000,1000_QL80_.jpg"},
    {id:107, name: "The Poetry Book", price: 32000, picture: "https://images.penguinrandomhouse.com/cover/9780744080834"},
    {id:108, name: "The Business Book", price: 19000, picture: "https://m.media-amazon.com/images/I/81U0XUCfaQL._AC_UF1000,1000_QL80_.jpg"},

  ]);

  const [basket, setBasket] = useState([]);

  const increaseCount = (item) => {
    const found = basket.find(x => x.id == item.id)
    found.count ++
      setBasket([...basket])

  }

  const decreseCount = (item) => {
    const found = basket.find(x => x.id == item.id)
    found.count  = (found.count - 1) >=1 ?found.count - 1:1
      setBasket([...basket])

  }

  const removeItem = (id) => {
    const found = basket.filter(x => x.id != id)
    console.log(found)
    setBasket([...found])
    
  }

  const moveToCart = (prod) => {
    const result = basket.find(x => x.id == prod.id)
    if(result){
      result.count ++
      setBasket([...basket])
    } else {
      setBasket([...basket,{...prod, count:1}])
    }
 

  }
 

  return (
    <>
      <h1>Online Shop</h1> 
      <div className="content">
        <div>
          <h3>products</h3>
          <div className="list">
            {
              products.map(product => <div key={product.id}>
                <img src={product.picture} alt="" />
                <p>{product.name}</p>
                <strong>{product.price}AMD</strong>
                <br/>
                <button onClick={() => moveToCart(product)}>add to cart</button>
               
              </div>)
            }
          </div>
        </div>
        <div>
          <h3>Cart</h3>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>price</th>
                <th>count</th>
                <th>subtotal</th>
                <th>actions</th>

              </tr>

            </thead>
            <tbody>
              {
                basket.map(item => <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.count}</td>
                  <td>{item.count * item.price}</td>
                
                  <td><button onClick={() => increaseCount(item)}>+</button>
                  <button onClick={() => decreseCount(item)}>-</button>
                  <button onClick={() => removeItem(item.id)}>x</button></td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
