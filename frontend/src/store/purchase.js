import {csrfFetch} from './csrf'
const GET_PURCHASE = 'purchase/GET_PURCHASES'
const ADD_PURCHASE = 'purchase/ADD_PURCHASE'
const REMOVE_PURCHASE = 'purchase/REMOVE_PURCHASE'
const CLEAR_PURCHASE = 'purchase/CLEAR_PURCHASE'
const EDIT_PURCHASE = 'purchase/EDIT_PURCHASE'

export const getAllPurchases = (purchases) => {
    return {
        type: GET_PURCHASE, 
        payload: purchases
    }
}
export const addPurchase = (purchase) => {
    return {
        type: ADD_PURCHASE,
        payload: purchase
    }
}

// action for editing the purchase 

export const editPurchase = (purchase) => {
    return {
        type: EDIT_PURCHASE,
        payload: purchase
    }
}


export const deletePurchase = (purchaseId) => {
    return {
        type: REMOVE_PURCHASE,
        payload: purchaseId
    }
}
export const clearPurchase = () => {
    return {
        type: CLEAR_PURCHASE
    }
}



export const getAllPurchase = () => 
async(dispatch) => {
    const response = await fetch ('/api/purchase/current')
    if (response.ok) {
        const purchases = await response.json()
        await dispatch(getAllPurchases(purchases))
        return purchases
    }
    
}


// Thunk for editing purchase 
export const editPurchaseThunk = (purchase, id) => async(dispatch) => {
    const response = await csrfFetch(`/api/purchase/${id}`, {
        method:'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(purchase)
    })
    if (response.ok) {
        const editPurchase = await response.json()
        dispatch(editPurchase(purchase))
    }
}


// Thunk for adding new purchase

export const addPurchaseThunk = (purchase) => async dispatch => {
    const response = await csrfFetch('/api/purchase/new', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(purchase)
    })
    if (response.ok) {
        const purchase = await response.json()
        dispatch(addPurchase(purchase))
    }
}


// thunk for deleteing the purchase 

export const deletePurchaseThunk = (id) => async dispatch => {
    const response = await csrfFetch(`/api/purchase/${id}`, {
        method:'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    if (response.ok) {
        dispatch(deletePurchase(id))
    }
}

export default function purchaseReducer (state={}, action) {
    let newState = {}
    switch(action.type) {
        case GET_PURCHASE:
            newState = {...state};
            action.payload.forEach((purchase) => {
                newState[purchase.id] = purchase
            })
            return newState
        default:
            return state

    }
}
