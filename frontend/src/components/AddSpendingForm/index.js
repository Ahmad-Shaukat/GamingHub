
import React from "react"
import { useState } from "react"


const AddSpendingForm = () => {
const [category, setCategory] = useState('')
const [storeName, setStoreName] = useState('')
const [amount, setAmount] = useState(0)

const onSubmit = (e) => {
    e.preventDefault()
    let purchaseInfo = {
        category, storeName, amount
    }
    console.log (purchaseInfo, '--------------this is new purchase') 
}


    return (

        <div>
            <form>
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
                    <button type="submit" onClick={onSubmit()}>
                    Add 
                    </button>
                </div>
            </form>
        </div>
    )
}


export default AddSpendingForm