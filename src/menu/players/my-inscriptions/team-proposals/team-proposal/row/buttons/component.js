import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import styles from '@/menu/players/my-inscriptions/team-proposals/team-proposal/row/buttons/styles';

export default function Buttons(props) {
  const player = useSelector(({ player }) => player);
  const MySwal = withReactContent(Swal);
  const [buttons, setButtons] = useState(null);

  useEffect(() => {
    setTeamProposalButtons();
  }, []);

  function setTeamProposalButtons() {
    props.row.team.players.map(myPlayer => {
      if (myPlayer.steamNickname === player.data.steamNickname) {
        if (myPlayer.enrollmentState === 'pending') {
          setButtons({
            accept: false,
            refuse: false
          });
        } else {
          setButtons({
            accept: myPlayer.enrollmentState,
            refuse: !myPlayer.enrollmentState
          });
        }
      }
    });
  }

  async function handleCancelProposal(rankingId) {
    MySwal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You are going to cancel this team proposal.',
      width: '550px',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(async result => {
      if (result.value) {
        try {
          const url = `/api/account/my-inscriptions/cancel-proposal/${rankingId}/${player.data.steamNickname}`;
          await axios.put(url);
          setButtons({ accept: false, refuse: true });
          props.playerEnrollment();
          MySwal.fire({
            icon: 'success',
            title: 'Team proposal canceled!',
            text: 'The proposal for this new team has been canceled.',
            width: '550px'
          });
        } catch (err) {
          MySwal.fire({
            icon: 'error',
            title: 'Team proposal not canceled!',
            text: 'The proposal for this new team could not be canceled.',
            width: '550px'
          });
        }
      }
    });
  }

  async function handleAcceptProposal(rankingId) {
    MySwal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You are going to accept this team proposal.',
      width: '550px',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(async result => {
      if (result.value) {
        try {
          const url = `/api/account/my-inscriptions/accept-proposal/${rankingId}/${player.data.steamNickname}`;
          await axios.put(url);
          setButtons({ accept: true, refuse: false });
          props.playerEnrollment();
          MySwal.fire({
            icon: 'success',
            title: 'Team proposal accepted!',
            text: 'The proposal for this new team has been accepted.',
            width: '550px'
          });
        } catch (err) {
          MySwal.fire({
            icon: 'error',
            title: 'Team proposal not accepted!',
            text: 'The proposal for this new team could not be accepted.',
            width: '550px'
          });
        }
      }
    });
  }

  async function handleRefuseProposal(rankingId) {
    MySwal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You are going to refuse this team proposal.',
      width: '550px',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(async result => {
      if (result.value) {
        try {
          const url = `/api/account/my-inscriptions/refuse-proposal/${rankingId}/${player.data.steamNickname}`;
          await axios.put(url);
          setButtons({ accept: false, refuse: true });
          props.playerEnrollment();
          MySwal.fire({
            icon: 'success',
            title: 'Team proposal refused!',
            text: 'The proposal for this new team has been refused.',
            width: '550px'
          });
        } catch (err) {
          MySwal.fire({
            icon: 'error',
            title: 'Team proposal not refused!',
            text: 'The proposal for this new team could not be refused.',
            width: '550px'
          });
        }
      }
    });
  }

  return (
    <div>
      {buttons === null ? (
        <></>
      ) : props.row.team.players[0].steamNickname === player.data.steamNickname &&
        props.row.enrollmentState === 'pending' ? (
        <button onClick={() => handleCancelProposal(props.rankingId)} className="button">
          CANCEL
        </button>
      ) : props.row.team.players[0].steamNickname === player.data.steamNickname &&
        (props.row.enrollmentState === 'accepted' || props.row.enrollmentState === 'refused') ? (
        <></>
      ) : props.row.team.players[0].steamNickname !== player.data.steamNickname &&
        props.row.enrollmentState === 'pending' ? (
        <div className="action">
          <div className="button-accept">
            <button
              disabled={buttons.accept ? true : false}
              onClick={() => handleAcceptProposal(props.rankingId)}
              className="button"
            >
              ACCEPT
            </button>
          </div>
          <button
            disabled={buttons.refuse ? true : false}
            onClick={() => handleRefuseProposal(props.rankingId)}
            className="button"
          >
            REFUSE
          </button>
        </div>
      ) : (
        <></>
      )}
      <style jsx>{styles}</style>
    </div>
  );
}
