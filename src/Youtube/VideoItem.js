import React from "react";

function VideoItem(props) {
    return (
        <>
            <div id='item' className="card col-xxl-2 col-sm-4 col-md-6 col-xs-12" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => { props.onSelect(props.video) }}>
                <img src={props.video.snippet.thumbnails.medium.url} alt="thumbnail" className='mt-3 mr-3' style={{ border: '1px solid white', borderRadius: '10px' }} />
                <div className="card-body" style={{ display: 'flex', alignItems: 'center' }} >
                    <h6 className='baloo'>{props.video.snippet.title}</h6>
                </div>
            </div>
        </>
    )
}
export default VideoItem;

