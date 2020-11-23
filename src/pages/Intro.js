import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {CategorySelectModal} from '../components'

import {introPage} from './styles';

const Intro = (props) => {

  const [modalFlag, setModalFlag] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>

        <View style={introPage.container}>
        <Text style={introPage.bannerText}>Trivial</Text>
        </View>

        <View style={introPage.container}>
          <TouchableOpacity style={introPage.buttonContainer} 
          onPress={() => setModalFlag(true)}>

            
            <Text style={introPage.buttonText} >Start !!</Text>
          </TouchableOpacity >
        </View>

        <CategorySelectModal 
        visibility={modalFlag} 
        onClose={() => setModalFlag(false)}
        />
      </View>
    </SafeAreaView>
  );
};

export {Intro};