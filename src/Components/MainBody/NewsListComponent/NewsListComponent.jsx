import './NewsListComponentStyles.css';

export const NewsListComponent = () => {
    return (
        <div className="newsCardWrapper">
            <div> Here a dynamic news</div>
            <span>Image new</span>
            <h3>Title</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <div className="newsFooter">
                <p>Date</p>
                <button> Detail button</button>
            </div>
        </div>
    )
}