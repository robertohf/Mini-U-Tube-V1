import React from 'react'
import { ListItem } from '@material-ui/core';

function VideoListItem(props) {
    const video = props.video;
    const onUserSelected = props.onUserSelected
    const imgUrl = video.snippet.thumbnails.default.url

    return (
        <ListItem onClick={ () => onUserSelected(video) } className="list-group-items" style={{textAlign: 'center'}}>
            <div className="video-list media">
                <div className="media-left" style={{textAlign: 'center'}}>
                    <img className="media-object" src={ imgUrl } alt={ video.snippet.title } width="140px" height="100px"/>
                </div>
                <div className="media-body" style={{textAlign: 'center'}}>
                    <div className="media-heading"><h4>{ video.snippet.title }</h4></div>
                </div>
            </div>
        </ListItem>
    )
}

export default VideoListItem
