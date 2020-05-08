import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { getUserRequest } from 'store/user/userActions';

export const MessagesPage: React.FC = () => {
  const state = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUserRequest());
  }, [dispatch]);

  return (
    <>
      {JSON.stringify(state)}
    </>
  );
};
