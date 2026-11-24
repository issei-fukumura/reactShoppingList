import {useState} from "react";
import ItemList from './ItemList'
import ItemForm from "./ItemForm";

function ShoppingList(){
    const [items ,setItems] = useState([
        { id: "1", name: "牛乳", quantity: 2},
        { id: "2", name: "卵", quantity: 1},
        { id: "3", name: "パン", quantity: 3},
    ])
    return(
        <section>
            <h1>ShoppingList</h1>
            <ItemList items={items}/>
            <ItemForm />
        </section>
    )
};

export default ShoppingList;