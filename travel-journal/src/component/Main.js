import React from 'react'

export default function Main(props) {
    return (
        <main className="main">
            <article className="main__article">
                <img src={`../images/${props.imgName }`} alt="Mount Fuji" />
                <section className="main__detail-section">
                    <img src="../images/pin-icon.png" alt="Mount Fuji" />
                    <span className="main__location">
                        {props.location}
                    </span>
                    <span className="main__map-link">
                        <a href = {props.googleMapsUrl}> View on Google Maps </a>
                    </span>
                    <h2 className="main__title">
                        {props.title}
                    </h2>
                    <p className="main__date">
                        {props.startDate} - {props.endDate}
                    </p>
                    <p className="main__details">
                        {props.description}
                    </p>
                </section>
            </article>

        </main>
        )
}