import React from 'react';
import Image from 'next/image';

import { ActionIcon, Box, Popover, Text, TextInput } from '@mantine/core';

import QuickIcon from 'public/assets/images/quick.svg';
import { relative } from 'path';

const InboxButton = () => {
  return (
    <Box pos="relative">
      <Text pos="absolute" top={-30} left={12} color="white" fw="bold">
        Task
      </Text>
      <Popover position="top" shadow="md">
        <Popover.Target>
          <ActionIcon
            variant="filled"
            size="4.25rem"
            radius="100%"
            sx={{
              backgroundColor: 'white',
              ':hover': { backgroundColor: 'white' },
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.4443 3.11072H3.9999C3.38879 3.11072 2.88879 3.61072 2.88879 4.22183V19.7774L7.33324 15.3329H18.4443C19.0555 15.3329 19.5555 14.8329 19.5555 14.2218V4.22183C19.5555 3.61072 19.0555 3.11072 18.4443 3.11072ZM17.3332 5.33286V13.1106H6.41103L5.75547 13.7662L5.11103 14.4106V5.33286H17.3332ZM21.7777 7.55518H23.9999C24.611 7.55518 25.111 8.05518 25.111 8.66629V25.333L20.6666 20.8885H8.44435C7.83324 20.8885 7.33324 20.3885 7.33324 19.7774V17.5552H21.7777V7.55518Z"
                fill="#8885FF"
              />
            </svg>
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
            <TextInput placeholder="Search" size="xs" />
          </Box>
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
};

export default InboxButton;
