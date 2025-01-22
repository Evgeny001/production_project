import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    title: 'title',
    text: 'text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'title',
    text: 'text',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'title',
};
onlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'text',
};
onlyText.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title',
    text: 'text',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title',
    text: 'text',
    size: TextSize.M,
};
