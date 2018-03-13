import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, Input, CardSection, Spinner } from './common';


class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false};
    //setState = this.setState.bind(this);

    // Invoked when login Button is pressed
    onButtonPress() {
        const { email, password } = this.state;
        //console.log(this.state.loading);
        /* Resetting Authentication Failed Error and also catering for spinner loading */
        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFailed.bind(this));
            });
    }

    onLoginFailed() {
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    }

    onLoginSuccess() {
        this.setState({
            email:'',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        //console.log(this.state.error);
        // initially this is false
        if (this.state.loading) return <Spinner size="small"/>;
        //invoked when login Button pressed
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render() {
        //console.log(this.state);
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@hotmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        /* Secure Text entry Only for Password Section! */
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>

         );
    }
}

const styles = {

    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
export default LoginForm;