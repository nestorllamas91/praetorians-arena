import { Fragment } from 'react';

import ArenaData from '@/components/games/game/arena-data/component';
import FileData from '@/components/games/game/file-data/component';
import GameData from '@/components/games/game/game-data/component';
import PlayersData from '@/components/games/game/players-data/component';

export default function Game(props) {
  return (
    <Fragment>
      <ArenaData data={props.sequenceData.arenaData} preview={props.preview} />
      <FileData data={props.sequenceData.fileData} preview={props.preview} />
      <GameData data={props.sequenceData.gameData} />
      <PlayersData sequenceData={props.sequenceData} playerSelected={props.playerSelected} />
    </Fragment>
  );
}
