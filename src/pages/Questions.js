import React, {useRef, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {QuestionItem} from '../components';


const Questions = (props) => {
    const listRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const questionList = useSelector((global) => global.questions);


    const renderQuestion = ({item}) => (
        <QuestionItem questionObject={item} onAnswer={answer}/>
      );

      // When clicking the button, changing the page
            const answer = (result) => {
                const newIndex = currentIndex + 1;
                
                if(newIndex === questionList.length )
                return  props.navigation.navigate('Finish')
 
                listRef.current.scrollToIndex({index: newIndex})
                setCurrentIndex(newIndex)

            }
    return (  
    <View style={{flex:1}} >
        <View style={{flex: 1}}>
            
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