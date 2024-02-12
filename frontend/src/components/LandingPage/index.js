import {useEffect} from 'react'
import {Link} from 'react'
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'








const LandingPage = () => {
    const dispatch = useDispatch()
    const allPurchases  = useSelector(state => {
        return state.purchase
    })

    return (
        <>
        <h2>This is a landing page</h2>
        
        </>
    )
}

export default LandingPage

