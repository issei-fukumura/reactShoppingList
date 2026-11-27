function Item({item ,onDelete}){
    return(
        <li>
            {item.name}:{item.quantity}
            <button onClick={() => onDelete(item.id)}>消去</button>
        </li>
    )
}

export default Item;