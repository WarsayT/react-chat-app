/* eslint-disable no-unused-vars */

import './App.css';
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="c8769ad7-1b54-4ea6-b226-5c5f539958cc"
      userName="WarsayT"
      userSecret="wars123"
      renderChatFeed={(chatAppProps) =>  <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
