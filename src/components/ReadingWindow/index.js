
import ReadingWindowItem from '../ReadingWindowItem'
import './index.scss'

const ReadingWindow = () => (
  <motion.div
    initial={{opacity: 0, translateY: 300}}
    animate={{opacity: 1, translateY: 1}}
    transition={{
      type: 'spring',
      bounce: 0.4,
      delay: 0.5,
      duration: 0.9,
    }}
    className="reading-wrapper"
  >
    <ReadingWindowItem />
  </motion.div>
)

export default ReadingWindow
