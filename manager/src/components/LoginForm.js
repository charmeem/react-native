import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passChanged, loginUser } from '../actions';

// 'onChangeText' event trigger a call back function 'onEmailChanged'
//This call back function triggers action creator"emailChanged" via connect helper function defined below.
// It sends Text typed in Input field to reducer via action creator' payload property. Reducer saves this state in its store. and renders back to react component.

class LoginForm extends Component {

    onEmailChange(text){
                this.props.emailChanged(text);  // send to redux via action creator
    }

    onPassChange(text) {
        this.props.passChanged(text);     // send to redux via action creator
    }

    onButtonPress() {
        console.log(this.props);
        const { email, password } = this.props;  // passed from redux via mapStateToProps
        this.props.loginUser({email, password });                   // send to redux via action creator
    }
    render() {

        return (
          <Card>
              <CardSection>
                  <Input
                      label="Email"
                      placeholder="mmufti@hotmail.com"
                      onChangeText={this.onEmailChange.bind(this)}  /*send to redux via action creator */
                      value={this.props.email}                     /* received from Redux */
                  />
              </CardSection>

              <CardSection>
                  <Input
                      secureTextEntry
                      label="Password"
                      placeholder="password"
                      onChangeText={this.onPassChange.bind(this)}        /*send to redux via action creator */
                      value={this.props.password}                        /* received from Redux */
                  />
              </CardSection>

              <CardSection>
                  <Button
                      onPress={this.onButtonPress.bind(this)}          /*send to redux via action creator */
                  >
                      Login
                  </Button>
              </CardSection>

          </Card>
        );
    }
}

// This function will pass the email & password property of state object from Redux to the login component above
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

// Using connect to hook action creator 'emailchanged' here.
export default connect(mapStateToProps, { emailChanged, passChanged, loginUser })(LoginForm);