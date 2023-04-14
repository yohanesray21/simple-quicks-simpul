import React, { useContext } from 'react';
import {
  Box,
  Center,
  Input,
  Loader,
  Overlay,
  ScrollArea,
  Text,
} from '@mantine/core';

import { messageList } from '@/mock/MessageList';
import { BiSearchAlt2 } from 'react-icons/bi';
import InboxMessage from './InboxMessage';
import { OpenPopoverContext } from './QuicksButton';

const Inbox = () => {
  const { isLoadingVisibility } = useContext(OpenPopoverContext);
  return (
    <Box
      sx={() => ({
        '@media (min-width: 1920px)': {
          width: '734px',
          height: '734px',
        },
        '@media (max-width: 1512px)': {
          width: '600px',
          height: '600px',
        },
      })}
    >
      <Input
        // style={{ padding: '10px 48px' }}
        placeholder="Search"
        rightSection={<BiSearchAlt2 />}
        size="xs"
      />

      {!isLoadingVisibility &&
        messageList.map((message) => (
          <InboxMessage
            key={message.id}
            date={message.date}
            group={message.group}
            message={message.message}
            roomName={message.roomName}
            sender={message.sender}
            unread={message.unread}
          />
        ))}
      <Center
        sx={{
          height: '90%',
          width: '100%',
          display: isLoadingVisibility ? 'flex' : 'none',
          flexDirection: 'column',
        }}
      >
        <Overlay color="#000" opacity={0} />
        <Loader color="gray" size={61.22} mb={12.7} />
        <Text color="#4F4F4F" fw="bold">
          Loading Chats ...
        </Text>
      </Center>
    </Box>
  );
};

export default Inbox;
