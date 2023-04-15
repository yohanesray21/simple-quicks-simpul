import React, { useContext } from 'react';
import { Avatar, Box, Text } from '@mantine/core';
import { OpenPopoverContext } from '../QuicksButton';

interface IInboxProps {
  group: boolean;
  roomName: string;
  date: string;
  sender: string | null;
  message: string;
  unread: boolean;
}

const InboxMessage = ({
  group,
  roomName,
  date,
  sender,
  message,
  unread,
}: IInboxProps) => {
  const {
    setIsOpenGroupChat,
    setIsOpenPrivateChat,
    isOpenGroupChat,
    isOpenPrivateChat,
  } = useContext(OpenPopoverContext);

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '22px 0',
        borderBottom: '1px solid #828282',
        cursor: 'pointer',
      }}
      onClick={() => {
        if (!group) {
          setIsOpenGroupChat(false);
          setIsOpenPrivateChat(true);
        } else {
          setIsOpenGroupChat(true);
          setIsOpenPrivateChat(false);
        }
      }}
    >
      <Box w={60} mr={17}>
        <Avatar.Group>
          {group ? (
            <>
              <Avatar
                radius="xl"
                color="gray"
                sx={{ height: '34px', width: '34px' }}
              />
              <Avatar
                radius="xl"
                color="blue"
                sx={{ height: '34px', width: '34px' }}
              />
            </>
          ) : (
            <Avatar
              radius="xl"
              color="blue"
              sx={{ height: '34px', width: '34px' }}
              mx="auto"
            >
              {roomName.substring(0, 1)}
            </Avatar>
          )}
        </Avatar.Group>
      </Box>
      <Box w="100%">
        <Box display="flex">
          <Text color="#2F80ED" fw="bold">
            {roomName}
          </Text>
          <Text fw="normal" color="#4F4F4F" ml={12} sx={{ flexShrink: 0 }}>
            {date}
          </Text>
        </Box>
        {sender && (
          <Text fw="bold" color="#4F4F4F">
            {sender} :
          </Text>
        )}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text fw="normal" color="#4F4F4F">
            {message}
          </Text>
          {unread && (
            <Box
              sx={{
                width: '10px',
                height: '10px',
                backgroundColor: 'red',
                borderRadius: '100%',
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default InboxMessage;
