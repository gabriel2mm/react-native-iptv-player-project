import React, { useEffect, useState } from 'react'
import { Container, ListItem, List, Header, Content, Form, Item, Input, Button, Label, Text, Spinner } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'
import vodsTypes from '../../reducers/types/vodsTypes'

export default function Vods(props) {
    const userInfo = useSelector(state => state.userReducer.user);
    const vods = useSelector(state => state.vodsReducer.vods);
    const dispatch = useDispatch()

    useEffect(() => {
        const { host, username, password } = userInfo;
        dispatch({ type: vodsTypes.ASYNC_FETCH_ALL_VODS, payload: { host, username, password, action_vod: 'get_vod_streams' } })
    }, []);

    function renderVods() {
        if (vods != null && vods.length > 0) {
            return (
                vods.map(r => <ListItem key={r.stream_id}>
                    <Text>{r.name}</Text>
                </ListItem>
                )
            )
        }
        return (<Spinner />); 
    }

    return (
        <Container>
            <List>
                {renderVods()}
            </List>
            <Text onPress={() => props.history.push('')}>Voltar</Text>
        </Container>
    )
}