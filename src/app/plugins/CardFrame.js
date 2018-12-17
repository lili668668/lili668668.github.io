import compose from '../utils/compose'
import CardFrameBase from '../components/CardFrameBase'
import Card from '../components/Card'
import FrameOfCard from '../components/FrameOfCard'

export default compose({ Frame: FrameOfCard, Card })(CardFrameBase)
