import React from 'react'

const reducer = (state, action) => {
 if (action.type==="Home_Update"){
    return {...state,
     name:action.payload.name,
     image:action.payload.image,
     about : action.payload.about,
     };
 } 
 if (action.type==="About_Update"){
    return {...state,
     name:action.payload.name,
     image:action.payload.image,
     about :action.payload.about,
     para:action.payload.para,
     };
 } 
 if (action.type==="Get_Services"){
    return {...state,
     services:action.payload,
   
     };
 } 
 
 return state;
}


export default reducer
