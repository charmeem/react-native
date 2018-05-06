import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passChanged, loginUser } from '../actions';

// e.g. 'onChangeText' event trigger a call back function 'onEmailChanged'
//This call back function triggers action creator "emailChanged" via connect helper function
// defined below.
// It sends Text typed in Input field to reducer via action creator's payload property.
// Reducer saves this state in its store. and renders back to react component here.

class LoginForm extends Component {

    onEmailChange(text){
                this.props.emailChanged(text);  // send to redux via action creator
    }

    onPassChange(text) {
        this.props.passChanged(text);     // send to redux via action creator
    }

    onButtonPress() {
        //console.log(this.props);
        const { email, password } = this.props;  // passed from redux via mapStateToProps
        this.props.loginUser({email, password });                   // send to redux via action creator
    }

    //Error function to be run when Error state received from Redux
    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );

        }
    }
    // renders Spinner when login button pressed and spinner action creator triggered
    renderButton() {
        if (this.props.loading) {
            return ( <Spinner size="large" /> );
        }
        return (
        <Button onPress={this.onButtonPress.bind(this)}   /*send to redux via action creator */
        >
            Login
        </Button>
        );
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

              {this.renderError()}

              <CardSection>
                  {this.renderButton()}
              </CardSection>

          </Card>
        );
    }
}

const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }

};

// This function will pass the email & password property of state object from Redux into login component above
const mapStateToProps = state => {
    //console.log(state);
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

// Using connect to hook action creator 'emailchanged' here.
export default connect(mapStateToProps, { emailChanged, passChanged, loginUser })(LoginForm);