import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ChatRoomWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  messages?: MessageListRelationFilter;
};
