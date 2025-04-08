import styled from 'styled-components';

export default function TimeFilter ({filteredCardsByTime, handleChange, handleSubmit}) {

    const allWaterInManyArrays = filteredCardsByTime?.map(obj => obj.water) || [];
    
    const eachWater = [...new Set(allWaterInManyArrays)];
    

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <Select id="water" name="selectedWater" onChange={handleChange}>
                    <option value="">All waters</option>
                    {eachWater.map((opt, id) => (
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

const Select = styled.select`
  border: none;
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
  color: #687a48;
  text-align: right;

  &:focus {
    outline: none;  /* Keine Umrandung bei Fokus */
    border: none;   /* Keine Border bei Fokus */
  }
`;