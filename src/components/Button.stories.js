import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Submit',
};

export const Accent = Template.bind({});
Accent.args = {
  text: 'Submit',
  isAccent: true,
};
