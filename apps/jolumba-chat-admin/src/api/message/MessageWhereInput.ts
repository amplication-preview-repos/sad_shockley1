import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  sender?: StringNullableFilter;
  chatRoom?: ChatRoomWhereUniqueInput;
};
