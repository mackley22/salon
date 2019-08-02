import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h2>Request an Appointment</h2>
                    <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                    hintText="(mm/dd/yyyy)"
                    floatingLabelText="Enter Appointment Date"
                    onChange={handleChange('tanDate')}
                    defaultValue={values.tanDate}
                    />
                    <br/>
                    <TextField
                    hintText="00:00am/pm"
                    floatingLabelText="Tan Time"
                    onChange={handleChange('tanTime')}
                    defaultValue={values.tanTime}
                    />
                    <br/>
                    <TextField
                    hintText="(Light, Medium, Dark)"
                    floatingLabelText="Tan Intensity"
                    onChange={handleChange('spraytanType')}
                    defaultValue={values.spraytanType}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;
