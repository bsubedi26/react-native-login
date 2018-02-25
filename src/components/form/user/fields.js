import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import {
  View,
  Text,
  TextInput,
} from 'react-native-ui-lib';
import style from './style';

const renderError = (message) => (
  <View marginB-50 center>
    <Text red10 text50>{message}</Text>
  </View>
)
// Our inner form component which receives our form's state and updater methods as props
const FormFields = (props) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, title, login, signup, navigation } = props;

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
              <View marginL-5 marginT-5>
                {login && <Text onPress={() => navigation.navigate("Signup")} blue30 text85>Don't have an Account? Signup here.</Text>}
                {signup && <Text onPress={() => navigation.navigate("Login")} blue30 text85>Already have an Account? Login here.</Text>}
              </View>
            </View>
            
          }
          
        </View>

      </View>
    </View>
  )
}

export default FormFields;