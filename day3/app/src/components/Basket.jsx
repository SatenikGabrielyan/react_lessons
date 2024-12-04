import { BasketItem } from "./BasketItem"

export const Basket = ({items, onAdd}) => {
   return <div className = "col-md-5">
    
   <table className="table table-dark table-bordered">
    <thead>
        <tr>
            <th>product</th>
            <th>price</th>
            <th>count</th>
            <th>subtotal</th>
            <th>action</th>
        </tr>
    </thead>
    <tbody>
        {
            
            items.map(elm => <BasketItem key ={elm.id} {...elm} onAdd={onAdd} />)
          
        }
        

    </tbody>
    
   </table>
   </div>
}