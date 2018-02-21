import types from './types'
import feathers from 'src/util/feathers'
const userService = feathers.service('users')

const actions = {
  signup(payload) {
    return dispatch => {
      return dispatch({ type: types.SIGNUP, payload: userService.create(payload) })
    }
  },
  authenticate(payload) {
    return (dispatch, getState) => {

      return dispatch({ type: types.AUTHENTICATE, payload: feathers.authenticate(payload) })
        .then(response => {
          dispatch({ type: types.VERIFY_JWT, payload: feathers.passport.verifyJWT(response.value.accessToken) });
          return Promise.resolve(response)
        })
        .then(response => {
          const { id } = getState().auth
          dispatch({ type: types.USER_GET, payload: userService.get(id) })
          return Promise.resolve(response)
        })
        .catch(error => {
          return Promise.reject(error)
        })
    }
  },
  logout() {
    return dispatch => {
      dispatch({ type: types.RESET })
      return dispatch({ type: types.LOGOUT, payload: feathers.logout() })
    }
  }
}


export default actions;