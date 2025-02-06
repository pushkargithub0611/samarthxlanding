export interface User {
  id: string;
  name: string;
  role: 'admin' | 'teacher' | 'student';
  avatar?: string;
}

export interface Group {
  id: string;
  name: string;
  members: User[];
  type: 'department' | 'class' | 'committee';
  description?: string;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: Date;
  type: 'chat' | 'broadcast';
  groupId?: string;
  recipients?: User[];
}