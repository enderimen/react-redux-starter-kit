import React, { Component } from 'react';
import LoginView from './LoginView';
import SignUpView from './SignUpView';

class AuthView extends Component{

    constructor() {
        super();

        this.state = {
            currentView: 1
        }
    }

    changeView(newView) {
        this.setState({
            currentView: newView
        });
    }

    render () {
        return this.state.currentView === 1
                ? <LoginView changeView={this.changeView.bind(this)} /> : <SignUpView changeView={this.changeView.bind(this)} />;        
    }
}

export default AuthView;