import { Tweet, TweetsState } from "../interfaces/Interfaces";

type TweetAction = 
    | {type:'setTweets', payload:Tweet[]}
    

export const TweetReducer = (state:TweetsState,action:TweetAction):TweetsState=>{
    switch (action.type){
        case 'setTweets' :
            return {
                ...state,
                tweets: action.payload
            }
        default:
            return state;
    }
}