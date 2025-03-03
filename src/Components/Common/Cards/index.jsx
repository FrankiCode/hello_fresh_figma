
const Cards = ({id, image, title, description, className}) => {

  return (
        <div className={`inner-card ${className}`} key={id} >        
            <div className="cards-Image">
              <img src={image} alt="" />
            </div>
              <h4>{title}</h4>
              <p>{description}</p>
        </div>
        )
}

export default Cards