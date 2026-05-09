const { useState, useEffect, useRef } = React;

// --- Components ---

const ChatButton = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-gradient-to-tr from-[#2f7d7c] to-[#24303a] text-white shadow-lg z-[9999] flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
    aria-label="Toggle Chat"
  >
    {isOpen ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
    )}
  </button>
);

const ChatHeader = ({ onClose, onReset }) => (
  <div className="p-5 bg-gradient-to-r from-[#24303a] to-[#2f7d7c] text-white flex justify-between items-center rounded-t-[20px]">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-[#2f7d7c] rounded-xl flex items-center justify-center font-bold text-lg shadow-inner">D</div>
      <div>
        <h3 className="text-sm font-semibold leading-none">DevilJO Assistant</h3>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-[10px] opacity-80 uppercase tracking-wider font-bold">Online</span>
        </div>
      </div>
    </div>
    <div className="flex gap-2">
      <button onClick={onReset} className="p-1 hover:bg-white/10 rounded-lg transition-colors" aria-label="Reset Chat">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-9 9c-6.7 0-10.8-4.3-11-10.2"/><path d="M3 2v5h5"/><path d="M3 12a9 9 0 0 0 9 9c6.7 0 10.8-4.3 11-10.2"/><path d="M21 12v-5h-5"/></svg>
      </button>
      <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors" aria-label="Minimize Chat">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
    </button>
    </div>
  </div>
);

const MessageList = ({ messages, isTyping }) => {
  const endRef = useRef(null);
  useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fbf9f5] scrollbar-thin scrollbar-thumb-gray-200">
      {messages.map((msg, i) => (
        <div key={i} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
          <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
            msg.sender === 'user' 
            ? 'bg-[#2f7d7c] text-white rounded-br-none' 
            : 'bg-white text-[#191714] border border-[#ddd5c8] rounded-bl-none'
          }`}>
            {msg.text}
          </div>
          <span className="text-[10px] text-gray-400 mt-1 px-1">
            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      ))}
      {isTyping && (
        <div className="flex gap-1 p-3 bg-white border border-[#ddd5c8] rounded-2xl rounded-bl-none w-16 items-center justify-center">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      )}
      <div ref={endRef} />
    </div>
  );
};

const ChatInput = ({ onSend, isOpen }) => {
  const [input, setInput] = useState('');

  // Clear input when chat is closed
  useEffect(() => {
    if (!isOpen) {
      setInput('');
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-[#ddd5c8] flex gap-2 items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me something..."
        className="flex-1 h-11 px-4 bg-gray-50 border border-[#ddd5c8] rounded-xl text-sm outline-none focus:border-[#2f7d7c] transition-colors"
      />
      <button 
        type="submit" 
        disabled={!input.trim()}
        className="w-11 h-11 bg-[#2f7d7c] text-white rounded-xl flex items-center justify-center transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:grayscale"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
      </button>
    </form>
  );
};

// --- Main Application ---

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem('deviljo_chat_v2');
    return saved ? JSON.parse(saved) : [
      { text: "How Can I assist you", sender: 'bot', timestamp: new Date() }
    ];
  });

  useEffect(() => {
    sessionStorage.setItem('deviljo_chat_v2', JSON.stringify(messages));
  }, [messages]);

  const handleSend = async (text) => {
    const userMsg = { text, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'sk-default-MR5RebecDIKFnHRSdcZmPBzitJhScmT7'
        },
        body: JSON.stringify({
          user_id: "jyotiapato@gmail.com",
          agent_id: "69ff1248d088be8556be0eff",
          session_id: "69ff1248d088be8556be0eff-5b70ptbag9",
          message: text
        })
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, { 
        text: data.response || "I'm having trouble connecting to my creative archive right now.", 
        sender: 'bot', 
        timestamp: new Date() 
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Sorry, I'm offline.", sender: 'bot', timestamp: new Date() }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleReset = () => {
    setMessages([
      { text: "How Can I assist you", sender: 'bot', timestamp: new Date() }
    ]);
    sessionStorage.removeItem('deviljo_chat_v2');
  };

  return (
    <React.Fragment>
      <ChatButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      
      {/* Floating Chat Window */}
      <div 
        className={`fixed bottom-24 right-5 w-[calc(100%-40px)] sm:w-[380px] h-[600px] max-h-[80vh] bg-white rounded-[20px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] z-[9999] flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
        }`}
      > 
        <ChatHeader onClose={() => setIsOpen(false)} onReset={handleReset} />
        <MessageList messages={messages} isTyping={isTyping} />
        <ChatInput onSend={handleSend} isOpen={isOpen} />
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/5 backdrop-blur-[2px] z-[9998] sm:hidden animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </React.Fragment>
  );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById('chatbot-root'));
root.render(<ChatWidget />);