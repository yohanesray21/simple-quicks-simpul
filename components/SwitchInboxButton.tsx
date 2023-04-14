import { useContext } from 'react';

import {
  ActionIcon,
  Box,
  Center,
  Input,
  Loader,
  Overlay,
  Popover,
  Text,
} from '@mantine/core';

import { OpenPopoverContext } from './QuicksButton';
import Inbox from './Inbox';
import InboxDetail from './InboxDetail';

const SwitchInboxButton = () => {
  const {
    isOpenInbox,
    setIsOpenInbox,
    setIsOpenTask,
    isLoadingVisibility,
    setIsLoadingVisibility,
  } = useContext(OpenPopoverContext);

  return (
    <Box pos="relative">
      <Text pos="absolute" top={-34} left={12} color="white" fw="bold">
        Inbox
      </Text>
      <Popover
        position="top"
        trapFocus={!isLoadingVisibility}
        opened={isOpenInbox}
      >
        <Popover.Target>
          <Box
            onClick={() => {
              setIsOpenInbox((prevIsOpenInbox: boolean) => !prevIsOpenInbox);
              setIsOpenTask(false);
            }}
            sx={{
              backgroundColor: '#4F4F4F',
              borderRadius: '100%',
            }}
          >
            <ActionIcon
              onClick={(e) => {
                e.stopPropagation();
                setIsOpenInbox(true);
                setIsOpenTask(false);

                setTimeout(() => {
                  setIsLoadingVisibility(false);
                }, 1200);
              }}
              variant="filled"
              size="4.25rem"
              radius="100%"
              sx={{
                backgroundColor: isOpenInbox ? '#8785FF' : 'white',
                ':hover': {
                  backgroundColor: isOpenInbox ? '#8785FF' : 'white',
                },
                transitionTimingFunction: 'ease-out',
                transitionDuration: '0.2s',
                // https://github.com/mantinedev/mantine/discussions/4059
                transform: isOpenInbox ? 'translateX(15px) !important' : 'none',
                transitionProperty: 'transform',
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.4443 3.11072H3.9999C3.38879 3.11072 2.88879 3.61072 2.88879 4.22183V19.7774L7.33324 15.3329H18.4443C19.0555 15.3329 19.5555 14.8329 19.5555 14.2218V4.22183C19.5555 3.61072 19.0555 3.11072 18.4443 3.11072ZM17.3332 5.33286V13.1106H6.41103L5.75547 13.7662L5.11103 14.4106V5.33286H17.3332ZM21.7777 7.55518H23.9999C24.611 7.55518 25.111 8.05518 25.111 8.66629V25.333L20.6666 20.8885H8.44435C7.83324 20.8885 7.33324 20.3885 7.33324 19.7774V17.5552H21.7777V7.55518Z"
                  fill={isOpenInbox ? 'white' : '#8785FF'}
                />
              </svg>
            </ActionIcon>
          </Box>
        </Popover.Target>
        <Popover.Dropdown
          bg={'white'}
          sx={{
            // border: 'none',
            // padding: '20px 39px 20px 29px',
            padding: 0,
          }}
          ml={-34}
        >
          {/* <Inbox /> */}
          <InboxDetail />
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
};

export default SwitchInboxButton;
