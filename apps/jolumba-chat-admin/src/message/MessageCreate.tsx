import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ChatRoomTitle } from "../chatRoom/ChatRoomTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="text" multiline source="text" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="sender" source="sender" />
        <ReferenceInput
          source="chatRoom.id"
          reference="ChatRoom"
          label="chatRoom"
        >
          <SelectInput optionText={ChatRoomTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
