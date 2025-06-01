// src/styles/reactSelectStyles.js

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    height: 25,
    minHeight: 25,
    borderRadius: 5,
    border: '1px solid #ff9c27',
    padding: '0 6px',
    backgroundColor: 'white',
    boxShadow: state.isFocused ? '0 0 0 1px #ff9c27' : 'none',
    display: 'flex',
    alignItems: 'center',
    cursor: 'text',
  }),

  valueContainer: provided => ({
    ...provided,
    height: 25,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
  }),

  input: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
    height: 'auto',
    lineHeight: 'normal',
    color: '#aaa',
    fontSize: '0.9rem',
  }),

  placeholder: provided => ({
    ...provided,
    color: '#aaa',
    fontSize: '0.8rem',
    lineHeight: 'normal',
  }),

  singleValue: provided => ({
    ...provided,
    lineHeight: 'normal',
    fontSize: '0.9rem',
    color: '#aaa',
  }),

  indicatorsContainer: provided => ({
    ...provided,
    height: 25,
    display: 'flex',
    alignItems: 'center',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    padding: '0 2px', // Weniger horizontaler Platz
    display: 'flex',
    alignItems: 'center',
    color: '#aaa',
    cursor: 'pointer',
    svg: {
      width: 14, // Kleineres Icon
      height: 14,
    },
  }),

  clearIndicator: provided => ({
    ...provided,
    color: '#aaa',
    padding: '0 2px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    svg: {
      width: 14, // Kleineres Icon
      height: 14,
    },
  }),

  menu: provided => ({
    ...provided,
    zIndex: 9999,
    fontSize: '0.9rem',
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#eee' : 'white',
    color: '#a2c36c', // Schriftfarbe der Option
    cursor: 'pointer',
  }),
};

export default customSelectStyles;
