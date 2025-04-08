import styled from 'styled-components';

export default function TimeFilter ({filteredCards, handleChange, handleSubmit}) {

    const allYearsInManyArrays = filteredCards.map(object => {
        const year = new Date(object.date).getFullYear();
        return year;
    })

    const eachYear = [...new Set(allYearsInManyArrays)];

    return (
        <div>
            <SeasonForm onSubmit={handleSubmit}>
                <Select id="season" name="selectedSeason" onChange={handleChange}>
                    <option value="">All time</option>
                    {eachYear.map((opt, id) => (
                        <option key={id}>{opt}</option>
                    ))}
                </Select>
            </SeasonForm>
        </div>
        
    );
}

const SeasonForm = styled.form`
margin-top: 10px;
`;

const Select = styled.select`
width: auto%;
  border: none;
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
  color: #ff9c27;

  &:focus {
    outline: none;  /* Keine Umrandung bei Fokus */
    border: none;   /* Keine Border bei Fokus */
  }
`;