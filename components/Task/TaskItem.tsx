import React, { useContext } from 'react';
import {
  ActionIcon,
  Avatar,
  Box,
  Checkbox,
  Collapse,
  Menu,
  Text,
} from '@mantine/core';
import { OpenPopoverContext } from '../QuicksButton';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useDisclosure } from '@mantine/hooks';

interface IInboxProps {
  group: boolean;
  roomName: string;
  date: string;
  sender: string | null;
  message: string;
  unread: boolean;
}

const TaskItem = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '22px 0',
        borderBottom: '1px solid #828282',
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
          sx={{
            ['& .mantine-Checkbox-label']: {
              color: '#4F4F4F',
              cursor: 'pointer',
            },
            flex: 1,
          }}
        />

        <Text fw="normal" fz="sm" color="#EB5757">
          2 Days Left
        </Text>
        <Text fw="normal" fz="sm" color="#4F4F4F">
          12/06/2021
        </Text>
        <ActionIcon onClick={toggle}>
          {opened ? (
            <BiChevronUp size="1rem" color="4F4F4F" />
          ) : (
            <BiChevronDown size="1rem" color="4F4F4F" />
          )}
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
      <Collapse
        in={opened}
        transitionDuration={350}
        transitionTimingFunction="linear"
      >
        <Text>Hello Collapse</Text>
      </Collapse>
    </Box>
  );
};

export default TaskItem;
