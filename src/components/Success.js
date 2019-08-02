import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //Process Form//
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h2>Appointment Requested</h2>
                    <h3>Thank you for your request.</h3> <h4>You will receive an email to confirm or deny request.</h4>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;