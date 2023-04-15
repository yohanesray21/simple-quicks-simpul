import { ActionIcon, Box, Menu, Text } from '@mantine/core';
import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

const AnotherUserMessage = ({
  bgColor,
  sender,
  color,
  messageContent,
}: {
  bgColor: string;
  sender: string;
  color: string;
  messageContent: string;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Text color={color} fw="bold">
        {sender}
      </Text>
      <Box display="flex">
        <Box
          bg={bgColor}
          p="10px"
          sx={{ borderRadius: '5px', maxWidth: '541px' }}
        >
          <Text fw="normal" fz="sm" color="#4F4F4F">
            {messageContent}
          </Text>
          <Text fw="normal" fz="xs" mt={4} color="#4F4F4F">
            19:32
          </Text>
        </Box>
        <Menu>
          <Menu.Target>
            <ActionIcon>
              <HiDotsHorizontal size="16px" color="gray" />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Delete</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Box>
    </Box>
  );
};

export default AnotherUserMessage;
