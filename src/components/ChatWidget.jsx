import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast.jsx';
import { useAuth } from '@/contexts/AuthContext.jsx';

const ChatWidget = ({ onBeforeOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatContentRef = useRef(null);
  const { toast } = useToast();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user) {
      setMessages([
        { from: 'support', text: `Сайн байна уу, ${user.email}! Танд юугаар туслах вэ?` }
      ]);
    } else {
      setMessages([]);
    }
  }, [user]);

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    if (!isOpen) {
      const canOpen = onBeforeOpen ? onBeforeOpen() : true;
      if (!canOpen) return;
    }
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    setMessages(prev => [...prev, { from: 'user', text: inputValue }]);
    setInputValue('');

    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'support', text: 'Манай ажилтан тун удахгүй тантай холбогдох болно. Түр хүлээнэ үү.' }]);
    }, 1500);
    
    toast({
      title: "🚧 Чат функц бүрэн хийгдээгүй байна.",
      description: "Энэ бол зөвхөн загвар юм. Бодит чат систем удахгүй нэмэгдэнэ! 🚀",
    });
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    toast({ title: 'Амжилттай гарлаа.' });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="rounded-full w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Чат нээх"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={isOpen ? 'x' : 'message'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </motion.div>
          </AnimatePresence>
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-sm sm:max-w-md md:max-w-sm"
          >
            <Card className="shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gray-100 flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Тусламж</CardTitle>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-5 w-5 text-gray-600" />
                </Button>
              </CardHeader>
              <CardContent ref={chatContentRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-white">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex items-end gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${msg.from === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="bg-gray-50">
                <form onSubmit={handleSendMessage} className="flex w-full space-x-2 items-center">
                  <Input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Зурвас бичих..."
                    className="flex-1"
                    aria-label="Чатны зурвас"
                  />
                  <Button type="submit" size="icon" className="rounded-full bg-blue-600 hover:bg-blue-700" aria-label="Илгээх">
                    <Send size={18} className="text-white" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;