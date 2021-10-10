import css from 'styled-jsx/css';

export default css`
  .ranking-table {
    box-shadow: 0px 0px 5px 0px black;
  }
`;

export function stylesMaterialUI() {
  return {
    tableHeadRow: {
      height: '30px'
    },
    tableHeadCell: {
      fontFamily: 'Montserrat !important',
      fontSize: '12px',
      color: 'white',
      backgroundColor: '#222229',
      '& > span': {
        fontFamily: 'Montserrat !important',
        fontSize: '12px'
      }
    },
    tableBody: {
      backgroundImage: 'url("/assets/images/textures/scribble-dark.jpg")'
    }
  };
}
