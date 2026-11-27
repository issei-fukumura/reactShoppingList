import {useEffect, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import ItemList from './ItemList'
import ItemForm from "./ItemForm";

const BASE_URL = 'https://dummyjson.com/products/category/groceries?limit=5';

function ShoppingList(){
    const [items ,setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchItems() {
            const itemsResult = await fetch(BASE_URL);
            const data = await itemsResult.json();
            const initialItems = data.products.map((product) => ({
                id: String(product.id),
                name: product.title,
                quantity: 1,
            }));
            setItems(initialItems);
            setLoading(false)
        }

        fetchItems();
    }, [])

    const handleDelete = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    }

    const handleAdd = ({ name, quantity }) => {
        const newItem = { id: uuidv4(), name, quantity, checked: false };
        setItems((prev) => [...prev,newItem]);
    }
    
    return(
        <section>
            {loading && <p>読み込み中...</p>}
            <h1>ShoppingList</h1>
            <ItemList items={items} onDelete={handleDelete} />
            <ItemForm onAdd={handleAdd} />
        </section>
    )
};

export default ShoppingList;