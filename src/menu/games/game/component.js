import { Fragment } from 'react';

import FileData from '@/menu/games/game/file/component';
import GameData from '@/menu/games/game/game/component';
import PlayersData from '@/menu/games/game/players/component';
import ArenaData from '@/menu/games/game/system/component';

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
