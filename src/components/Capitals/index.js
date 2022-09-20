import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    para: countryAndCapitalsList[0].country,
  }

  changeIt = e => {
    const id = e.target.value
    const latestList = countryAndCapitalsList.filter(
      eachValue => eachValue.id === id,
    )
    const {country} = latestList[0]
    this.setState({para: country})
  }

  render() {
    const {para} = this.state
    return (
      <div className="main-container">
        <div className="inner-holder">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="drop-holder">
            <select className="select-holder" onChange={this.changeIt}>
              {countryAndCapitalsList.map(eachObject => (
                <option key={eachObject.id} value={eachObject.id}>
                  {eachObject.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="result">{para}</p>
        </div>
      </div>
    )
  }
}
export default Capitals

