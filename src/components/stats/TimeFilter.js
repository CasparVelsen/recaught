import styled from 'styled-components';

export default function TimeFilter ({filteredCards, handleChange, handleSubmit}) {

    const allYearsInManyArrays = filteredCards.map(object => {
        const year = new Date(object.date).getFullYear();
        return year;
    })

    const eachYear = [...new Set(allYearsInManyArrays)];

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <P>season:</P>
                <Select id="season" name="selectedSeason" onChange={handleChange}>
                    <option value="">All time</option>
                    {eachYear.map((opt, id) => (
                        <option key={id}>{opt}</option>
                    ))}
                </Select>
            </form>
        </Wrapper>
        
    );
}

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
`;

const P = styled.p`
color: #687a48;
font-size: 1rem;
text-align: right;
margin: 0 0 5px 0;
`;

const Select = styled.select`
  border: none;
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
  color: #ff9c27;
  text-align: right;

  &:focus {
    outline: none;  /* Keine Umrandung bei Fokus */
    border: none;   /* Keine Border bei Fokus */
  }
`;