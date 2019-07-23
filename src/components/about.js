import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';



class About extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <div className="about-content"><h3>Hello Beauties!</h3><h5> Welcome to Natural Beauty Salon. We are devoted to giving our clients beautiful, custom spray tans that will boost your confidence while utilizing the best organic solutions on the market. Our tanning solutions are 100% Vegan. Your session will be complete in just 15 minutes after a free color consultation. A beautiful, sun kissed tan is promised every day at Natural Beauty. </h5></div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;