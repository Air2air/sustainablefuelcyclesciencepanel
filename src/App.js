import NavBar from './components/NavBar'
// import sustainableCharacter from './components/sustainableCharacter'
// import ReadingWindow from './components/ReadingWindow'
import Banner from './components/Banner'
import './scss/styles.scss'

const App = () => (
  <>
    <div className="outer-container">
      <NavBar />
      <Banner />
      <div className="content-container">content</div>
    </div>
  </>
)
export default App
