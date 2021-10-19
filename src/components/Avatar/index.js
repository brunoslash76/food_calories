import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper } from './styles'

const Avatar = ({ user, size }) => {
  return (
    <Wrapper size={size}>
      <FontAwesomeIcon icon="fa-solid fa-user" />
    </Wrapper>
  )
}

Avatar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
  }),
  size: PropTypes.oneOf(['small', 'normal', 'large'])
}

Avatar.defaultProps = {
  size: 'normal'
}

export default Avatar
