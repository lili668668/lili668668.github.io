import compose from '../utils/compose'
import CardFrameBase from '../templates/CardFrameBase'
import Card from '../components/Card'
import FrameOfCard from '../components/FrameOfCard'
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'

export default compose({ Frame: FrameOfCard, Card, AppBar, Footer })(CardFrameBase)
