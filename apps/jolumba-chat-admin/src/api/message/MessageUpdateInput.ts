import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";

export type MessageUpdateInput = {
  text?: string | null;
  timestamp?: Date | null;
  sender?: string | null;
  chatRoom?: ChatRoomWhereUniqueInput | null;
};
