import { v4 as uuidv4 } from 'uuid';

import Player from '@/menu/games/game/players/players/player/component';

export default function Players(props) {
  let players = [],
    indexPlayer = 0;

  props.teamsData.map(teamData => {
    for (let i = 0; i < teamData.playersData.length; i++) {
      players.push(
        <Player
          key={uuidv4()}
          playerSelected={props.playerSelected}
          data={teamData.playersData[i]}
          numTeamPlayers={teamData.playersData.length}
          isLastPlayerSameTeam={i === teamData.playersData.length - 1 ? true : false}
          isLastPlayer={indexPlayer === props.numTotalPlayers - 1 ? true : false}
        />
      );
      indexPlayer++;
    }
  });
  return players;
}
