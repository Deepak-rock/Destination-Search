// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onchangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchInputResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              className="search-input"
              type="search"
              onChange={this.onchangeSearchInput}
              value={searchInput}
              placeholder="Search"
            />
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="Search icon"
            />
          </div>
          <ul className="distination-list">
            {searchInputResult.map(eachDestinationItem => (
              <DestinationItem
                key={eachDestinationItem.id}
                destinationsDetails={eachDestinationItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
