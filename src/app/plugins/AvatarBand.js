import compose from '../utils/compose'
import AvatarBandBase from '../templates/AvatarBandBase'
import Avatar from '@material-ui/core/Avatar'
import CenterFrame from '../components/CenterFrame'

export default compose({ Frame: CenterFrame, Avatar })(AvatarBandBase)
