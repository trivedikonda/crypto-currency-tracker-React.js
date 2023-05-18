// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptocurrenciesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrenciesList()
  }

  getCryptocurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    console.log(updatedData)
    this.setState({cryptocurrenciesList: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrenciesList} = this.state
    const {isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="currency-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
        />

        <div className="list-container">
          <div className="headings-list">
            <h1 className="heading">Coin Type</h1>
            <div className="euro-and-usd">
              <p>USD</p>
              <p>EURO</p>
            </div>
          </div>
          <ul>
            {cryptocurrenciesList.map(eachItem => (
              <CryptocurrencyItem cryptoDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
