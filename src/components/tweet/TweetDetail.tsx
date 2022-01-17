import { ExpandLess, ExpandMore, Grade, Repeat, Reply } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";

import "../../scss/TweetDetail.scss";

const TweetDetail = (prop: {tweet:string})=>{
    const [show,setShow] = useState(false);

    return(
            <>
                <Box className="TweetDetail"> 
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <Reply />
                    </IconButton>
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <Repeat />
                    </IconButton>
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <Grade />
                    </IconButton>

                </Box>
                <Box>
                    <div className={(show)? "footerDetail show" : "footerDetail" } >
                        <Typography className="detail" variant="subtitle1" color="withe" component="div">
                            {prop.tweet}
                        </Typography>
                        
                        { !show &&
                            (
                                <IconButton 
                                    sx={{ p: '10px' }} 
                                    aria-label="menu" 
                                    onClick={()=>setShow(!show)}
                                >
                                    <ExpandMore sx={{ color: '#FFF' }} />
                                </IconButton>
                            )
                        }

                        { show &&
                            (
                                <IconButton 
                                    sx={{ p: '10px' }} 
                                    aria-label="menu" 
                                    onClick={()=>setShow(!show)}
                                >
                                    <ExpandLess sx={{ color: '#FFF' }} />
                                </IconButton>
                            )
                        }
                        
                    </div>
                </Box>
            </>            
        );
}
export default TweetDetail;