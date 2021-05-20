import './MainNewsComponent.css'


export const MainNewsComponent = (props) => {
    let news = props?.news[0]


    return (
        <div className="mainNewsWrapper">
            <div className="descriptionWrapper">
                <h3>{news.title}</h3>
                <p>
                    {news.description}
                </p>
                <div className="mainNewsFooter">
                    <p>{news.date}</p>
                    <p> Read more</p>
                </div>
            </div>
            <div >
                <img className="mainNewsImage" src={news.image} alt="mainNewsCard"/>
            </div>
        </div>
    )

}