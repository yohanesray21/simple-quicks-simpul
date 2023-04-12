import React, { useState } from 'react';

import { ActionIcon, Box, Flex, Popover, Text, TextInput } from '@mantine/core';
import Task from 'public/assets/images/task.svg';
import Image from 'next/image';
import { log } from 'console';
import InboxButton from './InboxButton';
import { relative } from 'path';

const SwitchTaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box pos="relative">
      <Text pos="absolute" top={-34} left={12} color="white" fw="bold">
        Inbox
      </Text>
      <Popover position="top" trapFocus opened={isOpen}>
        <Popover.Target>
          <Box
            onClick={() => {
              setIsOpen((prevIsOpen) => !prevIsOpen);
            }}
            sx={{
              backgroundColor: '#4F4F4F',
              borderRadius: '100%',
            }}
          >
            <ActionIcon
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              variant="filled"
              size="4.25rem"
              radius="100%"
              sx={{
                backgroundColor: isOpen ? '#F8B76B' : 'white',
                ':hover': { backgroundColor: isOpen ? '#F8B76B' : 'white' },
                transitionTimingFunction: 'ease-out',
                transitionDuration: '0.2s',
                // https://github.com/mantinedev/mantine/discussions/4059
                transform: isOpen ? 'translateX(15px) !important' : 'none',
                transitionProperty: 'transform',
                // ':active': {
                //   transform: 'none',
                // },
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.11114 4.66675H24.1111C25.3334 4.66675 26.3334 5.66675 26.3334 6.88897V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88897C1.88892 5.66675 2.88892 4.66675 4.11114 4.66675ZM4.11114 6.88897V21.3334H13V6.88897H4.11114ZM24.1111 21.3334H15.2222V6.88897H24.1111V21.3334ZM23 10.7779H16.3334V12.4445H23V10.7779ZM16.3334 13.5556H23V15.2223H16.3334V13.5556ZM23 16.3334H16.3334V18.0001H23V16.3334Z"
                  fill={isOpen ? 'white' : '#F8B76B'}
                />
              </svg>
            </ActionIcon>
          </Box>
        </Popover.Target>
        <Popover.Dropdown bg={'white'} sx={{ border: 'none' }} ml={-34}>
          <Box
            sx={() => ({
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

export default SwitchTaskButton;
