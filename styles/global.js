import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    width:350,
    height:50,
    padding:10,
    textAlign:'center',
    backgroundColor:'#fff',
    marginTop:20,
    borderRadius: 10
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
   
  },
  tinyLogo:{
    width:350,
    height:300
  }
});

export const images = {
    ratings:{
        '1': require('../assets/image-photography.jpg'),
        '2': require('../assets/image-graphic-design.jpg'),
        '3': require('../assets/image-transform.png'),
        '4': require('../assets/image-stand-out.jpg'),
        '5': require('../assets/image-gallery-cone.jpg'),
        
    }
}