import React from 'react'

import HomeIcon from './ImgSvg/Home.svg'
import ListingsIcon from './ImgSvg/Listings.svg'
import PodcastsIcon from './ImgSvg/Podcasts.svg'
import VideoIcon from './ImgSvg/Video.svg'
import TagsIcon from './ImgSvg/Tags.svg'
import FaqIcon from './ImgSvg/Faq.svg'
import ForemShopIcon from './ImgSvg/ForemShop.svg'
import SponsorsIcon from './ImgSvg/Sponsors.svg'
import AboutIcon from './ImgSvg/About.svg'
import ContactIcon from './ImgSvg/Contact.svg'
import GuidesIcon from './ImgSvg/Guides.svg'


import MenuItem from './MenuItem'

class MenuList extends React.Component{
    render(){
        return(
                <ul className='list-group list-group-flush'>
                    <MenuItem 
                        icon={HomeIcon}
                        text="Home"/>
                    <MenuItem 
                        icon={ListingsIcon}
                        text="List"/>
                    <MenuItem 
                        icon={PodcastsIcon}
                        text="Podcast"/>
                    <MenuItem 
                        icon={VideoIcon}
                        text="Video"/>
                    <MenuItem 
                        icon={TagsIcon}
                        text="Tags"/>
                    <MenuItem 
                        icon={FaqIcon}
                        text="FAQ"/>
                    <MenuItem 
                        icon={ForemShopIcon}
                        text="Forem Shop"/>
                    <MenuItem 
                        icon={SponsorsIcon}
                        text="Sponsors"/>
                    <MenuItem 
                        icon={AboutIcon}
                        text="About"/>
                    <MenuItem 
                        icon={ContactIcon}
                        text="Contact"/>
                    <MenuItem 
                        icon={GuidesIcon}
                        text="Guides"/>
                        

                </ul>
        )
    }
}

export default MenuList