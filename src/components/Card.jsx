import React from "react"

const Card = ({ image, title, author, date, articleLink, authorLink }) => {
  return (
    <div className="col-4 col-medium-3 p-card--highlighted u-justify--space-evenly--col">
      <div>
        <h5 className=" p-muted-heading">CLOUD AND SERVER</h5>
        <hr className="u-sv1" />
      </div>
      <img className="p-card__image" src={image} alt={title} />
      <div className="p-card__content ">
        <h3 className="p-heading--3 u-sv1">
          <a href={articleLink} className="p-link--soft">
            {title}
          </a>
        </h3>
      </div>
      <footer className="p-card__footer u-align--bottom">
        <p className="p-heading--6">
          By <a href={authorLink}>{author}</a> on {date}
        </p>
        <hr className="u-sv3" />
        <p>Article</p>
      </footer>
    </div>
  )
}

export default Card
