import React, { createContext, useEffect, useState } from 'react';
import Image from 'next/image';

import { ActionIcon, Box, Flex, Popover } from '@mantine/core';

import SwitchTaskButton from './SwitchTaskButton';
import SwitchInboxButton from './SwitchInboxButton';
import QuickIcon from 'public/assets/images/quick.svg';

type OpenPopoverContextType = {
  isOpenTask: boolean;
  setIsOpenTask: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenInbox: boolean;
  setIsOpenInbox: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadingVisibility: boolean;
  setIsLoadingVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenGroupChat: boolean | null;
  setIsOpenGroupChat: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenPrivateChat: boolean | null;
  setIsOpenPrivateChat: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OpenPopoverContext = createContext<OpenPopoverContextType>({
  isOpenTask: false,
  setIsOpenTask: () => {},
  isOpenInbox: false,
  setIsOpenInbox: () => {},
  isLoadingVisibility: true,
  setIsLoadingVisibility: () => {},
  isOpenGroupChat: false,
  setIsOpenGroupChat: () => {},
  isOpenPrivateChat: false,
  setIsOpenPrivateChat: () => {},
});

const QuicksButton = () => {
  const [isOpenTask, setIsOpenTask] = useState(false);
  const [isOpenInbox, setIsOpenInbox] = useState(false);
  const [isLoadingVisibility, setIsLoadingVisibility] = useState(true);
  const [isOpenGroupChat, setIsOpenGroupChat] = useState(false);
  const [isOpenPrivateChat, setIsOpenPrivateChat] = useState(false);

  return (
    <OpenPopoverContext.Provider
      value={{
        isOpenTask,
        setIsOpenTask,
        isOpenInbox,
        setIsOpenInbox,
        isLoadingVisibility,
        setIsLoadingVisibility,
        isOpenGroupChat,
        setIsOpenGroupChat,
        isOpenPrivateChat,
        setIsOpenPrivateChat,
      }}
    >
      <Popover
        position="left"
        onClose={() => {
          setIsOpenTask(false);
          setIsOpenInbox(false);
        }}
      >
        <Popover.Target>
          <ActionIcon
            color="#2F80ED"
            variant="filled"
            size="4.25rem"
            radius="100%"
            display={isOpenTask && isOpenInbox ? 'none' : ''}
          >
            <Image src={QuickIcon} alt="QuickIcon" />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown bg={'transparent'} sx={{ border: 'none' }}>
          {!isOpenInbox && !isOpenTask ? (
            <Flex gap={26}>
              <SwitchTaskButton />
              <SwitchInboxButton />
            </Flex>
          ) : !isOpenInbox && isOpenTask ? (
            <Box pos={'fixed'} bottom={27} right={34}>
              <Flex gap={26}>
                <SwitchInboxButton />
                <SwitchTaskButton />
              </Flex>
            </Box>
          ) : (
            <Box pos={'fixed'} bottom={27} right={34}>
              <Flex gap={26}>
                <SwitchTaskButton />
                <SwitchInboxButton />
              </Flex>
            </Box>
          )}
        </Popover.Dropdown>
      </Popover>
    </OpenPopoverContext.Provider>
  );
};

export default QuicksButton;
