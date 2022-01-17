import { Container, Grid } from "@mui/material";
import SearchBar from "../components/SearchBar";
import TweetsContent from "../components/tweet/TweetsContent";
import { TweetsProvider } from "../context/TweetsProvider";

import "../scss/Layout.scss";

const Layout =()=>{
    
    return (<TweetsProvider>
                    <Container maxWidth="md">
                        <Grid>
                            <Grid item xs={12}>
                                <SearchBar />
                            </Grid>
                            <Grid item xs={12} className="tweets-content">
                                <TweetsContent />
                            </Grid>
                        </Grid>

                    </Container>
            </TweetsProvider>);
}

export default Layout;
