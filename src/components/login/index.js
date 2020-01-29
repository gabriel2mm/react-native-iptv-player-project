import React, { Component, useState, useEffect } from 'react'
import { Container, Header, Content, Form, Item, Input, Button, Label, Text } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import userTypes from '../../reducers/types/userTypes'

export default function Login(props) {
    const userInfo = useSelector(state => state.userReducer.user);
    const [form, setForm] = useState({ host: '', username: '', password: '' })
    const error = useSelector(state => state.userReducer.error);
    const dispatch = useDispatch();

    useEffect(() => {
       if(userInfo != null && userInfo.auth === 1 && userInfo.status === "Active"){
            props.history.push('hub');
       }
    }, [userInfo]);

    function handleChangeValue(inputName, event) {
        setForm({ ...form, [inputName]: event.nativeEvent.text });
    }

    async function handleClick() {
        const {host, username, password} = form;
        dispatch({ type: userTypes.ASYNC_LOGIN, payload: {host, username, password} });
    }

    return (
        <Container>
            <Header />
            <Content>
                {error != null ? (<Text>{error}</Text>) : null}
                <Form>
                    <Item floatingLabel>
                        <Label>Host</Label>
                        <Input name="host" placeholder="host" onChange={e => handleChangeValue('host', e)} value={form.host} />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Username</Label>
                        <Input name="user" placeholder="user" onChange={e => handleChangeValue('username', e)} value={form.username} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input name="password" placeholder="password" onChange={e => handleChangeValue('password', e)} value={form.password} />
                    </Item>
                    <Button primary onPress={handleClick}>
                        <Text> Entrar </Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}