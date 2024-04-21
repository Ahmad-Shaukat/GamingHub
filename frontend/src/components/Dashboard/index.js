
import React from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
// import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { getAllPurchase } from '../../store/purchase';
import { useEffect } from 'react';
import { getProfileThunk } from '../../store/profile';
import { useState } from 'react';




const Dashboard = () => {
    const dispatch = useDispatch()
    const hisory = useHistory()
    let user = useSelector((store) => store.session.user)
    const [creatSpending, setCreateSpending] = useState(false)
    const [showAddSpending, setShowAddSpending] = useState(true)
    let allPurchases = useSelector (state => {
        return state.purchase
    })
    let purchases = Object.values(allPurchases)
    // console.log (user, '-----------this is user')
    // console.log (Object.values(purchases), 'this is the purchases')
    console.log (purchases, '-------these are purchases')

    useEffect( () => {
        dispatch(getAllPurchase())
        dispatch(getProfileThunk())
    }, [])

    const onAddSpending =  () =>  {
        setShowAddSpending(false)
        setCreateSpending(true)
    }


    

    if (allPurchases) {
        return (
            <>
            <main>
            <div>
                <h1>Dashboard</h1>
            </div>
            <div>
                <h2>Latest Spendings</h2>
                <div>
                    <div></div>
                </div>
            </div>


            <div>
                
                {purchases.map((transaction) => (
                    <div key={transaction.id}>
                        {/* <p>{transaction.date.split("T")[0]}</p> */}
                        <p>{transaction.store}</p>
                        <p>{transaction.category}</p>
                        <p>{transaction.amount}</p>
                    </div>
                ))}

            </div>
            {
                showAddSpending && 
                <div>
                <button onClick={() => onAddSpending()}>Add Spending</button>
            </div>
            }
            
            {
                creatSpending &&
                <div>
                    <h3>spending Form goes Here</h3>
                </div>
            }
           

            </main>
            
            
            </>
        )
    } 
    return (
        <div>
            <h3>Loading</h3>
        </div>
    )



}


export default Dashboard