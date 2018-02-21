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
        setSubmitting(false);
        if (Actions[route.toLowerCase()]) {
          return Actions[route.toLowerCase()]()
        }
      })
      .catch(error => {
        setSubmitting(false);
        setErrors(error);
      })
  },
})

export default FormContainer(FormFields);