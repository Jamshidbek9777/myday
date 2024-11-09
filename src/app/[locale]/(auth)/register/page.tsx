"use client"

import styled from "styled-components";
import {Button, Divider, Flex, Form, FormProps, Input} from "antd";
import {media} from "@/style";
import Link from "next/link";

type FieldType = {
    name?: string,
    username?: string;
    password?: string;
};
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
}
const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (values) => {
    console.log(values);
}

export default function Register() {
    return (
        <Wrapper>
            <Flex vertical align="center">
                <LoginTitle>Register</LoginTitle>
                <StyledForm
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item<FieldType>
                        name="name"
                        rules={[
                            {required: true, message: "Iltimos ism kiriting!"},
                        ]}
                    >
                        <AntdInput placeholder="Ism kiriting"/>
                    </Form.Item>
                    <Form.Item<FieldType>
                        name="username"
                        rules={[
                            {required: true, message: "Iltimos login kiriting!"},
                        ]}
                    >
                        <AntdInput placeholder="Login kiriting"/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="password"
                        rules={[{required: true, message: "Iltimos parol kiriting!"}]}
                    >
                        <AntdInputPassword placeholder="Parol kiriting"/>
                    </Form.Item>


                    <Form.Item>
                        <SubmitButton block htmlType="submit">
                            Sign In
                        </SubmitButton>
                    </Form.Item>

                </StyledForm>


                <Divider>or</Divider>
                <Helper>
                    Hisobingiz bormi ?{" "}
                    <Link
                        style={{color: "#462B82", borderBottom: "1px solid #462B82"}}
                        href={"/login"}
                    >
                        Login
                    </Link>
                </Helper>
            </Flex>
        </Wrapper>

    )
}


const Wrapper = styled.div`
    align-items: center;
    background-position: center;
    display: flex;
    background-image: url("/images/bg.svg");
    min-height: calc(var(--vh, 1vh) * 100);
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: fill;
    overflow: hidden;
    justify-content: center;

    //bg for mobiles
    ${media.sm`
        background-image: url("/images/main-bg-small3.svg");
  `}
`
const LoginTitle = styled.h1`
    font-size: 32px;
    font-weight: 400;
    color: #462B82;
    margin-bottom: 40px;

    ${media.sm`
        font-size: 36px;
    `}
`;

const StyledForm = styled(Form<FieldType>)`
    width: 350px;

    ${media.sm`
        width: 400px;
  `}

    ${media.xs`
        width: 100%;
  `}
`;

const AntdInput = styled(Input)`
    font-size: 16px;
    font-weight: 600;
    color: #462B82 !important;
    margin-top: 15px;


    ${media.sm`
         padding: 10px !important;
  `}
`;

const AntdInputPassword = styled(Input.Password)`
    font-size: 16px;
    font-weight: 600;
    color: #462B82 !important;
    margin-top: 15px;

    ${media.sm`
        padding: 10px !important;
  `}
`;

const Helper = styled.p`
    color: #462B82;
    margin-top: 10px;

    ${media.sm`
        font-size: 14px;
  `}
`;

const SubmitButton = styled(Button)`
    margin-top: 40px;
    background-color: #462B82 !important;
    border-radius: 15px !important;

    ${media.sm`
        height: 44px !important;
        font-size: 16px !important;
  `}
`;
