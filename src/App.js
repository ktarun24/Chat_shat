import { ChatEngine } from 'react-chat-engine';
import './App.css';

import LoginForm from './components/LoginForm';
import { ChatFeed } from 'react-chat-engine';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
            height="100vh"
            projectID={'e6e053b1-32c7-401b-86b9-7177fcaf1c02'}
            userName={'nesuko'}
            userSecret={'123456'}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    )
}

export default App;