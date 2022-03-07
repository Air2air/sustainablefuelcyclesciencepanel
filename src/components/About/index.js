import Parser from 'html-react-parser'
import members from '../../data/members.json'
import './index.scss'

const About = () => (
  <div className="container">
    <div className="d-flex flex-row justify-content-between align-items-center page-title fade-in two">
      <span>About</span>
    </div>
    <div className="d-flex flex-column fade-in one" />

    {members.map(member => (
      <div key={member.id} className="result-panel members">
        <div className="row">
          <div className="col-12 d-flex flex-column text-section">
            <h1>
              {member.memberFirst} {member.memberLast}
            </h1>
            <h2>{member.memberOrg}</h2>
            <div className="text">{Parser(member.memberBio)}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default About
