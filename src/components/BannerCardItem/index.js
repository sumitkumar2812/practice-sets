// Write your code here.
import './index.css'

const BannerCard = props => {
  const {bannerCardsList} = props
  const {className, headerText, description, id} = bannerCardsList
  console.log(id)
  return (
    <div className={className}>
      <h1 className="main-heading">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="button" type="button">
        Show more
      </button>
    </div>
  )
}
export default BannerCard
