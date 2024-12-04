export const Product = ({id, name, price, picture, onAdd}) => {
    return <div className="col-md-4">
        <img src={picture} style={{width:200 , height:200, objectFit:"cover"}} alt="" />
        <p>{name}</p>
        <p><strong>{price}AMD</strong></p>
        <button onClick={() => onAdd(id)} className="btn btn-primary">add to cart</button>
    
    </div>
 }