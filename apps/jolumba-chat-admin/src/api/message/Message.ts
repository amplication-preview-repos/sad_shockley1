import { ChatRoom } from "../chatRoom/ChatRoom";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  timestamp: Date | null;
  sender: string | null;
  chatRoom?: ChatRoom | null;
};
