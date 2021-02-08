import './menu-items.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, linkUrl, imageUrl, size, history, match, refUrl}) => {
    const handleClick = () => {
        history.push(`${match.url}${title}`)
        console.log(match.url)
    }
    return (
        <div 
            className={`${ size } menu-item`}
            onClick={handleClick}
        >
            <div 
                className="menu-item-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
                > 
            </div>
            <div className="content">
                <h1 className="title">{ title.toUpperCase() }</h1>
                <span className="subtitle">{ linkUrl }</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)