import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Shoes from '../Shoes';



export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
      <View style={{ flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicato={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/1.png')} cost="110,90" >
              Tênis Nike Air Max
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/3.png')} cost="310,30" >
              Tênis Nike Epic
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/5.png')} cost="510,50" >
              Tênis Nike Squidward
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/2.png')} cost="80,90" >
              Tênis Nike Air
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: '2%',
    marginVertical: '2%'

  },
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
    marginVertical: '2%'
  }
})