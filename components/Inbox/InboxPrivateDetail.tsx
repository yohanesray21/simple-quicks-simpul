import React, { useContext } from 'react';
import {
  ActionIcon,
  Box,
  Button,
  CloseButton,
  Divider,
  Input,
  Menu,
  Navbar,
  ScrollArea,
  Text,
} from '@mantine/core';

import { HiArrowLeft, HiDotsHorizontal } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import OwnMessage from './OwnMessage';
import MessageDivider from './MessageDivider';
import AnotherUserMessage from './AnotherUserMessage';
import { OpenPopoverContext } from '../QuicksButton';

const InboxPrivateDetail = () => {
  const {
    setIsOpenGroupChat,
    setIsOpenPrivateChat,
    isOpenGroupChat,
    isOpenPrivateChat,
  } = useContext(OpenPopoverContext);

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
          <ActionIcon sx={{ ':hover': { backgroundColor: 'white' } }}>
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
              setIsOpenGroupChat(false);
              setIsOpenPrivateChat(false);
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
        <AnotherUserMessage name="Fast Visa Support" bgColor="#F8F8F8" />
        <OwnMessage />
      </Navbar.Section>

      <Navbar.Section
        display="flex"
        sx={{
          padding: '23px 25px',
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
      </Navbar.Section>
    </Navbar>
  );
};

export default InboxPrivateDetail;
