import React, { useContext } from 'react';
import { ActionIcon, Avatar, Box, Checkbox, Menu, Text } from '@mantine/core';
import { OpenPopoverContext } from '../QuicksButton';
import { BiChevronDown } from 'react-icons/bi';
import { HiDotsHorizontal } from 'react-icons/hi';

interface IInboxProps {
  group: boolean;
  roomName: string;
  date: string;
  sender: string | null;
  message: string;
  unread: boolean;
}

const TaskItem = ({
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
      <Box
        w="100%"
        display="flex"
        sx={{
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          gap: '8px',
        }}
      >
        <Checkbox
          label={'Close off Case #012920- RODRIGUES, Amiguel'}
          size="xs"
          fw="bold"
          w="100%"
          // https://stackoverflow.com/questions/74957013/how-do-i-change-the-color-of-a-mantine-component-label
          sx={{ ['& .mantine-Checkbox-label']: { color: '#4F4F4F' }, flex: 1 }}
        />
        {/* <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
          }}
        > */}
        <Text fw="normal" fz="sm" color="#EB5757">
          2 Days Left
        </Text>
        <Text fw="normal" fz="sm" color="#4F4F4F">
          12/06/2021
        </Text>
        <ActionIcon>
          <BiChevronDown size="1rem" color="4F4F4F" />
        </ActionIcon>
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
      {/* </Box> */}
      {/* <Box w="100%">
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
      </Box> */}
    </Box>
  );
};

export default TaskItem;
