import { ActionIcon, Box, Menu, Text } from '@mantine/core';
import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

const AnotherUserMessage = ({
  bgColor,
  name,
}: {
  bgColor?: string;
  name?: string;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Text color="#E5A443" fw="bold">
        {name ? name : 'Mary Hilda'}
      </Text>
      <Box display="flex">
        <Box
          bg={bgColor ? bgColor : '#FCEED3'}
          p="10px"
          sx={{ borderRadius: '5px', maxWidth: '541px' }}
        >
          <Text fw="normal" fz="sm" color="#4F4F4F">
            Hello Obaidullah, I will be your case advisor for case #029290. I
            have assigned some homework for you to fill. Please keep up with the
            due dates. Should you have any questions, you can message me
            anytime. Thanks.
          </Text>
          <Text fw="normal" fz="sm" color="#4F4F4F">
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
