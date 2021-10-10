import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import OpenRankings from '@/menu/players/my-inscriptions/open-rankings/component';
import styles from '@/menu/players/my-inscriptions/styles';
import TeamProposals from '@/menu/players/my-inscriptions/team-proposals/component';

export default function MyInscriptions() {
  const [flagReRender, setFlagReRender] = useState(false);

  function handlePlayerEnrollment() {
    setFlagReRender(prevFlagReRender => !prevFlagReRender);
  }

  return (
    <div className="main-container">
      <OpenRankings key={uuidv4()} />
      <TeamProposals key={uuidv4()} playerEnrollment={handlePlayerEnrollment} />
      <style jsx>{styles}</style>
    </div>
  );
}
