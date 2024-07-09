import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";

export type ChatRoomCreateInput = {
  name?: string | null;
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
};
