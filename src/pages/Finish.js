import React from 'react';
import {View, Text} from 'react-native';

import {finishPage} from './styles';
import {useSelector} from 'react-redux';

const Finish = (props) => {
    const userScore = useSelector(global => global.score)
    return(
        <View style={{flex:1}}>
            <View style={finishPage.container}>
                <Text style={finishPage.text}>Your score is {userScore}</Text>
            </View>
        </View>
    )
}

export {Finish};