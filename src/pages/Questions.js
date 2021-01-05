import React, {useRef, useState} from 'react';
import {View, FlatList, Text, Animated} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {QuestionItem} from '../components';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';





const Questions = (props) => {
    const listRef = useRef(null);
    const dispatch = useDispatch();

    const [currentIndex, setCurrentIndex] = useState(0);
    const questionList = useSelector((global) => global.questions);


    const renderQuestion = ({item}) => (
        <QuestionItem questionObject={item} onAnswer={answer}/>
      );

      // When clicking the button, changing the page
            const answer = (result) => {
                dispatch({type: 'SET_SCORE', payload:{isTrue: result }})
                const newIndex = currentIndex + 1;
                
                if(newIndex === questionList.length )
                return  props.navigation.navigate('Finish')
 
                listRef.current.scrollToIndex({index: newIndex})
                setCurrentIndex(newIndex)

            }
    return (  
    <View style={{flex:1}} >
        <View style={{flex: 1}}>

        <View style={{backgroundColor: '#3949ab', alignItems: 'center', padding: 20}}>
        <CountdownCircleTimer
            isPlaying={true}
            duration={2}
            onComplete={() => props.navigation.navigate('Finish')}
            colors={[
              ['#fff176', 0.4],
              ['#ba68c8', 0.4],
              ['#ff8a65', 0.2],
            ]}>
            {({remainingTime, animatedColor}) => (
              <Animated.Text style={{fontSize: 100, color: animatedColor}}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>



        </View>

            
            <FlatList
            ref={listRef} 
            horizontal                    
            keyExtractor={(_, i) => i.toString()}
            data={questionList}
            renderItem={renderQuestion}
            scrollEnabled={false}

            
            />
        </View>

    </View>
    )
}

export {Questions} 