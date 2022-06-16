import React, { Component } from 'react'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCoBoVAvHzfGIrGXIPCdZB9uHnZBp51zGs",
    authDomain: "fullmarket-e6156.firebaseapp.com",
    databaseURL: "https://fullmarket-e6156-default-rtdb.firebaseio.com",
    projectId: "fullmarket-e6156",
    storageBucket: "fullmarket-e6156.appspot.com",
    messagingSenderId: "759346213407",
    appId: "1:759346213407:web:9812ea45b85e6d1ca15b2a"
};

firebase.initializeApp(firebaseConfig);

export class PrivateChatRoom extends Component {

    constructor() {
        super();
        this.state = {
            message: '',
            messages: [

            ]
        }
    }

    componentDidMount() {
        firebase.database().ref('x/').on('value', snapashot => {
            const currentMessages = snapashot.val();
            if (currentMessages != null) {
                this.state({
                    messages: currentMessages
                })
            }
        })
    }

    updateMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSumbit(e) {
        e.preventDefault(); 
        const newMessage = {
            id: this.state.messages.length,
            text: this.state.message
        }

        firebase.database().ref(`x/${newMessage.id}`)
            .set(newMessage);
        this.setState({
            message: ''
        })
    }

    render() {
        const { messages } = this.state;
        const messagesList = messages.map(message => {
            return <li key={message.id}>{message.text}</li>
        });

        return(
            <form onSubmit={this.handleSumbit.bind(this)}>
                <ol>
                    {messagesList}
                </ol>
                <input
                onChange={this.updateMessage.bind(this)}
                value={this.state.message}
                placeholder="Message"
                type="text" />
                <button
                onClick={this.handleSumbit.bind(this)}
                raised color="primary">
                    Send
                </button>
            </form>
        )
    }

}

export default PrivateChatRoom;
