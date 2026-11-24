import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import ItemList from './ItemList'
import ItemForm from "./ItemForm";

function ShoppingList(){
    const [items ,setItems] = useState([
        { id: "1", name: "牛乳", quantity: 2},
        { id: "2", name: "卵", quantity: 1},
        { id: "3", name: "パン", quantity: 3},
    ])

    const handleAdd = ({ name, quantity }) => {
        const newItem = { id: uuidv4(), name, quantity, checked: false };
        setItems((prev) => [...prev,newItem])
    }
    
    return(
        <section>
            <h1>ShoppingList</h1>
            <ItemList items={items}/>
            <ItemForm onAdd={handleAdd}/>
        </section>
    )
};

export default ShoppingList;