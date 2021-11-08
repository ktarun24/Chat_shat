import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const authObject= { 'Priject-ID': "e6e053b1-32c7-401b-86b9-7177fcaf1c02", 'User-Name': username, 'User-Secret': password}
        try {
            axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        }
        catch (error){
            setError('Oops, incorrect credentials.')
        } 

    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.type.value)} className="input" placeholder="Username" requires />
                    <input type="password" value={password} onChange={(e) => setPassword(e.type.value)} className="input" placeholder="Password" requires />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;