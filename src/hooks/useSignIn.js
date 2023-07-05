// hooks/useSignIn.js
import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import { useAuthStorage } from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';



const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();



  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    const data = await mutate({ variables: { credentials } });
    console.log(data.data.authenticate.accessToken)
    await authStorage.setAccessToken(data.data.authenticate.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;