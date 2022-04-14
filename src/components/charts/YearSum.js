import lodash from 'lodash';
import { useState } from 'react';
import styled from 'styled-components';

export default function YearSummary({ filteredCards }) {
  const [timeSpan, setTimeSpan] = useState(2022);
  const [period, setPeriod] = useState(1);

  const filteredCardsByTime = filteredCards.filter(card =>
    card.date.includes(timeSpan)
  );

  const filteredCatches = filteredCardsByTime.map(data => data.catches);

  const filterNumberCatches = filteredCatches.map(number => number.length);

  var numberCatches = lodash.sum(filterNumberCatches);

  return (
    <>
      <Title>Stats:</Title>
      <PeriodChoice>
        <button
          onClick={() => {
            setTimeSpan(2022);
            setPeriod(1);
          }}
        >
          This Year
        </button>
        <button
          onClick={() => {
            setTimeSpan(2021);
            setPeriod(2);
          }}
        >
          Last Year
        </button>
        <button
          onClick={() => {
            setTimeSpan('2022-04');
            setPeriod(3);
          }}
        >
          This Month
        </button>
        <button
          onClick={() => {
            setTimeSpan('2022-03');
            setPeriod(4);
          }}
        >
          Last Month
        </button>
      </PeriodChoice>
      {period === 1 && (
        <Period>
          <span>You caught {numberCatches} fish this year</span>
        </Period>
      )}
      {period === 2 && (
        <Period>
          <span>You caught {numberCatches} fish last year</span>
        </Period>
      )}
      {period === 3 && (
        <Period>
          <span>You caught {numberCatches} fish this moth</span>
        </Period>
      )}
      {period === 4 && (
        <Period>
          <span>You caught {numberCatches} fish last month</span>
        </Period>
      )}
    </>
  );
}

const Title = styled.h1`
  color: #687a48;
  font-size: 24px;
  width: 50%;
  margin: 20px 0 20px;
`;

const PeriodChoice = styled.div`
  display: flex;
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

  :nth-child(2) {
    background-color: green;
  }
`;

const Period = styled.div`
  background-color: #fffcf8;
  border-radius: 10px;
  padding: 5px 10px;
  border: 0.5px solid #a2c36c;
  color: #687a48;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
`;
