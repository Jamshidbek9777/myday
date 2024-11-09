"use client"

import styled from "styled-components";
import {Container} from "postcss";

export default function TopBar() {
    return (

        <Wrapper>
            <h1>This is topbar</h1>
        </Wrapper>

    )
}
const Wrapper = styled.div`
    display: flex;
    background-color: #462B82;
    height: 45px;
    color: white;
`