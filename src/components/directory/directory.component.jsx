import Sections from '../../apis/sections/sections.api'
import React from 'react'
import '../directory/directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: []
        }
    }

    componentDidMount() {
        this.setState({ sections: Sections })
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...sectionProps }) => {
                        return <MenuItem 
                                key={ id }
                                { ...sectionProps }
                            />

                    })
                }
            </div>
        )
    }
}

export default Directory