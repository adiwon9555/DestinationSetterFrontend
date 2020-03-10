import React, { Component } from "react";
import PropTypes from 'prop-types';
import fecha from 'fecha';

class Message extends Component {

    render() {
        const { message } = this.props;
        console.log(message);
        
        // let createdAt = new Date(message.createdAt).toLocaleTimeString();
        return (
            // <li className={this.props.message.active==true?'active':''}>
            this.props.name==message.name?<li className="message" >
                <div className="author">
                    <strong>{message.name}</strong>
                    {/* <i className="timestamp">{createdAt}</i> */}
                </div>
                <div className="body">
                    {message.body}
                </div>
            </li>
            :<li className="rm" >
            <div className="author">
                <strong>{message.name}</strong>
                {/* <i className="timestamp">{createdAt}</i> */}
            </div>
            <div className="body">
                {message.body}
            </div>
        </li>
        )
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired,

}

export default Message;