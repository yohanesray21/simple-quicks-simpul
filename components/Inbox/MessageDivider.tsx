import { Divider } from '@mantine/core';
import React from 'react';

const MessageDivider = ({ label, color }: { label: string; color: string }) => {
  return (
    <Divider
      m="27px 0 6px 0"
      size="sm"
      color={color}
      label={label}
      labelPosition="center"
      fw="bold"
    />
  );
};

export default MessageDivider;
