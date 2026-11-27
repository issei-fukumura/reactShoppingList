import { useState } from "react";

const initialForm = { name: "", quantity: 1 };

function ItemForm ({onAdd}){
    const [formData ,setFormData] = useState(initialForm)

    const handleChange = (e) => {
        const { name , value} = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const { name , quantity} = formData
        onAdd({ name, quantity: Number(quantity) });
        setFormData(initialForm)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>ItemForm</h2>
            <label htmlFor="product">商品</label>
            <input
                id="product" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}>
            </input>
            <label htmlFor="quantity">個数</label>
            <input 
                type="number"
                id="quantity" 
                name="quantity" 
                value={formData.quantity} 
                onChange={handleChange}
                min="1">
            </input>     
            <button>登録</button>
        </form>
    )
};

export default ItemForm ;