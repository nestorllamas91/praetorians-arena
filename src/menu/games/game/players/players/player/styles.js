import css from 'styled-jsx/css';

export default css`
  .civilization {
    display: flex;
    align-items: center;
  }
  .civilization-image {
    margin-right: 5px;
    width: 30px;
  }
`;

export function muiStyles() {
  return {
    tableBodyRow: {
      height: '40px !important'
    },
    playerSelected: {
      backgroundImage: 'url("/assets/images/textures/scribble-light.jpg")'
    },
    tableBodyCell: {
      borderBottom: 'none !important'
    },
    tableBodyCellLastRowSameTeam: {
      borderBottom: '1px solid gray !important'
    }
  };
}
