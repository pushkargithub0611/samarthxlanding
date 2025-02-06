import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { 
  Send, UserRound, Menu, Star, Inbox, Mail, 
  Users, MessageSquare, Megaphone, Settings 
} from "lucide-react";
import { User, Group, Message } from "@/types/communication";

// Mock data - In production, this would come from your backend
const currentUser: User = {
  id: "1",
  name: "John Doe",
  role: "teacher",
};

const mockGroups: Group[] = [
  {
    id: "1",
    name: "Mathematics Department",
    members: [],
    type: "department",
  },
  {
    id: "2",
    name: "Class 10-A",
    members: [],
    type: "class",
  },
];

export default function Communication() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const { toast } = useToast();
  
  // In a production environment, this would be an environment variable
  const SOCKET_URL = "wss://your-websocket-server.com";
  
  useEffect(() => {
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
    
    socket.on("broadcast", (message: Message) => {
      if (message.type === 'broadcast') {
        toast({
          title: "New Broadcast",
          description: `${message.sender.name}: ${message.content}`,
        });
      }
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
      sender: currentUser,
      content: newMessage,
      timestamp: new Date(),
      type: isBroadcasting ? 'broadcast' : 'chat',
      groupId: selectedGroup?.id,
    };
    
    setMessages((prev) => [...prev, message]);
    setNewMessage("");
  };

  const canBroadcast = currentUser.role === 'admin' || currentUser.role === 'teacher';

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
          
          <div className="pt-4 pb-2">
            <div className="px-3 py-2 text-sm font-medium text-[#666666]">Groups</div>
            {mockGroups.map((group) => (
              <Button
                key={group.id}
                variant="ghost"
                className="w-full justify-start gap-3 text-[#333333] hover:bg-[#F1F0FB]"
                onClick={() => setSelectedGroup(group)}
              >
                <Users className="h-4 w-4" /> {group.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-[#E6E4DD] p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserRound className="text-[#1EAEDB]" />
            <span className="font-medium text-[#333333]">
              {selectedGroup ? selectedGroup.name : "General Chat"}
            </span>
          </div>
          {canBroadcast && (
            <Button
              variant="outline"
              className={`gap-2 ${isBroadcasting ? 'bg-red-50 text-red-600' : ''}`}
              onClick={() => setIsBroadcasting(!isBroadcasting)}
            >
              <Megaphone className="h-4 w-4" />
              {isBroadcasting ? 'Broadcasting' : 'Broadcast'}
            </Button>
          )}
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 max-w-3xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.sender.id === currentUser.id
                    ? "ml-auto bg-[#1EAEDB] text-white"
                    : "bg-white border border-[#E6E4DD]"
                } ${message.type === 'broadcast' ? 'border-l-4 border-l-yellow-400' : ''}`}
              >
                <div className="font-medium text-sm mb-1 flex items-center gap-2">
                  {message.sender.id === currentUser.id ? "You" : message.sender.name}
                  {message.type === 'broadcast' && (
                    <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded">
                      Broadcast
                    </span>
                  )}
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
              placeholder={isBroadcasting ? "Type your broadcast message..." : "Type your message..."}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border-[#E6E4DD] focus:ring-[#1EAEDB] focus:border-[#1EAEDB]"
            />
            <Button 
              onClick={sendMessage} 
              className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white"
            >
              <Send className="h-4 w-4 mr-2" />
              {isBroadcasting ? 'Broadcast' : 'Send'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}