import initialState from './state'
import types from './types'


export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case `${types.AUTHENTICATE}_PENDING`: {
      return {
        ...state,
        isPending: true
      }
    }

    case `${types.AUTHENTICATE}_REJECTED`: {
      return {
        ...state,
        isPending: false,
        isError: payload
      }
    }

    case `${types.AUTHENTICATE}_FULFILLED`: {
      const { accessToken } = payload
      return {
        ...state,
        isPending: false,
        isError: null,
        accessToken
      }
    }

    case `${types.VERIFY_JWT}_FULFILLED`: {
      return {
        ...state,
        isError: null,
        decodedToken: payload,
        id: payload.userId
      }
    }

    case `${types.USER_GET}_FULFILLED`: {
      return {
        ...state,
        email: payload.email,
        avatar: payload.avatar
      }
    }

    case types.SET_ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.accessToken
      }
    }

    case types.RESET: {
      return {
        ...initialState
      }
    }

    default: return state
  }
}