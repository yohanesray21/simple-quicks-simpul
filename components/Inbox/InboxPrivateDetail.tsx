import React, { useContext, useState } from 'react';
import {
  ActionIcon,
  Box,
  Button,
  Input,
  Loader,
  Navbar,
  ScrollArea,
  Text,
} from '@mantine/core';

import { HiArrowLeft } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import OwnMessage from './OwnMessage';
import AnotherUserMessage from './AnotherUserMessage';
import { OpenPopoverContext } from '../QuicksButton';

const InboxPrivateDetail = () => {
  const { setIsOpenGroupChat, setIsOpenPrivateChat, setIsOpenInbox } =
    useContext(OpenPopoverContext);

  const [reply, setReply] = useState(false);

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
              Fast Visa Support
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
        sx={{ padding: '13px 19px 11px 29px' }}
      >
        <AnotherUserMessage
          color="#2F80ED"
          sender="Fast Visa Support"
          bgColor="#F8F8F8"
          messageContent="Hey there. Welcome to your inbox! Contact us for more information and help about anything! We ll send you a response as soon as possible."
          setIsReply={(prev) => setReply(true)}
        />
        <OwnMessage />
      </Navbar.Section>

      <Navbar.Section
        sx={{
          padding: '23px 25px',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#E9F3FF',
            borderRadius: '5px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '11px',
            gap: '10px',
          }}
        >
          <Loader color="#2F80ED" size="sm" />
          <Text fz="sm" fw="bold" color="#4F4F4F">
            Please wait while we connect you with one of our team ...
          </Text>
        </Box>

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

export default InboxPrivateDetail;
