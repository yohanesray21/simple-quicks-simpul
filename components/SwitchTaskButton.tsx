import { useContext, useEffect } from 'react';

import {
  ActionIcon,
  Box,
  Center,
  Loader,
  Overlay,
  Popover,
  Text,
  TextInput,
} from '@mantine/core';
import { OpenPopoverContext } from './QuicksButton';
import QuicksTask from './Task/QuicksTask';

const SwitchTaskButton = () => {
  const {
    isOpenTask,
    setIsOpenTask,
    setIsOpenInbox,
    isLoadingVisibility,
    setIsLoadingVisibility,
  } = useContext(OpenPopoverContext);

  useEffect(() => {
    setIsLoadingVisibility(true);
  }, []);

  return (
    <Box pos="relative">
      <Text pos="absolute" top={-34} left={12} color="white" fw="bold">
        Task
      </Text>
      <Popover
        position="top"
        trapFocus={!isLoadingVisibility}
        opened={isOpenTask}
      >
        <Popover.Target>
          <Box
            onClick={() => {
              setIsOpenTask((prevIsOpenTask: boolean) => !prevIsOpenTask);
              setIsOpenInbox(false);
            }}
            sx={{
              backgroundColor: '#4F4F4F',
              borderRadius: '100%',
            }}
          >
            <ActionIcon
              onClick={(e) => {
                e.stopPropagation();
                setIsOpenTask(true);
                setIsOpenInbox(false);

                setTimeout(() => {
                  setIsLoadingVisibility(false);
                }, 1200);
              }}
              variant="filled"
              size="4.25rem"
              radius="100%"
              sx={{
                backgroundColor: isOpenTask ? '#F8B76B' : 'white',
                ':hover': { backgroundColor: isOpenTask ? '#F8B76B' : 'white' },
                transitionTimingFunction: 'ease-out',
                transitionDuration: '0.2s',
                // https://github.com/mantinedev/mantine/discussions/4059
                transform: isOpenTask ? 'translateX(15px) !important' : 'none',
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
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.11114 4.66675H24.1111C25.3334 4.66675 26.3334 5.66675 26.3334 6.88897V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88897C1.88892 5.66675 2.88892 4.66675 4.11114 4.66675ZM4.11114 6.88897V21.3334H13V6.88897H4.11114ZM24.1111 21.3334H15.2222V6.88897H24.1111V21.3334ZM23 10.7779H16.3334V12.4445H23V10.7779ZM16.3334 13.5556H23V15.2223H16.3334V13.5556ZM23 16.3334H16.3334V18.0001H23V16.3334Z"
                  fill={isOpenTask ? 'white' : '#F8B76B'}
                />
              </svg>
            </ActionIcon>
          </Box>
        </Popover.Target>

        <Popover.Dropdown
          bg={'white'}
          sx={{
            padding: 0,
          }}
          ml={-34}
        >
          <QuicksTask />
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
};

export default SwitchTaskButton;
