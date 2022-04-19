import lodash from 'lodash';
import { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import WaterStats from './WaterStats';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function Periods({ filteredCards }) {
  const [timeSpan, setTimeSpan] = useLocalStorage('timeSpan');
  const [period, setPeriod] = useState(1);

  const filteredCardsByTime = filteredCards.filter(card =>
    card.date.includes(timeSpan)
  );

  const filteredCatches = filteredCardsByTime.map(data => data.catches);

  const filterNumberCatches = filteredCatches.map(number => number.length);

  var numberCatches = lodash.sum(filterNumberCatches);

  const m = moment();
  const currentYear = m.format('YYYY');
  const currentMonth = m.format('YYYY[-]MM');
  const today = m.format('YYYY[-]MM[-]D');

  return (
    <>
      <Header>More Stats:</Header>
      <PeriodChoice>
        <button
          onClick={() => {
            setTimeSpan(currentYear);
            setPeriod(1);
          }}
        >
          This Year
        </button>
        <button
          onClick={() => {
            setTimeSpan(currentYear - 1);
            setPeriod(2);
          }}
        >
          Last Year
        </button>
        <button
          onClick={() => {
            setTimeSpan(currentMonth);
            setPeriod(3);
          }}
        >
          This Month
        </button>
        <button
          onClick={() => {
            setTimeSpan(today);
            setPeriod(4);
          }}
        >
          Today
        </button>
      </PeriodChoice>
      {period === 1 && (
        <Period>
          <Title>{currentYear}</Title>
          <span>You caught {numberCatches} fish this year</span>
          <WaterStats filteredCardsByTime={filteredCardsByTime} />
        </Period>
      )}
      {period === 2 && (
        <Period>
          <Title>{timeSpan}</Title>
          <span>You caught {numberCatches} fish last year</span>
          <WaterStats filteredCardsByTime={filteredCardsByTime} />
        </Period>
      )}
      {period === 3 && (
        <Period>
          <Title>{m.format('MMMM[ ]YY')}</Title>
          <span>You caught {numberCatches} fish this month</span>
          <WaterStats filteredCardsByTime={filteredCardsByTime} />
        </Period>
      )}
      {period === 4 && (
        <Period>
          <Title>Today</Title>
          <span>You caught {numberCatches} fish today</span>
          <WaterStats filteredCardsByTime={filteredCardsByTime} />
        </Period>
      )}
    </>
  );
}

const Header = styled.h1`
  color: #687a48;
  font-size: 24px;
  width: 50%;
  margin: 20px 0 15px;
`;

const PeriodChoice = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: #687a48;
    font-size: 0.9rem;
    border: 0.5px solid #ff9c27;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 10px;
  }
`;

const Period = styled.div`
  background-color: #fffcf8;
  border-radius: 10px;
  padding: 5px 10px;
  border: 0.5px solid #a2c36c;
  color: #a2c36c;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  margin-top: 5px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #ff9c27;
  margin: 0;
`;
