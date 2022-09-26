
import React, {useContext} from "react";
import { useReducer,useEffect } from "react";
import reducer from "./Reducer";



const AppContext = React.createContext();


const API = "https://ajju-testapi.herokuapp.com/service";

const initialState = {
    name :"",
    image :"",
    about :"",
    para : "",
    services:[],
};




const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const updateHomePage = () =>{
        return dispatch({
                type: "Home_Update",
                payload :{
                    name :"Bengal It Solutions. ",
                    image : "./images/cloud_hosting.svg",
                    about :"Website Designing & Development by Experts. Best UI Design. Designing from Scratch. Contact Us For High Quality Websites with Supportive Mobile App Development. 360° Web Solutions. 2+ Years Of Expertise. Complete Business Support.",
                    
                },
    
            });
    };
    
    const updateAboutPage = () =>{
        return dispatch(
            {
                type: "About_Update",
                payload :{
                    para : "Hello I Am",
                    name :"Ajinkya Bengal ",
                    image : "./images/feeling_proud.svg",
                    about: "I care deeply about creating world-class, useful, and beautiful products that help people and make a difference. I can be as involved in your project as you need me to be; from the seed of the idea, to sketches, creative direction, design, copywriting, system design, and even the front-end and React build.",
                  
                },
    
            }
        );
    };

// to get data from api
    const getServices = async (url) =>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({type:"Get_Services", payload:data})
        } catch (error) {
            console.log(error)
        }
    }

    // Api call
    useEffect(() => {
        getServices(API);
    }, []);


    return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
        {children}
    </AppContext.Provider>

};

// Custom hook

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};


