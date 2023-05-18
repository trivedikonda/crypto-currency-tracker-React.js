// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = cryptoDetails
  return (
    <li className="each-currency">
      <div className="img-and-name">
        <img
          className="currency-img"
          width={20}
          height={20}
          src={currencyLogo}
          alt={currencyName}
          data-testid={`${id}`}
        />
        <p className="item-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
