import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, UserRound, Menu, Star, Inbox, Mail, Users } from "lucide-react";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
}

export default function Communication() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("");
  const { toast } = useToast();
  
  // In a production environment, this would be an environment variable
  const SOCKET_URL = "wss://your-websocket-server.com";
  
  useEffect(() => {
    const randomUser = `User${Math.floor(Math.random() * 1000)}`;
    setUsername(randomUser);
    
    const socket = io(SOCKET_URL);
    
    socket.on("connect", () => {
      toast({
        title: "Connected to chat",
        description: "You're now connected to the communication hub",
      });
    });
    
    socket.on("message", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });
    
    socket.on("disconnect", () => {
      toast({
        title: "Disconnected",
        description: "Lost connection to the communication hub",
        variant: "destructive",
      });
    });
    
    return () => {
      socket.disconnect();
    };
  }, []);
  
  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now().toString(),
      sender: username,
      content: newMessage,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, message]);
    setNewMessage("");
  };

  return (
    <div className="flex h-screen bg-[#F6F6F7]">
      {/* Gmail-like Sidebar */}
      <div className="w-64 bg-white border-r border-[#E6E4DD] flex flex-col">
        <div className="p-4 border-b border-[#E6E4DD] flex items-center gap-2">
          <Menu className="h-6 w-6 text-[#555555]" />
          <span className="font-semibold text-[#333333]">SamarthX Mail</span>
        </div>
        
        <div className="p-2 space-y-1">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-[#333333] hover:bg-[#F1F0FB]"
          >
            <Inbox className="h-4 w-4" /> Inbox
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-[#333333] hover:bg-[#F1F0FB]"
          >
            <Star className="h-4 w-4" /> Starred
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-[#333333] hover:bg-[#F1F0FB]"
          >
            <Mail className="h-4 w-4" /> Sent
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-[#333333] hover:bg-[#F1F0FB]"
          >
            <Users className="h-4 w-4" /> Groups
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-[#E6E4DD] p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserRound className="text-[#1EAEDB]" />
            <span className="font-medium text-[#333333]">Your username: {username}</span>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 max-w-3xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.sender === username
                    ? "ml-auto bg-[#1EAEDB] text-white"
                    : "bg-white border border-[#E6E4DD]"
                }`}
              >
                <div className="font-medium text-sm mb-1">
                  {message.sender === username ? "You" : message.sender}
                </div>
                <div>{message.content}</div>
                <div className="text-xs opacity-70 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-[#E6E4DD]">
          <div className="max-w-3xl mx-auto flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border-[#E6E4DD] focus:ring-[#1EAEDB] focus:border-[#1EAEDB]"
            />
            <Button 
              onClick={sendMessage} 
              className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white"
            >
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}