import { Message } from "../message/Message";

export type ChatRoom = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  messages?: Array<Message>;
};
