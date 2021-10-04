import { Fragment } from 'react';
import styles from '@/components/navigation-bar/menu-account-1/styles';

import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function MenuAccount1(props) {
  return (
    <Fragment>
      <Menu
        anchorEl={props.anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        id="menu-account"
        keepMounted
        open={props.isAccountMenuOpen}
        onClose={props.handleAccountMenuClose}
      >
        <MenuItem onClick={props.handleProfile}>Profile</MenuItem>
        <MenuItem onClick={props.handleNotifications}>
          Notifications
          <span className="num-notifications">{props.numNotifications}</span>
        </MenuItem>
        <Divider />
        <MenuItem onClick={props.handleMyInscriptions}>My Inscriptions</MenuItem>
        <MenuItem onClick={props.handleMyRankings}>My Rankings</MenuItem>
        <MenuItem onClick={props.handleMyCombats}>My Combats</MenuItem>
        <Divider />
        <MenuItem onClick={props.handleLogout}>Log Out</MenuItem>
      </Menu>
      <style jsx>{styles}</style>
    </Fragment>
  );
}
