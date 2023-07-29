import { GET_CURRENT_USER } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useCurrentUser = (variables) =>{
  const { loading, data, ...result } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables,
  });
  
  return {
    currentUser: data ? data?.me : undefined,
    loading,
    ...result,
  };
};

export default useCurrentUser;