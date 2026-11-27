import Item from './Item'

function ItemList({items ,onDelete}){
    return(
        <section>
            <h2>ItemList</h2>
            <ul>
                {items.map((item) => (
                <Item key={item.id} item={item} onDelete={onDelete} />
                ))}
            </ul>
        </section>
    )
};

export default ItemList;