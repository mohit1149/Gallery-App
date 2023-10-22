// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImage, updateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage
  const changeImage = () => {
    updateImage(id)
  }
  const inActiveClassName = isActive ? 'image-blur' : ''
  return (
    <li key={id} className="list-item">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={inActiveClassName}
          onClick={changeImage}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
