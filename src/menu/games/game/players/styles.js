import css from 'styled-jsx/css';

export default css`
  .container-table-players-data {
    display: flex;
    padding: 0px;
  }
`;

export function muiStyles(theme) {
  return {
    paper: {
      width: '100%'
    },
    tableHeadRow: {
      height: '30px !important'
    },
    tableHeadCell: {
      borderBottom: '0px',
      fontFamily: 'Montserrat !important',
      fontSize: '12px',
      color: 'white',
      backgroundColor: '#222229',
      '& > div': {
        display: 'flex',
        'flex-direction': 'column',
        'line-height': '1'
      },
      '& > div > span': {
        fontFamily: 'Montserrat !important',
        fontSize: '12px'
      }
    },
    tableBody: {
      backgroundImage: 'url("/assets/images/textures/scribble-dark.jpg")'
    }
  };
}
