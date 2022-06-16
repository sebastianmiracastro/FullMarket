import React, { Component } from 'react'



class PrivateChatRoom extends Component {

    constructor() {
        super();
        this.state = {
            message: '',
            messages: [

            ]
        }
    }

    componentDidMount() {
        firebase.database().ref('messages/').on('value', snapashot => {
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
        let list = this.state.messages;
        const newMessage = {
            id: this.state.messages.length,
            text: this.state.message
        }

        firebase.database().ref(`messages/${newMessage.id}`)
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
            <form onSubmit={this.handleSubmit.bind(this)}>
                <ol>
                    {messagesList}
                </ol>
                <input
                onChange={this.updateMessage.bind(this)}
                value={this.state.message}
                placeholder="Message"
                type="text" />
                <button
                onClick={this.handleSubmit.bind(this)}
                raised color="primary">
                    Send
                </button>
            </form>
        )
    }

}

export default PrivateChatRoom;
