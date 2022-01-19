import {useParams} from "react-router";
import React from 'react';
import Word from "./Word";
import Num from "./Num";



const Redirect = (props) => {
    const {query} = useParams();
    
    return (
        <div>
            { 
                isNaN(query) ? 
                <Word>{query}</Word> :
                <Num>{query}</Num>
            }
        </div>
    )
}


export default Redirect;