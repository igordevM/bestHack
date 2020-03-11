'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from "react-router";

import AuthPage from './auth-reg-page/auth-page/auth-page.jsx';
import RegPage from './auth-reg-page/reg-page/reg-page.jsx';
import AdminPage from './admin-page/admin-page.jsx';


class Main extends React.Component {
    constructor(props){
        super(props);
        
    };

    render() {
        // switch (this.props.currentPath) {
        //     case '/auth':
        //         return (
        //             <div className="main">
        //                 <AuthPage />    
        //             </div>
        //         );
        //     case '/register':
        //         return (
        //             <div className="main">
        //                 <RegPage />    
        //             </div>
        //         );   
        // };
        return (
            <div className="main">
                {/* <AuthPage />     */}
                <AdminPage />
            </div>
        );
    };
};


const mapStateToProps = (state) =>  {
    return {                         
        currentPath: state.currentPath
    };
};

export default connect(mapStateToProps)(Main);