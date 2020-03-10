import React from 'react';

import AuthPage from './auth-reg-page/auth-page/auth-page.jsx';
import RegPage from './auth-reg-page/reg-page/reg-page.jsx';

class Main extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <div className="main">
                <AuthPage />
            </div>
        );
    };
};


export default Main;