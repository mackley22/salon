import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';



class Home extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <div className="home-content"><h4>Natural Beauty Salon's website is coming soon....</h4></div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;