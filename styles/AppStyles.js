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
  profilDescription: {
    backgroundColor: Colors.ghost,
    padding: 15,
    fontSize: 25,
    fontFamily: 'InriaRegular',
  },
  titleBioText: {
    fontSize: 25,
    padding: 9,
    fontFamily: 'InriaBold',
  },
  textBio: {
    fontFamily: 'InriaRegular',
    fontSize: 20,
    padding: 9,
  },
  photoContainer: {
    width: '100%',
    height: 350,
  },
  bgPhoto: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  photoTitle: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoTitleText: {
    fontFamily: 'InriaRegular',
    fontSize: 19,
    color: Colors.white,
  },
  selectedImage: {
    width: '100%',
    height: 300,
  },
  photoDescription: {
    padding: 15,
    fontSize: 25,
    fontFamily: 'InriaRegular',
  },
  textDescription: {
    fontFamily: 'InriaRegular',
    fontSize: 20,
    padding: 9,
  },
  emptyMsgWrapper: {
    flex: 1,
    backgroundColor: Colors.lightBrown,
  },
  emptyMsgText: {
    textAlign: 'center',
    color: Colors.darkGrey,
    fontSize: 23,
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 100,
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageProfile: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  modalBody: {
    flex: 1,
    backgroundColor: Colors.ghost,
    marginVertical: 60,
    padding: 20,
    alignSelf: 'center',
    borderRadius: 10,
    width: '90%',
  },
  modalClose: {
    alignSelf: 'flex-end',
    color: Colors.lightBrown,
  },
});
