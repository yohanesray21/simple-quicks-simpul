import React, { useContext, useRef, useState } from 'react';
import {
  ActionIcon,
  Button,
  Input,
  Box,
  Navbar,
  ScrollArea,
  Text,
  keyframes,
  Center,
  CloseButton,
} from '@mantine/core';

import { MdOutlineClose } from 'react-icons/md';
import { OpenPopoverContext } from '../QuicksButton';
import { HiArrowDown, HiArrowLeft } from 'react-icons/hi';

import OwnMessage from './OwnMessage';
import RepliedMessage from './RepliedMessage';
import MessageDivider from './MessageDivider';
import AnotherUserMessage from './AnotherUserMessage';

const bounce = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(3px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

const InboxGroupDetail = () => {
  const viewport = useRef<HTMLDivElement>(null);

  const [reply, setReply] = useState(false);
  const [value, setValue] = useState('');
  const [repliedMessage, setRepliedMessage] = useState({ message: '' });
  const [isSent, setIsSent] = useState<boolean>(false);
  const [hideScrollNewMessage, setHideScrollNewMessage] = useState(false);

  const { setIsOpenGroupChat, setIsOpenPrivateChat, setIsOpenInbox } =
    useContext(OpenPopoverContext);

  const scrollToBottom = () => {
    viewport.current?.scrollTo({
      top: viewport.current.scrollHeight,
      behavior: 'smooth',
    });

    setHideScrollNewMessage(true);
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [isSent]);

  return (
    <Navbar
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
      <Navbar.Section>
        <Box
          sx={{
            borderBottom: '1px solid #BDBDBD',
            padding: '23px 25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ActionIcon
            sx={{ ':hover': { backgroundColor: 'white' } }}
            onClick={() => {
              setIsOpenGroupChat(false);
              setIsOpenPrivateChat(false);
            }}
          >
            <HiArrowLeft size="24px" color="#333333" />
          </ActionIcon>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              marginLeft: '14.43px',
            }}
          >
            <Text color="#2F80ED" fw="bold">
              1-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </Text>
            <Text fw="normal" color="#4F4F4F">
              3 Participant
            </Text>
          </Box>

          <ActionIcon
            sx={{ ':hover': { backgroundColor: 'white' } }}
            onClick={() => {
              setIsOpenInbox(false);
            }}
          >
            <MdOutlineClose size="24px" color="#333333" />
          </ActionIcon>
        </Box>
      </Navbar.Section>

      <Navbar.Section
        grow
        component={ScrollArea}
        viewportRef={viewport}
        sx={{ padding: '13px 19px 11px 29px' }}
      >
        <OwnMessage />
        <MessageDivider label="Today June 09, 2021" color="#4F4F4F" />
        <AnotherUserMessage
          color="#E5A443"
          sender="Mary Hilda"
          bgColor="#FCEED3"
          messageContent="Hey there. Welcome to your inbox! Contact us for more information
          and help about anything! We will send you a response as soon as
          possible."
          setIsReply={(newReply) => setReply(newReply)}
        />
        <OwnMessage />

        <AnotherUserMessage
          color="#E5A443"
          sender="Mary Hilda"
          bgColor="#FCEED3"
          messageContent="Sure thing, Claren"
          setIsReply={(newReply) => setReply(newReply)}
        />
        <MessageDivider label="New Message" color="red" />
        <AnotherUserMessage
          sender="Obaidullah Amarkhil"
          color="#43B78D"
          bgColor="#D2F2EA"
          messageContent="Morning. I`ll try to do them. Thanks"
          setIsReply={(reply) => setReply(reply)}
        />

        {isSent && (
          <RepliedMessage repliedMessage={repliedMessage} isSent={isSent} />
        )}
      </Navbar.Section>

      <Navbar.Section
        sx={{
          padding: '23px 25px',
        }}
      >
        {!hideScrollNewMessage && (
          <Center sx={{ cursor: 'pointer' }} onClick={scrollToBottom}>
            <Box
              sx={{
                backgroundColor: '#E9F3FF',
                borderRadius: '5px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '11px',
                maxWidth: '150px',
              }}
            >
              <Text fz="sm" fw="bold" color="#2F80ED">
                New Message
              </Text>
              <ActionIcon
                sx={{
                  ':hover': { backgroundColor: '#E9F3FF' },
                  animation: `${bounce} 0.5s ease-in-out infinite`,
                }}
              >
                <HiArrowDown size="20px" color="gray" opacity={0.4} />
              </ActionIcon>
            </Box>
          </Center>
        )}
        <Box
          display="flex"
          sx={{
            gap: '13px',
            alignItems: 'flex-end',
          }}
        >
          <Box w="100%">
            {reply && (
              <Box
                sx={{
                  padding: '10px',
                  border: '1px solid #828282',
                  borderRadius: ' 5px 5px 0px 0px ',
                  borderBottom: 'none',
                  backgroundColor: '#F2F2F2',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text color="#4F4F4F" fw="bold" fz="sm">
                    Replying to Mary Hilda
                  </Text>
                  <CloseButton onClick={() => setReply(false)} />
                </Box>
                <Text fz="xs" color="#4F4F4F">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis quod nobis optio rerum? Cumque, et. Obcaecati ut culpa
                  totam voluptates.
                </Text>
              </Box>
            )}
            <Input
              variant="unstyled"
              radius="sm"
              sx={{
                flex: 1,
                border: '1px solid #828282',
                padding: '0  16px',
                boxSizing: 'border-box',
                borderRadius: reply ? '0px 0px 5px 5px' : '5px',
                borderTopLeftRadius: 'none',
                borderTopRightRadius: 'none',
                '::placeholder': { color: '#828282' },
              }}
              placeholder="Type a new message"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </Box>

          <Button
            onClick={() => {
              setIsSent(true);
              scrollToBottom();
              setReply(false);
              setRepliedMessage({ ...repliedMessage, message: value });
              setValue('');
            }}
          >
            Send
          </Button>
        </Box>
      </Navbar.Section>
    </Navbar>
  );
};

export default InboxGroupDetail;
