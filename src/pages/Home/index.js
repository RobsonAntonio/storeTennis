import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Shoes from '../../component/Shoes';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigate = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />


        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>-</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>MASCULINO</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>


        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/1.png')} cost="R$141,91" onClick={() => navigate.navigate("Detail")}>Tênis Nike Downshifter 1156s66</Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$180,00" onClick={() => navigate.navigate("Detail")}>Tênis Nike</Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} cost="R$120,99" onClick={() => alert('clicou')}>Tênis Nike Precision VI Masculino </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$380,91" onClick={() => alert('clicou')}>Tênis Nike Revolution 6 Next Nature Masculino</Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost="R$280,99" onClick={() => alert('clicou')}>Tênis Nike Revolution 6 Next Nature</Shoes>
          <Shoes img={require('../../assets/6.png')} cost="R$80,99" onClick={() => alert('clicou')}>Tênis Nike Revolution</Shoes>

        </View>

      </ScrollView>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header: {
    marginBottom: 8
  },
  image: {
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2
  }
})