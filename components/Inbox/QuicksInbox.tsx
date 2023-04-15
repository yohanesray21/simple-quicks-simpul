import React, { useContext } from 'react';
import {
  Center,
  Input,
  Loader,
  Navbar,
  Overlay,
  ScrollArea,
  Text,
} from '@mantine/core';

import { messageList } from '@/mock/MessageList';
import { BiSearchAlt2 } from 'react-icons/bi';
import InboxMessage from './InboxMessageItem';
import { OpenPopoverContext } from '../QuicksButton';
import InboxMessageItem from './InboxMessageItem';

const QuicksInbox = () => {
  const { isLoadingVisibility } = useContext(OpenPopoverContext);
  return (
    <>
      <Navbar
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
        <Navbar.Section>
          <Input
            variant="unstyled"
            radius="sm"
            sx={{
              flex: 1,
              border: '1px solid #828282',
              padding: '0  58px',
              margin: '10px 29px 0px 29px',
              boxSizing: 'border-box',
              borderRadius: '5px',
              '::placeholder': { color: '#828282' },
            }}
            rightSection={<BiSearchAlt2 />}
            placeholder="Search"
            size="xs"
          />
        </Navbar.Section>

        <Navbar.Section
          grow
          component={ScrollArea}
          sx={{ padding: '10px 29px 11px 29px' }}
        >
          {!isLoadingVisibility &&
            messageList.map((message) => (
              <InboxMessageItem
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
              minHeight: '550px',
              maxHeight: '800px',
              height: '100%',
              display: isLoadingVisibility ? 'flex' : 'none',
              flexDirection: 'column',
            }}
          >
            <Loader color="gray" size={61.22} mb={12.7} />
            <Text color="#4F4F4F" fw="bold">
              Loading Chats ...
            </Text>
          </Center>
        </Navbar.Section>
      </Navbar>
    </>
  );
};

export default QuicksInbox;
