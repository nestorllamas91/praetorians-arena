import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { withStyles } from '@mui/styles';
import axios from 'axios';
import Router from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import steamCountries from '@/data/steam-countries.json';
import styles, { stylesMaterialUI } from '@/menu/players/styles';

function Players(props) {
  const { classes } = props;
  const [playersError, setPlayersError] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  async function getPlayers() {
    try {
      const url = '/api/players';
      const res = await axios.get(url);
      setPlayers(res.data.output.data);
    } catch (err) {
      setPlayersError(err.response.data.status.code);
    }
  }

  function handleClickStatistics(steamId) {
    Router.push(`/stats?steamId=${steamId}`);
  }

  return (
    <div className="main-container">
      {players.length === 0 ? (
        <Fragment></Fragment>
      ) : (
        <div className="players-table">
          <Paper>
            <Table>
              <TableHead>
                <TableRow classes={{ root: classes.tableHeadRow }}>
                  <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                    Avatar
                  </TableCell>
                  <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                    Nickname
                  </TableCell>
                  <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                    Real Name
                  </TableCell>
                  <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                    Country
                  </TableCell>
                  <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                    Steam ID
                  </TableCell>
                  <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                    Profile URL
                  </TableCell>
                  <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody classes={{ root: classes.tableBody }}>
                {players.map(player => {
                  return (
                    <TableRow key={uuidv4()} classes={{ root: classes.tableBodyRow }}>
                      <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                        <img src={player.steamAvatar.medium} className="avatar" />
                      </TableCell>
                      <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                        {player.steamNickname}
                      </TableCell>
                      <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                        {player.steamRealName === undefined ? <i>unknown</i> : player.steamRealName}
                      </TableCell>
                      <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                        {player.steamCountry === undefined ? (
                          <i>unknown</i>
                        ) : (
                          Object.keys(steamCountries).map(country =>
                            country === player.steamCountry ? steamCountries[country].name : undefined
                          )
                        )}
                      </TableCell>
                      <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                        {player.steamId}
                      </TableCell>
                      <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                        <a href={player.steamProfileUrl}>{player.steamProfileUrl}</a>
                      </TableCell>
                      <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                        <a onClick={() => handleClickStatistics(player.steamId)}>View statistics</a>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </div>
      )}
      <style jsx>{styles}</style>
    </div>
  );
}

export default withStyles(stylesMaterialUI)(Players);
