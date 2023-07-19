import { View } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { useParams } from 'react-router-native'

import useRepository from '../hooks/useRepository'

const SingleRepository = () => {
  const { id } = useParams()
  const { repository } = useRepository({ id })

  return (
    <View>
      {repository && <RepositoryItem item={repository} isUrl={true} />}
    </View>
  )
}

export default SingleRepository
