
import React from "react"
import { useState } from "react"


const AddSpendingForm = () => {
const [category, setCategory] = useState('')
const [storeName, setStoreName] = useState('')
const [amount, setAmount] = useState(0)

const createSpendingSubmit = async (e) => {
    e.preventDefault()
    // let purchaseInfo = {
    //     category, storeName, amount
    // }
    console.log ('checking the function') 
}


    return (

        <div>
            <form onSubmit={createSpendingSubmit}>
                <div>
                    <label>Store Name</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Category</label>
                    <select>
                        <option> Pick Category
                        </option>
                        <option value='shopping'> Shopping
                        </option>
                        <option value='food'> Food
                        </option>
                        <option value='bills'> Bills
                        </option>
                        <option value='savings'>
                            Saving
                        </option>
                    </select>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number"></input>
                </div>
                <div>
                    <button type="submit">
                    Add 
                    </button>
                </div>
            </form>
        </div>
    )
}


export default AddSpendingForm