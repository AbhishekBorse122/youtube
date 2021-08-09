import React from "react";
import VideoItem from "./VideoItem";

function VideoList(props) {

    const data = props.list;
    console.log(props.list);
    console.log(data);
    function Array(ele, id) {
        return (<VideoItem key={id} video={ele} onSelect={props.onVideoSelect} />)
    }
    return (
        <div id='List' className='row'>
            {data ? data.map(Array) : null}
        </div>//
    )
}
export default VideoList;

