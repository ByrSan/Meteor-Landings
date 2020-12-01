import React, {useReducer} from 'react'
import axios from 'axios'
import AppContext from './AppContext'
import AppReducer from './AppReducer'


import {
SEARCH_METEOR_LANDINGS,
SET_LOADING,
CLEAR_METEOR_LANDINGS,
SET_ALERT,
GET_METEOR_LANDINGS

}from '../types'


const AppState = props => {
    const initialState = {
        meteors: [],
        loading: false
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Search Meteors

    //Get Meteors
    const getMeteors = async text =>{
        setLoading(true) 
        const result = await axios(
         `https://data.nasa.gov/resource/gh4g-9sfh.json?$$app_token=${process.env.REACT_APP_NASA_TOKEN}&$limit=50000&$where=year between '1900-01-01T00:00:00.000' and '2020-01-01T00:00:00.000`
       )
       dispatch({
           type: GET_METEOR_LANDINGS, 
           payload: result.data
       })
    }

    //Clear Meteors

    //Set Loading 
    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }

    return <AppContext.Provider 
    value={{
        meteors: state.meteors,
        loading: state.loading
    }}>
    {props.children}
    </AppContext.Provider>
}
export default AppState