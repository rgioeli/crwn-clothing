import './custom-button.styles.scss'

const CustomButton = ({ children, color, ...otherProps }) => {
    return(<button style={ color ? { backgroundColor: color.bc, color: color.c } : null } className='custom-button' {...otherProps}>
        {children}
        {
            console.log(otherProps)
        }
    </button>)
}

export default CustomButton