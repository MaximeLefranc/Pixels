import { StyleSheet } from 'react-native';
import Colors from './Colors.js';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infos: {
    fontSize: 20,
    fontFamily: 'InriaItalic',
  },
  titleText: {
    fontSize: 25,
    padding: 9,
    fontFamily: 'InriaBold',
  },
  profileImg: {
    width: 350,
    height: 350,
    borderRadius: 14,
  },
  profileItem: {
    padding: 15,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'InriaItalic',
    fontSize: 25,
  },
  profilInfos: {
    alignItems: 'center',
    padding: 10,
  },
  smallProfilImg: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    margin: 9,
    borderWidth: 6,
    borderColor: Colors.white,
  },
  profileName: {
    fontFamily: 'InriaBold',
    color: Colors.white,
    fontSize: 25,
  },
});
