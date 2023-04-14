import { ActionIcon, Box, Menu, Text } from '@mantine/core';
import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

const OwnMessage = () => {
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
            No worries. It will be completed ASAP Ive asked him yesterday.
          </Text>
          <Text fw="normal" fz="sm" color="#4F4F4F">
            19:32
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default OwnMessage;
