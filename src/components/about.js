import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';



class About extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <div className="about-content"><h4>The About page is under construction</h4></div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;