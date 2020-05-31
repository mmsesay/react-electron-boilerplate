import React, { Component } from 'react';
import { Button, Message, Notification } from 'element-react';

// import common functions
import { Header } from './common/Header';


// home function
class Home extends Component {
  

  // open function
  open() {
    Message({
      message: 'Congrats, this is a success message from element react.',
      type: 'success'
    });
  }

  openInfo() {
    Notification.info({
      title: 'Info',
      message: 'I am a notification from element-react'
    });
  }

  render() {
    return (
      <div className="max-w-sm mx-auto mt-10 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Homepage Section</div>
          <p className="text-gray-700 text-base">
            This is a react electron boilerplate application template created by muhammad sesay
            <br/>
            This boilerplate is already configured with <b>Element-Desktop-UI</b> and <b>Tailwind CSS</b> 
          </p>
        </div>
        <div className="flex items-center justify-center pb-10">
          <Button plain={true} onClick={this.open.bind(this)}>success</Button>
          <Button plain={true} onClick={this.openInfo.bind(this)}>Info</Button>
        </div>
      </div>
    );
  }
}

export default Home;
