import css from 'styled-jsx/css';

export default css`
  .players-table {
    box-shadow: 0px 0px 5px 0px black;
  }
  .avatar {
    border: 2px solid #3d697b;
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
      backgroundColor: '#222229'
    },
    tableBody: {
      backgroundImage: 'url("/assets/images/textures/scribble-dark.jpg")'
    },
    tableBodyRow: {
      height: '80px'
    },
    tableBodyRowPlayerSelected: {
      backgroundImage: 'url("/assets/images/textures/scribble-light.jpg")'
    },
    tableBodyCell: {
      borderBottom: '1px solid gray'
    }
  };
}
