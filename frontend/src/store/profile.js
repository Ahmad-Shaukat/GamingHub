const GET_PROFILE = 'profile/GET_PROFILE'
const EDIT_PROFILE = 'profile/EDIT_PROFILE'
const CLEAR_PROFILE = 'profile/CLEAR_PROFILE'
// const ADD_PROFILE = 'profile/ADD_PROFILE'


export const getProfile = (profile) => {
    return {
        type: GET_PROFILE,
        payload: profile
    }
}

export const editProfile = (profile) => {
    return {
        type: EDIT_PROFILE,
        payload: profile
    }
}

export const clearProfile = () => {
    return {
        type: CLEAR_PROFILE
    }
}



// Thunk for getting profile information


export const getProfileThunk = () => async (dispatch) => {
    const response = await fetch ('/api/profile/current')
    if (response.ok) {
        const userProfile = await response.json()
        await dispatch(getProfile(userProfile))
        return userProfile
    }
}

// Thunk for updating profile information

export const editProfileThunk = (updatedProfile) => async (dispatch) => {
    const response = await fetch ('/api/profile/edit', {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(updatedProfile)
    })
    if (response.ok) {
        const data = await response.json()
        await dispatch(editProfile(data))
        return data
    }
}


// Reducer Funtion 

export default function pofileReducer (state={}, action) {
    let newState = {}
    switch(action.type) {
        case GET_PROFILE:
            newState = {...state}
            newState['profile'] = action.payload
            return newState
        case GET_PROFILE:
            newState = {...state}
            newState['profile'] = action.payload
            return newState
        case CLEAR_PROFILE:
            newState = {}
            return newState
        default:
            return state  
    }
        
}


