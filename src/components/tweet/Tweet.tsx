import { 
    Avatar, 
    Box, 
    Card, 
    CardContent, 
    Divider, 
    Typography 
} from "@mui/material";
import TweetDetail from "./TweetDetail";
import {Tweet as typeTweet} from "../../interfaces/Interfaces";

import "../../scss/Tweet.scss";

const Tweet = (props:typeTweet)=>{
    return (
            <Card className="tweet" variant="outlined">
                <Box className="header">
                    <CardContent>
                        <Avatar 
                            className="avatar" 
                            src={props.avatar} 
                            variant="rounded" 
                        />
                    </CardContent>
                    <CardContent sx={{pl:0}}>
                        <Typography component="div" variant="h6">
                            {props.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {props.nickName}
                        </Typography>
                    </CardContent>
                </Box>
                <Divider orientation="horizontal" flexItem />
                <CardContent>
                <Typography variant="body2" gutterBottom className="bodyText">
                    {props.tweet}
                </Typography>
                </CardContent>
                <Divider orientation="horizontal" flexItem />
                <CardContent className="footer">
                    <TweetDetail tweet={props.tweet}/>
                </CardContent>
            </Card>
        );
}

export default Tweet;