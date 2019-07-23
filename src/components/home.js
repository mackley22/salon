import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';



class Home extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <div className="home-content"><h2>Spray Tans</h2><h5>Get Your Safe Natural Tan Now </h5><h3>Business Hours:</h3><h5>Monday-Saturday</h5><h5>8:00am-6:00pm </h5><h3>Phone:</h3><h5>(123) 456-7890</h5><h3>Location:</h3><h5>123 Sun Street</h5><h5>Columbus, OH 43123</h5></div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;