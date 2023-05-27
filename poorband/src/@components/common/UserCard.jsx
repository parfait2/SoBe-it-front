import React from "react";
import { styled as muiStyled } from '@mui/material/styles';
import { styled } from "styled-components";
import { Avatar, Button, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import { theme } from '../../style/theme';
// import { SIDEBAR_DETAIL } from "../../../core/sideBarData";


export default function UserCard(props) {
  const { userId, nickname, userTier, introduction, profileImgUrl, status } = props;

  return (
    <NotificationCardButton disableRipple>
      <ListItem>        
        <ListItemAvatar style={{ width: "6rem", height: "6rem" }}>
          {/* <Avatar style={{ width: "6rem", height: "6rem" }}> */}
            <MoodBadIcon style={{ width: "6rem", height: "6rem" }} />
          {/* </Avatar> */}
        </ListItemAvatar>
        <div style={{ marginLeft: "2rem", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "row", marginBottom: "0.6rem", alignItems: "center" }}>
                <NotificationTextWrapper>
                  <MainNotificationText primary={ nickname } />
                </NotificationTextWrapper>
                <NotificationTextWrapper>
                  <PlusNotificationText primary={ userTier } />
                </NotificationTextWrapper>
                <NotificationTextWrapper>
                  <PlusNotificationText style={{ color: "#878787" }} primary={ userId } />
                </NotificationTextWrapper>
              </div>
              
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                {/* <SubNotificationText secondary="Follow Content" /> */}
                <IntroductionContent style={{ color: "#878787" }}>{ introduction }</IntroductionContent>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <FollowButton>팔로우</FollowButton>
            </div>
          </div>
        </div>
      </ListItem>
    </NotificationCardButton>
  );
}

const NotificationCardButton = muiStyled(ListItemButton) ({
  '&:hover': {
    backgroundColor: theme.colors.lightpurple,
  },
  '&:active': {
    backgroundColor: 'none',
  },
  '%:focus': {
    backgroundColor: 'none',
  },
});

const NotificationTextWrapper = styled('div')({
  display: 'inline-block',
  width: 'fit-content',
});

const MainNotificationText = muiStyled(ListItemText) ({
  '& span': { 
    fontSize: '1.6rem',
    fontFamily: [
      'Roboto',
    ].join(','),
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: '0.03em',
  },
});

const PlusNotificationText = muiStyled(ListItemText) ({
  marginLeft: '0.6rem',

  '& span': { 
    fontSize: '1.2rem',
    fontFamily: [
      'Roboto',
    ].join(','),
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: '0.03em',
  },
});

const IntroductionContent = styled.div`
  font-size: 1.4rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.03em;
`;

const TimeNotificationText = muiStyled(ListItemText) ({
  marginLeft: '0.6rem',

  '& p': { 
    color: '#8799A5',
    fontSize: '1rem',
    fontFamily: [
      'Roboto',
    ].join(','),
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: '0.03em',
  },
});

const FollowButton = muiStyled(Button) ({
  width: '3.4rem',
  height: '2.2rem',
  borderRadius: '3rem',
  color: theme.colors.white,
  backgroundColor: theme.colors.mainpurple,
  fontSize: '1.2rem',
  fontFamily: [
    'Spoqa Han Sans Neo',
  ].join(','),
  fontStyle: 'normal',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: theme.colors.darkpurple_2
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: theme.colors.lightpurple,
    borderColor: theme.colors.lightgrey_1,
  },
  '&:focus': {
    boxShadow: '0 0 0 0.04rem #EDEDED',
    border: 'none',
    outline: 'none',
  },
});
