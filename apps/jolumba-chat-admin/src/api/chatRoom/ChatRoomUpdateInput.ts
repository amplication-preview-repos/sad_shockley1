import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";

export type ChatRoomUpdateInput = {
  name?: string | null;
  messages?: MessageUpdateManyWithoutChatRoomsInput;
};
