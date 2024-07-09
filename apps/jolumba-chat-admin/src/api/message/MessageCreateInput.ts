import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";

export type MessageCreateInput = {
  text?: string | null;
  timestamp?: Date | null;
  sender?: string | null;
  chatRoom?: ChatRoomWhereUniqueInput | null;
};
