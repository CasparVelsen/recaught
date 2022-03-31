import NormalButton from './NormalButton';

export default {
  title: 'components/NormalButton',
  component: NormalButton,
};

const Template = args => <NormalButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Next',
};

export const Accent = Template.bind({});
Accent.args = {
  text: 'Next',
  isAccent: true,
};
