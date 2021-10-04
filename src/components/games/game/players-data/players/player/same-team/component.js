import styles from '@/components/games/game/players-data/players/player/same-team/styles';

import { v4 as uuidv4 } from 'uuid';

export default function SameTeam(props) {
  let symbolsJSX = [];
  for (let i = 0; i < props.numTeamPlayers; i++) {
    symbolsJSX.push(
      <img
        key={uuidv4()}
        src="/assets/images/icons/games/team-symbols/same-team.png"
        style={{ verticalAlign: 'middle' }}
      />
    );
  }
  return <div style={{ textAlign: 'left' }}>{symbolsJSX}</div>;
}
