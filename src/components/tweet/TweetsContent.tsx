import { useContext, useState, useEffect } from "react";
import { TweetsContext } from "../../context/TweetsContext";
import Tweet from "./Tweet";

const TweetsContent = ()=>{
    const {state} = useContext(TweetsContext);

    return(<>
            { 
                state.tweets && 
                state.tweets.map( (element,index) => <Tweet 
                                                        key={index} 
                                                        avatar = {element.avatar}
                                                        name = {element.name}
                                                        nickName = {element.nickName}
                                                        tweet = {element.tweet}
                                                    />) 
            }
        </>);
}

export default TweetsContent;