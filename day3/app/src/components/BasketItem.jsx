export const BasketItem = ({ name, price, id, count, onAdd }) => {
    const subtotal = price * count;

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{subtotal}</td>
            <td>
                <button onClick={() => onAdd(id)}>Add</button>
            </td>
        </tr>
    );
}