import {csrfFetch} from './csrf'
const GET_PURCHASE = 'purchase/GET_PURCHASES'
const ADD_PURCHASE = 'purchase/ADD_PURCHASE'
const REMOVE_PURCHASE = 'purchase/REMOVE_PURCHASE'
const clear_Purchase = 'purchase/CLEAR_PURCHASE'

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
export const deletePurchase = (purchase) => {
    return {
        type: REMOVE_PURCHASE,
        payload: purchase
    }
}
export const clearPurchase = () => {
    return {
        type: clear_Purchase
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
