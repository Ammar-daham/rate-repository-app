// import { useState, useEffect } from 'react';
// import { GET_REPOSITORIES } from '../graphql/queries';
// import { useQuery } from '@apollo/client';

// const useRepositories = () => {
//   const [repositories, setRepositories] = useState();
//   const { data, loading } = useQuery(GET_REPOSITORIES, {
//     fetchPolicy: 'cache-and-network',
//   });

//   useEffect(() => {
//     if (data) {
//         setRepositories(data.repositories);
//       }
//   }, [data]);

//   return { repositories, loading };
// };

// export default useRepositories;

import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;
