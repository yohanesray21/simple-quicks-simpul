import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Button,
  Center,
  Loader,
  Navbar,
  ScrollArea,
  Select,
  Text,
} from '@mantine/core';

import { TaskList } from '@/mock/TaskList';
import { BiChevronDown } from 'react-icons/bi';
import TaskItem, { TaskListType } from './TaskItem';
import { OpenPopoverContext } from '../QuicksButton';

const QuicksTask = () => {
  const viewport = useRef<HTMLDivElement>(null);

  const { isLoadingVisibility } = useContext(OpenPopoverContext);

  const [tasks, setTasks] = useState<TaskListType[]>(TaskList);

  useEffect(() => {
    viewport.current?.scrollTo({
      top: viewport.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [tasks]);

  const handleAddNewTask = () => {
    const newTask: TaskListType = {
      id: tasks.length + 1, // Generate a unique ID for the new task
      label: '',
      remainingDays: '',
      description: '',
      isChecked: false,
      isCollapseOpen: true,
      isNewTask: true,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <>
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
        <Navbar.Section
          sx={{
            display: 'flex',
            margin: '22px 29px 0px 114px',
            justifyContent: 'space-between',
          }}
        >
          <Select
            placeholder="My Task"
            data={['PersonalErrands', 'Urgent To-Do']}
            rightSection={<BiChevronDown size="1rem" color="4F4F4F" />}
            style={{ width: 140 }}
          />
          <Button onClick={handleAddNewTask}>New Task</Button>
        </Navbar.Section>

        <Navbar.Section
          grow
          component={ScrollArea}
          viewportRef={viewport}
          sx={{ padding: '0px 29px 22px 29px' }}
        >
          {!isLoadingVisibility &&
            tasks.map((message) => (
              <TaskItem
                isChecked={message.isChecked}
                label={message.label}
                date={message.date}
                description={message.description}
                remainingDays={message.remainingDays}
                isCollapseOpen={message.isCollapseOpen}
                key={message.id}
                isNewTask={message.isNewTask}
              />
            ))}

          <Center
            sx={{
              minHeight: '550px',
              maxHeight: '800px',
              height: '100%',
              display: isLoadingVisibility ? 'flex' : 'none',
              flexDirection: 'column',
            }}
          >
            <Loader color="gray" size={61.22} mb={12.7} />
            <Text color="#4F4F4F" fw="bold">
              Loading Task List ...
            </Text>
          </Center>
        </Navbar.Section>
      </Navbar>
    </>
  );
};

export default QuicksTask;
