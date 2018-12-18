import compose from '../utils/compose'
import CardFrameBase from '../components/CardFrameBase'
import Card from '../components/Card'
import FrameOfCard from '../components/FrameOfCard'
import BaseAppBar from '../components/BaseAppBar'

export default compose({ Frame: FrameOfCard, Card, AppBar: BaseAppBar })(CardFrameBase)
