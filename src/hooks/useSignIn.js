// hooks/useSignIn.js
import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    await mutate({ variables: { credentials } });
    console.log(result.data.authenticate.accessToken)
  };

  return [signIn, result];
};

export default useSignIn;