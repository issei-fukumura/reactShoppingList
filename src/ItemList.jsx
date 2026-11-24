import Item from './Item'

function ItemList({items}){
    return(
        <section>
            <h2>ItemList</h2>
            <ul>
                {items.map((item) => (
                <Item key={item.id} item={item} />
                ))}
            </ul>
        </section>
    )
};

export default ItemList;