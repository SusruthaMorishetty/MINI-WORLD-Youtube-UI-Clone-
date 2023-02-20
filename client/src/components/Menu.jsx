import React from 'react';
import styled from 'styled-components';
import MiniWorld from "../img/logo.jpg"
import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlined from '@mui/icons-material/ExploreOutlined';
import Subscriptions from '@mui/icons-material/Subscriptions';
import Library from '@mui/icons-material/LocalLibrary';
import History from '@mui/icons-material/History';
import Music from '@mui/icons-material/MusicNote';
import Sports from '@mui/icons-material/Sports';
import Gaming from '@mui/icons-material/Gamepad';
import Movies from '@mui/icons-material/Movie';
import News from '@mui/icons-material/Newspaper';
import Live from '@mui/icons-material/LiveTv';
import Settings from '@mui/icons-material/Settings';
import Report from '@mui/icons-material/Report';
import Help from '@mui/icons-material/Help';
import LightMode from '@mui/icons-material/LightMode';
import { AccountCircleOutlined } from '@mui/icons-material';


const Container = styled.div`
flex:1;
background-color: ${({theme})=>theme.bgLighter};
height:120vh;
color:${({theme})=>theme.text};
font-size:12px;
position:sticky;
top:0;
`;

const Wrapper = styled.div`
padding: 18px 20px;
`;

const  Logo = styled.div`
display: flex;
align-items: center;
gap: 10px;
font-weight: bold;
font-size:0px
margin-bottom:15px;
`;

const Img = styled.img`
height: 35px;
`

const Item =styled.div`
display:flex;
align-items: center;
gap: 20px;
cursor: Pointer;
padding:8.5px,0px;

&:hover{
    background-color:${({theme})=>theme.soft};
}
`;

const Hr = styled.hr`
margin:8px 0px;
border: 0.5px solid ${({theme})=>theme.soft};
`

const Title = styled.h2`
font-size:14px;
font-weight:500;
color:#aaaaaa;
margin-bottom:20px;
`
const Login=styled.div``
const Button=styled.button`
padding:4px 10px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500px;
margin-top:8px;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`;

const Menu = ({darkMode,setDarkMode}) => {
    return (
    <Container>
        <Wrapper>
        <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
            <Logo>
                <Img src={MiniWorld}/>
                   MiniWorld
            </Logo>
            </Link>
            <Item>
                <HomeIcon/>
                Home
            </Item>
            <Link to="trends" style={{textDecoration:"none",color:"inherit"}}>
            <Item>
                <ExploreOutlined/>
                Explore
            </Item>
            </Link>
            <Link to="subscriptions" style={{textDecoration:"none",color:"inherit"}}>
            <Item>
                <Subscriptions/>
                Subscriptions
            </Item>
            </Link>
            <Hr/>
            <Item>
                <Library/>
                Library
            </Item>
            <Item>
                <History/>
                History
            </Item>
            <Hr/>
            <Login>
                sign in to like videos,comment and subscribe the channels
             <Link to="signin" style={{textDecoration:"none"}}>
                <Button>
                    <AccountCircleOutlined/>
                    SIGN IN
                </Button>
              </Link>
            </Login>
            <Hr/>

            <Title>BEST OF MINIWORLD</Title>
            <Item>
                <Music/>
                Music
            </Item>
            <Item>
                <Sports/>
                Sports
            </Item>
            <Item>
                <Gaming/>
                Gaming
            </Item>
            <Item>
                <Movies/>
                Movies
            </Item>
            <Item>
                <News/>
                News
            </Item>
            <Item>
                <Live/>
                Live
            </Item>
            <Hr/>
            <Item>
                <Settings/>
                Settings
            </Item>
            <Item>
                <Report/>
                Report
            </Item>
            <Item>
                <Help/>
                Help
            </Item>
            <Item onClick={()=>setDarkMode(!darkMode)}>
               <LightMode/>
                {darkMode?"Light" :"Dark"}Mode
            </Item>
        </Wrapper>
    </Container>
    );
};

export default Menu
