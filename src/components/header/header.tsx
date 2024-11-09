"use client"

import styled from "styled-components";
import {Button} from "antd";
import {Moon, Search} from "lucide-react";
import {useRouter} from "@/navigation";

export default function Header() {
    const router = useRouter();
    return (

        <Container>
            <Wrapper>
                <LeftHeader>
                    <div style={{
                        display: "flex", gap: "10px", alignItems: "center"
                    }}>

                        <img src={'/images/logo.svg'} alt="logo" height={50}/>
                        <div style={{display: "flex", flexDirection: "column"}}>

                            <h1 style={{color: "#871CFF"}}>My</h1>
                            <h1 style={{color: "#871CFF"}}>Day</h1>

                        </div>

                    </div>
                    <NavItems>
                        <NavItem>Platform</NavItem>
                        <NavItem>Resources</NavItem>
                        <NavItem>Blog</NavItem>
                        <NavItem>Pricing</NavItem>
                    </NavItems>
                </LeftHeader>
                <RightHeader>
                    <Search size={25} color="#871CFF"/>
                    <Moon size={25} color="#871CFF"/>
                    <LoginButton onClick={() => router.push('/login')}>Login</LoginButton>
                    <SignButton onClick={() => router.push('/register')}>Sign up</SignButton>
                </RightHeader>
            </Wrapper>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    background-color: #EEECFF;

`
const Wrapper = styled.div`
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    height: 75px;

`
const LeftHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`
const RightHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    place-content: end;
    gap: 20px;

`
const NavItems = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 100px;
`
const NavItem = styled.p`
    color: #871CFF;
    cursor: pointer;

`
const LoginButton = styled(Button)`
    color: #871CFF;
    font-size: 14px;
    width: 100px;
    height: 50px;
`
const SignButton = styled(Button)`
    color: #871CFF !important;
    font-size: 14px;
    width: 100px;
    height: 50px;
    background-color: transparent !important;
    border: 2px solid #871CFF;
`