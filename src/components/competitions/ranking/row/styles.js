import css from 'styled-jsx/css';

export default css`
  .player {
    font-weight: bold;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button-casual-challenge {
    margin-bottom: 2px;
  }
`;

export function stylesMaterialUI() {
  return {
    tableBodyRow: {
      height: '110px'
    },
    tableBodyRowPlayerSelected: {
      backgroundImage: 'url("/assets/images/textures/scribble-light.jpg")'
    },
    tableBodyCell: {
      borderBottom: '1px solid gray'
    }
  };
}
