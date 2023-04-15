import React, { useContext } from 'react';
import {
  Button,
  Center,
  Input,
  Loader,
  Navbar,
  Overlay,
  ScrollArea,
  Select,
  Text,
} from '@mantine/core';

import { messageList } from '@/mock/MessageList';
import { BiChevronDown, BiSearchAlt2 } from 'react-icons/bi';
import { OpenPopoverContext } from '../QuicksButton';
import InboxMessageItem from '../Inbox/InboxMessageItem';
import TaskItem from './TaskItem';

const QuicksTask = () => {
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
        <Navbar.Section
          sx={{
            display: 'flex',
            margin: '22px 29px 0px 114px',
            justifyContent: 'space-between',
          }}
        >
          <Select
            placeholder="My Task"
            data={['PersonalErrands', 'Urgent To-Do']}
            rightSection={<BiChevronDown size="1rem" color="4F4F4F" />}
            style={{ width: 140 }}
          />
          <Button>New Task</Button>
        </Navbar.Section>

        <Navbar.Section
          grow
          component={ScrollArea}
          sx={{ padding: '0px 29px 22px 29px' }}
        >
          {!isLoadingVisibility &&
            messageList.map((message) => (
              <TaskItem
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

export default QuicksTask;
