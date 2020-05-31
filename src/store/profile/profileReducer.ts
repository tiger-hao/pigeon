import { Reducer } from 'redux';
import { ProfileActionTypes, ProfileState, ProfileAction } from './profileTypes';
import { AuthActionTypes } from 'store/auth/authTypes';

const INITIAL_STATE: ProfileState = {
  id: '',
  name: {
    first: '',
    last: ''
  },
  email: '',
  loading: false,
  error: ''
};

export const profileReducer: Reducer<ProfileState, ProfileAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProfileActionTypes.GET_PROFILE_REQUEST:
      return { ...state, loading: true };
    case ProfileActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.profile,
        loading: false,
        error: ''
      };
    case ProfileActionTypes.GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case AuthActionTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
