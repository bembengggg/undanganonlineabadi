import React, {Component} from 'react';
import Sampul from '../../Component/Sampul/Sampul';


import NOT from '../Home/PageNotFound';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './Home.css';


class Home extends Component{
   
    render(){
        return(
            <div className='container'>
            <Router>
            <Route path="/:nama/:tempat"   render={props=><Sampul{...props}/>}/>
            
            
            <Route path="/" exact  component={NOT}/>
            </Router>
            </div>
         
     
           
        )
    }
}

export default Home;