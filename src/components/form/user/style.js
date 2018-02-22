import { StyleSheet } from 'react-native';
import Colors from 'src/themes/Colors';

const style = StyleSheet.create({
  textError: {
    color: 'red'
  },
  label: {
    fontSize: 18,
    opacity: 0.5
  },
  formContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: Colors.facebook,
    borderRadius: 30,
    marginBottom: 10,
    padding: 22,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  borderAll: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // height: 70
  },
  whiteSpace: {
    padding: 10
  },
  whiteSpaceSm: {
    padding: 5
  }

});

export default style;