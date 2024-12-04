import "./App.css"
import { Basket } from "./components/Basket"
import { ProductList } from "./components/ProductList"
import {useState} from "react"

export default function App(){

  const [products, setProducts] = useState([
    {id:101, name: "The Philosophy Book", price: 27000, picture: "https://m.media-amazon.com/images/I/91AiNeHUoNL._AC_UF1000,1000_QL80_.jpg"},
    {id:102, name: "The Psychology Book", price: 25000, picture: "https://m.media-amazon.com/images/I/81LDP+GDKVL._AC_UF1000,1000_QL80_.jpg"},
    {id:103, name: "The History Book", price: 29000, picture: "https://m.media-amazon.com/images/I/91liAp+oaQL._AC_UF1000,1000_QL80_.jpg"},
    {id:104, name: "The Science Book", price: 23000, picture: "https://m.media-amazon.com/images/I/71egR+xVYGL._AC_UF1000,1000_QL80_.jpg"},
    {id:105, name: "The Literature Book", price: 32000, picture: "https://m.media-amazon.com/images/I/81mn255RAiL._AC_UF1000,1000_QL80_.jpg"},
    {id:106, name: "The Religions Book", price: 26000, picture: "https://m.media-amazon.com/images/I/81ntPHZ00CL._AC_UF1000,1000_QL80_.jpg"},
    {id:107, name: "The Poetry Book", price: 32000, picture: "https://images.penguinrandomhouse.com/cover/9780744080834"},
    {id:108, name: "The Business Book", price: 19000, picture: "https://m.media-amazon.com/images/I/81U0XUCfaQL._AC_UF1000,1000_QL80_.jpg"},
  ])
  const [basket, setBasket] = useState([])

  const addToCart = (id) => {
    let found = products.find(x => x.i == id)
    setBasket([...basket, {...found, count:1}])
    console.log(basket)
  }
  return <>
  <h1>Online Shop</h1>
  <div className="row">
    < ProductList items = {products} onAdd = {addToCart}
      />
    < Basket items = {basket} onAdd = {addToCart}
      />
  </div>
  </>
}
