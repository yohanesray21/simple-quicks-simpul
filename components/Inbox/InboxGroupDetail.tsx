import React, { useContext, useRef, useState } from 'react';
import {
  ActionIcon,
  Button,
  Input,
  Box,
  Loader,
  Navbar,
  ScrollArea,
  Text,
  keyframes,
  Center,
} from '@mantine/core';

import { HiArrowDown, HiArrowLeft, HiDotsHorizontal } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import OwnMessage from './OwnMessage';
import MessageDivider from './MessageDivider';
import AnotherUserMessage from './AnotherUserMessage';
import { OpenPopoverContext } from '../QuicksButton';

const bounce = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(3px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

const InboxGroupDetail = () => {
  const viewport = useRef<HTMLDivElement>(null);

  const [hideScrollNewMessage, setHideScrollNewMessage] = useState(false);

  const {
    setIsOpenGroupChat,
    setIsOpenPrivateChat,
    setIsOpenInbox,
    isOpenGroupChat,
    isOpenPrivateChat,
  } = useContext(OpenPopoverContext);

  const scrollToBottom = () => {
    viewport.current?.scrollTo({
      top: viewport.current.scrollHeight,
      behavior: 'smooth',
    });

    setHideScrollNewMessage(true);
  };

  return (
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
        <Box
          sx={{
            borderBottom: '1px solid #BDBDBD',
            padding: '23px 25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ActionIcon
            sx={{ ':hover': { backgroundColor: 'white' } }}
            onClick={() => {
              setIsOpenGroupChat(false);
              setIsOpenPrivateChat(false);
            }}
          >
            <HiArrowLeft size="24px" color="#333333" />
          </ActionIcon>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              marginLeft: '14.43px',
            }}
          >
            <Text color="#2F80ED" fw="bold">
              1-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </Text>
            <Text fw="normal" color="#4F4F4F">
              3 Participant
            </Text>
          </Box>

          <ActionIcon
            sx={{ ':hover': { backgroundColor: 'white' } }}
            onClick={() => {
              setIsOpenInbox(false);
            }}
          >
            <MdOutlineClose size="24px" color="#333333" />
          </ActionIcon>
        </Box>
      </Navbar.Section>

      <Navbar.Section
        grow
        component={ScrollArea}
        viewportRef={viewport}
        sx={{ padding: '13px 19px 11px 29px' }}
      >
        <OwnMessage />
        <MessageDivider label="Today June 09, 2021" color="#4F4F4F" />
        <AnotherUserMessage
          color="#E5A443"
          sender="Mary Hilda"
          bgColor="#FCEED3"
          messageContent="Hey there. Welcome to your inbox! Contact us for more information
          and help about anything! We will send you a response as soon as
          possible."
        />
        <OwnMessage />

        <AnotherUserMessage
          color="#E5A443"
          sender="Mary Hilda"
          bgColor="#FCEED3"
          messageContent="Sure thing, Claren"
        />
        <MessageDivider label="New Message" color="red" />
        <AnotherUserMessage
          sender="Obaidullah Amarkhil"
          color="#43B78D"
          bgColor="#D2F2EA"
          messageContent="Morning. I`ll try to do them. Thanks"
        />
      </Navbar.Section>

      <Navbar.Section
        sx={{
          padding: '23px 25px',
        }}
      >
        {!hideScrollNewMessage && (
          <Center sx={{ cursor: 'pointer' }} onClick={scrollToBottom}>
            <Box
              sx={{
                backgroundColor: '#E9F3FF',
                borderRadius: '5px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '11px',
                maxWidth: '150px',
              }}
            >
              <Text fz="sm" fw="bold" color="#2F80ED">
                New Message
              </Text>
              <ActionIcon
                sx={{
                  ':hover': { backgroundColor: '#E9F3FF' },
                  animation: `${bounce} 0.5s ease-in-out infinite`,
                }}
              >
                <HiArrowDown size="20px" color="gray" opacity={0.4} />
              </ActionIcon>
            </Box>
          </Center>
        )}
        <Box
          display="flex"
          sx={{
            gap: '13px',
          }}
        >
          <Input
            variant="unstyled"
            radius="sm"
            sx={{
              flex: 1,
              border: '1px solid #828282',
              padding: '0  16px',
              boxSizing: 'border-box',
              borderRadius: '5px',
              '::placeholder': { color: '#828282' },
            }}
            placeholder="Type a new message"
          />
          <Button>Send</Button>
        </Box>
      </Navbar.Section>
    </Navbar>
  );
};

export default InboxGroupDetail;
