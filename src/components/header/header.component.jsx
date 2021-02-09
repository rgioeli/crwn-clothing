import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg'
import './header.styles.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo-container">
                <Link to="/">
                    <Logo className='logo' />
                </Link>
            </div>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/contact'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header