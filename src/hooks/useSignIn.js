import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import { useAuthStorage } from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';



const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();



  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    const payload = await mutate({ variables: { credentials } });

    if(payload.data?.authenticate) {
      await authStorage.setAccessToken(payload.data.authenticate.accessToken);
      apolloClient.resetStore();
    }

    return payload
  };

  return [signIn, result];
};

export default useSignIn;
