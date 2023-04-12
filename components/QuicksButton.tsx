import React from 'react';
import Image from 'next/image';

import { ActionIcon, Box, Popover, TextInput } from '@mantine/core';

import QuickIcon from 'public/assets/images/quick.svg';

const QuicksButton = () => {
  return (
    <Popover position="top" shadow="md">
      <Popover.Target>
        <ActionIcon color="#2F80ED" variant="filled" size="4.25rem" radius="xl">
          <Image src={QuickIcon} alt="QuickIcon" />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown sx={{ backgroundColor: 'white' }} ml={-32}>
        <Box
          sx={(theme) => ({
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
          <TextInput label="Name" placeholder="Name" size="xs" />
        </Box>
      </Popover.Dropdown>
    </Popover>
  );
};

export default QuicksButton;
