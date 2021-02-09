import Collections from '../../apis/sections/collections'
import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection.preview'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: Collections
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className='shop-wrapper'>
                {
                    collections.map(({ id, ...otherProps }) => {
                        return <CollectionPreview key={id} { ...otherProps }/>
                    })
                }
            </div>

        )
    }
}

export default ShopPage