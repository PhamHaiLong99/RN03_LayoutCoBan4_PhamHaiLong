import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import Alto_icon from '../../../assets/Alto_icon.png';
import Alto_0 from '../../../assets/Alto_0.png';
export class index extends Component {
  listGameInfo = [
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      description:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
      preview: Alto_0,
      backgroundColor: '#824671CC',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      description:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
      preview: Alto_0,
      backgroundColor: '#824671CC',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      description:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
      preview: Alto_0,
      backgroundColor: '#824671CC',
    },
  ];
  renderListGameInfo = () => {
    return this.listGameInfo.map((game, index) => {
      return (
        <View
          key={index}
          style={[styles.info, {backgroundColor: game.backgroundColor}]}>
          <Image source={game.icon} style={styles.icon} />
          <View style={styles.infoContent}>
            <Text style={styles.textInfo}>{game.title}</Text>
            <Text style={styles.textInfo}>{game.subTitle}</Text>
          </View>
        </View>
      );
    });
    // return result;
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView style={styles.container}> */}
        {this.renderListGameInfo()}
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#343434',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    paddingVeritcal: 30,
    // marginVertical: 10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContent: {
    width: '80%',
  },
  textInfo: {
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffff',
  },
});
