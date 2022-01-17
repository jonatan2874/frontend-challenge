import { FC, useReducer } from "react";
import { TweetReducer } from "./Reducer";
import { TweetsContext } from "./TweetsContext";

const INITIAL_STATE = {
    page: 0,
    tweets: []
}

export const TweetsProvider: FC = ({children}) =>{
    
    const [state,dispatch] = useReducer(TweetReducer,INITIAL_STATE);
    //console.log(state)
    return (
        <TweetsContext.Provider 
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </TweetsContext.Provider>
    )
}