import { ActionIcon, Box, Menu, Text } from '@mantine/core';
import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

const RepliedMessage = ({
  repliedMessage,
  isSent,
}: {
  repliedMessage: { message: string };
  isSent: boolean;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Text color="#9B51E0" fw="bold">
        You
      </Text>
      <Box
        bg="#F2F2F2"
        p="10px"
        sx={{ borderRadius: '5px', maxWidth: '432px', marginBottom: '8px' }}
      >
        <Text fw="normal" fz="sm" color="#4F4F4F">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
          sapiente nam soluta possimus veniam laborum labore! Repellat tenetur
          rem quo.
        </Text>
      </Box>
      <Box display="flex">
        <Menu>
          <Menu.Target>
            <ActionIcon>
              <HiDotsHorizontal size="16px" color="gray" />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown sx={{ border: '1px solid #BDBDBD', padding: 0 }}>
            <Menu.Item
              sx={{
                borderBottom: '1px solid #BDBDBD',
                width: '126px',
                borderRadius: '0',
                color: '#2F80ED',
              }}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              sx={{
                width: '126px',
                borderRadius: '0',
                color: '#EB5757',
              }}
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <Box
          bg="#EEDCFF"
          p="10px"
          sx={{ borderRadius: '5px', maxWidth: '432px' }}
        >
          <Text fw="normal" fz="sm" color="#4F4F4F">
            {repliedMessage.message}
          </Text>
          <Text fw="normal" fz="xs" mt={4} color="#4F4F4F">
            19:32
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default RepliedMessage;
