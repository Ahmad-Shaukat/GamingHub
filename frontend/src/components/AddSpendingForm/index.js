
import React from "react"
import { useState } from "react"


const AddSpendingForm = () => {
const [category, setCategory] = useState('')
const [storeName, setStoreName] = useState('')
const [amount, setAmount] = useState(0)
const [errors, setErrors] = useState({})


const addStoreName = (e) => setStoreName(e.target.value)
const addCategory = (e) => setCategory(e.target.value)
const addAmount = (e) => setAmount (e.target.value)
const createSpendingSubmit = async (e) => {
    e.preventDefault()
    let checkErrors = () => {
        let errorsFound = {}
        if (!storeName) errorsFound['storeError'] = `Store name can't be empty`
        if (!category) errorsFound ['categoryError'] =  `Category can't be empty`
        if (!amount) errorsFound['amountError'] = `Amount can't be empty`
        console.log (errorsFound, '------------these are checkerrors')
        if (Object.values(errorsFound).length > 0) {
            setErrors(errorsFound)
        }
        console.log (Object.values(errorsFound, '---------------objectValues'))
        console.log (Object.values(errorsFound).length, '---------------this is the error length')
        console.log (errors, '---------------these are errors')

        return 
        
    }
    checkErrors()
    console.log (errors,'----------------these are errors')

    
    // if (Object.values(errors)>0) console.log ('we can see errors--------------')

    // const message = Object.values(checkErrors()).length > 0 ? 'There are Errors' : 'No errors send the request'
    
    return 'checking '
}
    // let purchaseInfo = {
    //     category, storeName, amount
    // }
    
    // console.log (purchaseInfo, '-----------------this is the spending')
    // console.log ('checking the function') 
// }


    return (

        <div>
            <form onSubmit={createSpendingSubmit}>
                <div>
                <div>
                        {errors.storeError && <p>Show error here</p>}
                    </div>
                    <label>Store Name</label>
                    <input type="text" onChange={addStoreName}></input>
                </div>
                <div>
                    <label>Category</label>
                    <select onChange={addCategory}>
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
                    <input type="number" onChange={addAmount}></input>
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