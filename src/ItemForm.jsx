import { useState } from "react";

function ItemForm (){
    const [formData ,setFormData] = useState({ name: "", quantity: 1 })

    const hundleChange = (e) => {
        const { name , value} = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return(
        <form>
            <h2>ItemForm</h2>
            <label htmlFor="product">商品</label>
            <input id="product" name="name" value={formData.name} onChange={hundleChange}></input>
        </form>
    )
};

export default ItemForm ;