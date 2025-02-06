import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, UserRound } from "lucide-react";

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
    // Initialize username
    const randomUser = `User${Math.floor(Math.random() * 1000)}`;
    setUsername(randomUser);
    
    // Connect to WebSocket server
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
    
    // In a real implementation, this would emit to the WebSocket server
    setMessages((prev) => [...prev, message]);
    setNewMessage("");
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-blue-600">Communication Hub</h1>
        
        <div className="mb-4 flex items-center gap-2">
          <UserRound className="text-blue-500" />
          <span className="font-medium">Your username: {username}</span>
        </div>
        
        <ScrollArea className="h-[400px] border rounded-lg p-4 mb-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-3 rounded-lg ${
                  message.sender === username
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-100"
                } max-w-[80%] ${
                  message.sender === username ? "ml-auto" : "mr-auto"
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
        
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1"
          />
          <Button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-600">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </Card>
    </div>
  );
}