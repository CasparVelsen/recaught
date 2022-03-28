import Cards from './Cards';

export default {
  title: 'components/Cards',
  component: Cards,
};

const Template = args => <Cards {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: '23-04-2003',
  time: '10:15Uhr',
  target: 'Forelle',
};
