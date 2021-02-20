import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Card, CardProps } from './card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}></Card>;

export const Default = Template.bind({});
Default.args = {
  headerText: 'Sample header',
};
