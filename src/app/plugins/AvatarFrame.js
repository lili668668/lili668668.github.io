import compose from '../utils/compose'
import AvatarFrameBase from '../components/AvatarFrameBase'
import Avatar from '@material-ui/core/Avatar'
import CenterFrame from '../components/CenterFrame'

export default compose({ Frame: CenterFrame, Avatar })(AvatarFrameBase)
