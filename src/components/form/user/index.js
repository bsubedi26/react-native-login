import { withFormik } from 'formik';
import validate from './validate';
import FormFields from './fields';
import { Actions } from "react-native-router-flux";

const FormContainer = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: '', password: '' }),
  validate: validate,
  // Submission handler
  handleSubmit: (values, { props, setSubmitting, setErrors /* setValues, setStatus */ }) => {

    setSubmitting(true);
    return props.handleSubmit(values)
      .then(({ data, route }) => {
        const { navigation } = props;
        
        if (typeof route === "string" && navigation) {
          return navigation.navigate(route);
        }
      })
      .catch(error => {
        setSubmitting(false);
        setErrors({ message: "The provided email already exists."});
      })
  },
})

export default FormContainer(FormFields);