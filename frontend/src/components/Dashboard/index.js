
import React from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
// import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { getAllPurchase } from '../../store/purchase';
import { useEffect } from 'react';




const Dashboard = () => {
    const dispatch = useDispatch()
    const hisory = useHistory()
    let user = useSelector((store) => store.session.user)
    let purchases = useSelector ((store) => store.purchase)
    purchases = Object.values(purchases)
    console.log (user, '-----------this is user')
    console.log (Object.values(purchases), 'this is the purchases')
    // console.log (purchases, '-------these are purchases')
    useEffect( () => {
        dispatch(getAllPurchase())
    }, [])




    if (purchases) {
        return (
            <>
            <div>
                <h1>Purchases</h1>
                {purchases.map((transaction) => (
                    <div key={transaction.id}>
                        <p>{transaction.date}</p>
                        <p>{transaction.name}</p>
                        <p>{transaction.store}</p>
                        <p>{transaction.type}</p>
                    </div>
                ))}

            </div>
            
            </>
        )
    }



    // purchases = Object.values(purchases)
    // console.log (purchases, '------------these are purchases')



    // Commit message 'add frontend for get all the purchases'


    

    return (
        <>
        <main>
            <div>
                <h1>Dashboard</h1>
            </div>
            <div>
                <h2>Latest Transactions</h2>
                <div>
                    <div></div>
                </div>
            </div>
        </main>
        
        <h1>This is dashboard</h1>
        </>
    )
}


export default Dashboard