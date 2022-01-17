import React, { createContext } from "react";
import { Tweet } from "../interfaces/Interfaces";

type InitialStateType= {
    page : number,
    tweets? : Tweet[] | []
}

const INITIAL_STATE = {
    page: 0,
    tweets: []
}


export const TweetsContext =  createContext<{
        state : InitialStateType,
        dispatch : React.Dispatch<any>
    }>({
        state:INITIAL_STATE,
        dispatch: ()=>null
    });
