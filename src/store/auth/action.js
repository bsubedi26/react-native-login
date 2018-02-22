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
    }
  },

  populateUser(accessToken) {
    return async (dispatch, getState) => {
      try {
        dispatch(actions.setToken(accessToken))
        const { value } = await dispatch({ type: types.VERIFY_JWT, payload: feathers.passport.verifyJWT(accessToken) })
        await dispatch({ type: types.USER_GET, payload: userService.get(value.userId) })
      }
      catch (error) {
        return Promise.reject(error)
      }
      
    }
  },
  logout() {
    return dispatch => {
      dispatch({ type: types.RESET })
      return dispatch({ type: types.LOGOUT, payload: feathers.logout() })
    }
  },

  setToken(accessToken) {
    return {
      type: types.SET_ACCESS_TOKEN,
      accessToken
    }
  }
}


export default actions