import { Profile, ProfileActionTypes, GetProfileRequestAction, GetProfileSuccessAction, GetProfileFailureAction } from "./profileTypes";

export const getProfileRequest = (): GetProfileRequestAction => ({
  type: ProfileActionTypes.GET_PROFILE_REQUEST,
});

export const getProfileSuccess = (profile: Profile): GetProfileSuccessAction => ({
  type: ProfileActionTypes.GET_PROFILE_SUCCESS,
  profile
});

export const getProfileFailure = (error: string): GetProfileFailureAction => ({
  type: ProfileActionTypes.GET_PROFILE_FAILURE,
  error
});
