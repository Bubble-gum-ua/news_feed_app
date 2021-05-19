import './NewsListComponentStyles.css';

export const NewsListComponent = (props) => {
    let news = props.news;

    return (
        <div className="newsCardWrapper">
            <img className="newsImages" src={news.image} alt="newsImg"/>
            <h3> {news.title}</h3>
            <p>
                {news.description}
            </p>
            <div className="newsFooter">
                <p>{news.date}</p>
                <p> Read more</p>
            </div>
        </div>
    )
}