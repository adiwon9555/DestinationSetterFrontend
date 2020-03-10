import React,{Component} from "react";
import Message from './message';
import PropTypes from 'prop-types';

class MessageList extends Component{
    
    render(){
        const {messages}=this.props;

        return(
            <ul>
                {/* {messages.sort((a,b)=>a.createdAt-b.createdAt).map(message=>{ */}
                {messages.map((message,i)=>(
                 <Message message={message} {...this.props} key={i}/>
                ))
            }
            </ul>
        )
    }
}

MessageList.propTypes={
    messages:PropTypes.array.isRequired
}

export default MessageList;