import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/landing'; 
import Analytics from './pages/analytics';
import Header from './header';
import Chatbot from './chatbot/chatbot';
import Datadisplay from './pages/Dataretrival';

const App = () => {
    return (
        <div className="container">
           <BrowserRouter>
           <div>
                <Header></Header>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/Analytics" component={Analytics}/>
                <Route exact path="/Datadisplay" component={Datadisplay}/>
                <Chatbot></Chatbot>
            </div>
           </BrowserRouter>
        </div>
    )
}

export default App;