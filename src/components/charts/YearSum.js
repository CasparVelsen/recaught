import lodash from 'lodash';
import { useState } from 'react';
import styled from 'styled-components';

export default function YearSummary({ cards }) {
  const [timeSpan, setTimeSpan] = useState(2022);
  const [period, setPeriod] = useState(1);

  const filteredCards = cards.filter(card => card.date.includes(timeSpan));

  const filteredCatches = filteredCards.map(data => data.catches);

  const filterNumberCatches = filteredCatches.map(number => number.length);

  var numberCatches = lodash.sum(filterNumberCatches);

  return (
    <>
      <h2>Stats:</h2>
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
        <div>
          <span>You caught {numberCatches} fish this year</span>
        </div>
      )}
      {period === 2 && <span>You caught {numberCatches} fish last year</span>}
      {period === 3 && <span>You caught {numberCatches} fish this moth</span>}
      {period === 4 && <span>You caught {numberCatches} fish last month</span>}
    </>
  );
}

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
    border: 0.5px solid #a2c36c;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 10px;
  }
`;
