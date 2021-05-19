import './MainNewsComponent.css'

export const MainNewsComponent = () => {
    return (
        <div className="mainNewsWrapper">
            <div className="descriptionWrapper">
                <h3>Title</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <div className="mainNewsFooter">
                    <p>Date</p>
                    <button> Detail button</button>
                </div>
            </div>
            <div>
                <h2>Here image</h2>
            </div>
        </div>
    )
}