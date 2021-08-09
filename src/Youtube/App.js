import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "./youtube";

function App() {
  const [video, setVideo] = useState()
  const [selectVideo, setSelectVideo] = useState();

  async function handleSearch(search) {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        key: 'AIzaSyBmYlknGqgmufKg1pwTTGoH2KmnP1MUe8s',
        q: search,
      }
    })
    if (response) {
      setVideo(response.data.items);
      setSelectVideo(response.data.items[0]);
    } else {
      return (<h5>403: User Rate Limit Exceeded </h5>)
    }
  }

  function SelectVideo(video) {
    setSelectVideo(video);
  }
  return (
    <>
      <div className='contanier-fluid w-100'>
        <div>
          <nav id='mynav' class='navbar navbar-expand-md bg-dark'>
            <a className="navbar-brand" href="https://www.youtube.com/"><i className="fab fa-youtube fa-lg"></i><span id="Youtube">Youtube</span></a>
            <button id='visible' className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
              aria-label="Toggle navigation">
              <i style={{ color: 'white' }} className="fas fa-bars"></i>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><SearchBar onFormSubmit={handleSearch} /></li>
                <li id='user' className="nav-item"><a href="https://www.linkedin.com/in/abhishek-borse-722278201/"><i className="far fa-user-circle fa-lg mt-2"></i></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <VideoDetail video={selectVideo} />
        </div>
      </div>
      <div className='container'>
        <VideoList list={video} onVideoSelect={SelectVideo} />
      </div>
    </>
  )
}
export default App;
