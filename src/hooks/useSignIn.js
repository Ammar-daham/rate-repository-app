// hooks/useSignIn.js
import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage'

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const authStorage = new AuthStorage();


  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    await mutate({ variables: { credentials } });
    const { accessToken } = result.data.authenticate;
    authStorage.setAccessToken(accessToken);
  };

  return [signIn, result];
};

export default useSignIn;