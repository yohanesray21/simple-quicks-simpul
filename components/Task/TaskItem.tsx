import React, { forwardRef, useState } from 'react';
import {
  ActionIcon,
  Box,
  Checkbox,
  Collapse,
  Input,
  Menu,
  MultiSelect,
  Text,
  Textarea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DateInput } from '@mantine/dates';

import { BiChevronDown, BiChevronUp, BiPencil } from 'react-icons/bi';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { HiDotsHorizontal, HiOutlineClock } from 'react-icons/hi';
import { BsBookmarks } from 'react-icons/bs';

import { StickerList } from '../../mock/StickersList';

export interface TaskListType {
  id?: number;
  label: string;
  remainingDays: string;
  date?: string;
  description: string;
  isCollapseOpen: boolean;
  isChecked: boolean;
  isNewTask: boolean;
  stickerValue?: string[];
}

const TaskItem = ({
  label,
  remainingDays,
  date,
  description,
  isCollapseOpen,
  isChecked,
  isNewTask,
  stickerValue,
}: TaskListType) => {
  const [opened, { toggle }] = useDisclosure(isCollapseOpen);

  const currentDate = date ? new Date(Date.parse(date)) : null;
  const [dateValue, setDateValue] = useState<Date | null>(currentDate);
  const [descriptionValue, setDescriptionValue] = useState<string>(description);
  const [newLabel, setNewLabel] = useState(label);
  const [check, setCheck] = useState(isChecked);
  const [isEditable, setIsEditable] = useState(isNewTask);
  const [value, setValue] = useState(stickerValue);

  // eslint-disable-next-line react/display-name
  const SelectedItem = forwardRef<HTMLDivElement>(
    ({ label, bgColor, ...others }: any, ref) => (
      <Box ref={ref} {...others}>
        <Box
          style={{
            backgroundColor: bgColor,
            borderRadius: '5px',
            paddingTop: '4px',
            height: '28px',
          }}
        >
          <Text fw="bold" fz="sm" color="#4F4F4F">
            <span style={{ marginLeft: '14px', marginTop: '10px' }}>
              {label}
            </span>
          </Text>
        </Box>
      </Box>
    )
  );

  const Value = ({ label, value, bgColor, onRemove, ...others }: any) => {
    return (
      <Box {...others}>
        <Box
          sx={{
            display: 'flex',
            cursor: 'default',
            alignItems: 'center',
            backgroundColor: bgColor,
            border: 'gray',
            paddingLeft: '14px',
            paddingRight: '14px',
            borderRadius: '5px',
          }}
        >
          <Box fw="bold" fz="sm" sx={{ color: '#4F4F4F' }}>
            {label}
          </Box>
        </Box>
      </Box>
    );
  };

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
          justifyContent: !isEditable ? 'space-between' : 'space-around',
          gap: '8px',
        }}
      >
        <Checkbox
          label={isEditable ? null : newLabel}
          size="xs"
          fw="bold"
          // w="100%"
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
            flex: !isEditable ? 1 : '',
          }}
        />
        {isEditable && (
          <Input
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            onBlur={() => setIsEditable(false)}
            sx={{ flex: 1, maxWidth: 380 }}
          />
        )}

        <Text fw="normal" fz="sm" color="#EB5757">
          {remainingDays}
        </Text>
        <Text fw="normal" fz="sm" color="#4F4F4F">
          {date ? date : dateValue?.toLocaleDateString()}
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
              <HiOutlineClock
                size="1rem"
                color={isEditable ? 'gray' : '#2F80ED'}
              />
            </ActionIcon>
            <DateInput
              valueFormat="DD/MM/YYYY"
              value={dateValue}
              onChange={setDateValue}
              placeholder="Set Date"
              rightSection={<MdOutlineCalendarToday color="#4F4F4F" />}
              sx={{
                // Expand Calendar To the right
                ['.mantine-Popover-dropdown']: { marginLeft: '170px' },
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: '18px' }}>
            <ActionIcon>
              <BiPencil size="1rem" color={isEditable ? 'gray' : '#2F80ED'} />
            </ActionIcon>
            <Textarea
              w="100%"
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
              minRows={2}
              autosize
              variant="unstyled"
              placeholder="No Description"
            />
          </Box>
          <Box sx={{ display: 'flex', gap: '18px' }}>
            <MultiSelect
              w="100%"
              icon={<BsBookmarks color={isEditable ? 'gray' : '#2F80ED'} />}
              data={StickerList}
              itemComponent={SelectedItem}
              searchable
              valueComponent={Value}
              value={value}
              onChange={setValue}
            />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default TaskItem;
