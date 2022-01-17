import {  IconButton, InputBase, Paper } from "@mui/material";
import { Clear,Search } from "@mui/icons-material";
import { Api } from "../services/mixins";
import { useContext, useEffect, useState } from "react";
import { TweetsContext } from "../context/TweetsContext";
import {EndPoint} from '../configuration/Consts';

import "../scss/SearchBar.scss";


const SearchBar = ()=>{
    const {state,dispatch} = useContext(TweetsContext);
    const [localState,setLocalState] = useState([]);

    const getData = async()=> {
        let request = await Api('GET',EndPoint);
        dispatch({type:'setTweets', payload:request});
    };

    useEffect(()=>{
        getData();
    },[]);

    useEffect(()=>{
        // console.log(state);
    },[state]);

    return (
        <div className="sb-content">
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <Search />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search tweet"
                    inputProps={{ 'aria-label': 'search ' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <Clear />
                </IconButton>
            </Paper>
        </div>
    )
}

export default SearchBar;

