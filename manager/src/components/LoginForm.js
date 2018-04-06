import React, { Component } from 'react';
import { connect } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import {emailChanged} from '../actions';

// 'onChangeText' event trigger a call back function 'onEmailChanged'
//This call back function triggers action creator"emailChanged" via connect helper function defined below.
// It sends Text typed in Input field to reducer via action creator' payload property. Reducer saves this state in its store. and renders back to react component.
class LoginForm extends Component {
    onEmailChange(text){
    this.props.emailChanged(text);
    }
    render() {
        return (
          <Card>
              <CardSection>
                  <Input
                      label="Email"
                      placeholder="mmufti@hotmail.com"
                      onChangeText={this.onEmailChange().bind(this)}
                  />
              </CardSection>


              <CardSection>
                  <Input
                      secureTextEntry
                      label="Password"
                      placeholder="password"
                  />
              </CardSection>

              <CardSection>
                  <Button>
                      Login
                  </Button>
              </CardSection>

          </Card>
        );
    }
}
// Using connect to hook action creator 'emailchanged' here.
export default connect(null, { emailChanged })(LoginForm);