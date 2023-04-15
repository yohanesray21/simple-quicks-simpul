import React, { useState } from 'react';
import {
  ActionIcon,
  Avatar,
  Box,
  Checkbox,
  Collapse,
  Menu,
  Text,
  Textarea,
} from '@mantine/core';
import { BiChevronDown, BiChevronUp, BiPencil } from 'react-icons/bi';
import { HiDotsHorizontal, HiOutlineClock } from 'react-icons/hi';
import { useDisclosure } from '@mantine/hooks';
import { DateInput } from '@mantine/dates';
import { MdOutlineCalendarToday } from 'react-icons/md';

const TaskItem = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const currentDate = new Date();
  const [dateValue, setDateValue] = useState<Date | null>(currentDate);
  const [descriptionValue, setDescriptionValue] = useState<string>('');
  const [check, setCheck] = useState(false);

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
          color="gray"
          checked={check}
          td={check ? 'line-through' : ''}
          opacity={check ? '0.4' : ''}
          onChange={(e) => setCheck(e.currentTarget.checked)}
          // https://stackoverflow.com/questions/74957013/how-do-i-change-the-color-of-a-mantine-component-label
          sx={{
            ['& .mantine-Checkbox-label']: {
              color: '#4F4F4F',
              cursor: 'pointer',
              paddingLeft: '22px',
            },
            ['& .mantine-Checkbox-input']: {
              border: '2px solid gray',
              textDecoration: '',
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
            <BiChevronUp size="1rem" color="#4F4F4F" />
          ) : (
            <BiChevronDown size="1rem" color="#4F4F4F" />
          )}
        </ActionIcon>
        <Menu>
          <Menu.Target>
            <ActionIcon>
              <HiDotsHorizontal size="16px" color="gray" />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item color="red">Delete</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Box>
      <Collapse
        in={opened}
        transitionDuration={500}
        transitionTimingFunction="ease-in-out"
      >
        <Box
          sx={{ display: ' flex', flexDirection: 'column', gap: '10px' }}
          p="16px 78.18px 0 39px"
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <ActionIcon
              disabled
              sx={{ ':disabled': { backgroundColor: 'white', border: 'none' } }}
            >
              <HiOutlineClock size="1rem" color="#2F80ED" />
            </ActionIcon>
            <DateInput
              valueFormat="DD/MM/YYYY"
              value={dateValue}
              onChange={setDateValue}
              placeholder="setDate"
              rightSection={<MdOutlineCalendarToday color="#4F4F4F" />}
              sx={{
                // Expand Calendar To the right
                ['.mantine-Popover-dropdown']: { marginLeft: '170px' },
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: '18px' }}>
            <ActionIcon>
              <BiPencil size="1rem" color="#2F80ED" />
            </ActionIcon>
            <Textarea
              w="100%"
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
              autosize
              variant="unstyled"
              placeholder="No Description"
            />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default TaskItem;
