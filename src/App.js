import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import ListDocuments from './components/ListDocuments'
import Contact from './components/Contact'
import About from './components/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/styles.scss'

const App = () => (
  <>
    <Router>
      <NavBar />
      <Banner />
      <Routes>
        <Route exact path="/" element={<ListDocuments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </>
)
export default App
