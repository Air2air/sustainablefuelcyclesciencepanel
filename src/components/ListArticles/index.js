import {useState} from 'react'

import './index.scss'

const mockData = [
  {
    id: 0,
    description:
      'This homepage layout is proposed to join other test cohorts from the team.  In this scenario sustainable does her intro and the lesson is fully simulated below.  Click to continue.',
    ListArticles:
      'Duck is stuck in the muck.  A pup can tug on the duck. But duck is stuck. A cub can tug on Duck.',
    button1Text: '',
    button2Text: 'Continue',
  },
  {
    id: 1,
    description:
      'The visitor is free to enjoy sustainable immediately, and understands what it is and does.  The barrier of having to read marketing copy or register first is removed.  Existing marketing sections remain below. Click to continue.',
    ListArticles: 'Continued Lesson ListArticles',
    button1Text: 'Try again',
    button2Text: 'Continue',
  },

  {
    id: 2,
    description:
      'Optionally we can interleave marketing ListArticles in this section, alternating with lessons that solve visitor concerns and unknowns before making their decision to buy.  The leaderboard is retained at right to prove that sustainable is active and popular. Click to continue.',
    ListArticles: 'Scoring, Testimonials, etc.',
    button1Text: 'Start Over',
    button2Text: 'Continue',
  },

  {
    id: 3,
    description:
      'Based on experience at past companies, leading with product instead of marketing makes a night and day difference in user conversions. This test layout would later be built mobile-responsive but still allows desktop visitors to enjoy the working demo.  Click to continue.',
    ListArticles: 'Tutorial results',
    button1Text: 'Start Over',
    button2Text: 'Continue',
  },

  {
    id: 4,
    description:
      "This concept is my reaction as a first-time visitor to the website, where it's not immediately clear specifically what sustainable is and does.  The simple elegance of how the tutorials work is what I'd need to see before registering.",
    ListArticles: 'Another Tutorial example',
    button1Text: 'Start Over',
    button2Text: "That's it!",
  },
]

const ListArticles = () => {
  const [sliceOne, setSliceOne] = useState(0)
  const [sliceTwo, setSliceTwo] = useState(1)

  const handleStartOver = () => {
    setSliceOne(0)
    setSliceTwo(1)
  }

  const handleNext = () => {
    if (sliceTwo < mockData.length) {
      setSliceOne(sliceOne + 1)
      setSliceTwo(sliceTwo + 1)
    } else {
      handleStartOver()
    }
  }

  return mockData.slice(sliceOne, sliceTwo).map(item => (
    <div key={item.id} className="reading-screen">
      {/* <div className="description-section">{item.description}</div> */}

      {item.ListArticles}

      {item.button1Text.length > 0 && (
        <button
          type="button"
          className="button back"
          onClick={() => {
            handleStartOver()
          }}
        >
          {item.button1Text}
        </button>
      )}
      <button
        type="button"
        className="button"
        onClick={() => {
          handleNext()
        }}
      >
        {item.button2Text}
      </button>
    </div>
  ))
}

export default ListArticles
