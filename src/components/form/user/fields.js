import React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Colors from 'src/themes/Colors';
import {
  View,
  Text,
  TextInput,
} from 'react-native-ui-lib';
import { Actions } from "react-native-router-flux";

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


const renderError = (message) => (
  <View marginB-50 center>
    <Text red10 text50>{message}</Text>
  </View>
)
// Our inner form component which receives our form's state and updater methods as props
const FormFields = (props) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, title, login, signup } = props;

  return (
    <View>
      {errors.message && renderError(errors.message)}
      <View style={style.formContainer}>
        <View>
          <TextInput text70 marginT-25 placeholder="Email" dark10
            onChangeText={(email) => props.setFieldValue('email', email)}
          />
          {touched.email && errors.email && <Text style={style.textError}>{errors.email}</Text>}
          
          <View style={style.whiteSpace}></View>
          
          <TextInput text70 placeholder="Password" secureTextEntry dark10
            onChangeText={(password) => props.setFieldValue('password', password)}
          />
          
          {touched.password && errors.password && <Text style={style.textError}>{errors.password}</Text>}
        </View>

        <View style={style.whiteSpace}></View>
        <View left>
          {isSubmitting
            ?
            <View  margin-10>
              <ActivityIndicator size={"large"} />
            </View>
            :
            <View margin-10>
              <TouchableOpacity onPress={handleSubmit} style={style.button}>
                <Text style={style.buttonText}>Submit</Text>
              </TouchableOpacity>
              {login && <Text onPress={() => Actions.signup()} blue30 text85>Don't have an Account? Signup here.</Text>}
              {signup && <Text onPress={() => Actions.login()} blue30 text85>Already have an Account? Login here.</Text>}
            </View>
            
          }
          
        </View>

      </View>
    </View>
  )
}

export default FormFields;