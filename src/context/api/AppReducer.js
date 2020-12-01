import {
    SEARCH_METEOR_LANDINGS,
    SET_LOADING,
    CLEAR_METEOR_LANDINGS,
    SET_ALERT,
    GET_METEOR_LANDINGS
    
    }from '../types'


    export default (state, action) => {
        switch(action.type){
            case GET_METEOR_LANDINGS:
                return {
                    ...state,
                    meteors: action.payload,
                    loading: true

                }
            case SET_LOADING: 
            return {
                ...state, 
                loading: true
            }
            
            default: 
            return state
        }
    }