import React from 'react';
import Image from 'next/image';

import { ActionIcon, Box, Flex, Popover, TextInput } from '@mantine/core';

import QuickIcon from 'public/assets/images/quick.svg';
import TaskButton from './TaskButton';
import InboxButton from './InboxButton';

const QuicksButton = () => {
  return (
    <Popover position="left">
      <Popover.Target>
        <ActionIcon
          color="#2F80ED"
          variant="filled"
          size="4.25rem"
          radius="100%"
        >
          <Image src={QuickIcon} alt="QuickIcon" />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown bg={'transparent'} sx={{ border: 'none' }}>
        <Flex gap={26}>
          <InboxButton />
          <TaskButton />
        </Flex>
      </Popover.Dropdown>
    </Popover>
  );
};

export default QuicksButton;
