import React, { useState, useEffect } from 'react'

const DumpsterBoards = props => {

    const positionBuddy = {
        position: 'absolute',
        bottom: '0.5em',
        opacity: "0.9",
        color: 'rgb(255,255,255,1)'
    }

    const positionBuddy2 = {
        position: 'absolute',
        bottom: '3em',
        opacity: "0.9",
        color: 'rgb(255,255,255,1)'
    }

    const transparencyBuddy = {
        opacity: "0.9",
        color: 'rgb(255,255,255,1)'
    }

    const hoverEnterOption = () => {
        let hoverClass = document.querySelector('#submit')
        hoverClass.classList.add('text-danger')
        hoverClass.classList.remove('text-dark')
    }

    const hoverLeaveOption = () => {
        let hoverClass = document.querySelector('#submit')
        hoverClass.classList.remove('text-danger')
        hoverClass.classList.add('text-dark')
    }

    return (

        <div>
            <div class='row pb-2 d-flex flex-row bg-danger bg-gradient text-white'>
                <div class='col-2 display-4 text-center'>‏‏‎ ‎‏‏‎ ‎‏‏‎🗑️</div>
                <div class='col-10 display-4' >/music/</div>
            </div>
            <nav class="row d-flex flex-row mr-5 navbar bg-light bg-gradient navbar-expand-lg navbar-light">
                <a class="text-dark col-2 navbar-brand text-white text-center" href="#">‏‏‎ ‏‏‎ new post</a>
                <div class="col-10 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a id='submit' onMouseEnter={() => hoverEnterOption()} onMouseLeave={() => hoverLeaveOption()} class="text-dark nav-link" href="#">sort by:</a>
                        </li>
                        <li class="nav-item active">
                            <a class="text-dark nav-link text-white" href="#">top</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-dark nav-link text-white" href="#">new</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-dark nav-link text-white" href="#">old</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-dark nav-link text-white" href="#"></a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="search /music/" aria-label="Search" />
                        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">search</button>
                    </form>
                </div>
            </nav>
            <div class="mb-3 mr-3 ml-3 card-columns">
                <div class="card bg-dark text-white">
                    <img src="https://i.redd.it/pfpmm3bmva451.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span style={transparencyBuddy} class="h5 bg-dark bg-gradient p-1 text-rightcard-title">1391🔥</span>
                        <div class='m-2'></div>
                        <span style={transparencyBuddy} class="bg-dark bg-gradient card-text">>the lyrics are really thoughtful and deep</span>
                        <div><span class="bg-dark bg-gradient card-text"></span></div>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text"></span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://imgur.com/Wx0AGit.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span style={transparencyBuddy} class="h5 bg-dark bg-gradient p-1 card-title">560🔥</span>
                        <div class='m-2'></div>
                        <span style={transparencyBuddy} class="bg-dark bg-gradient card-text">/meme/ thread</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 3 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 3 hr ago by 2007mcchickengirl</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="http://i.imgur.com/CTffrdo.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span style={transparencyBuddy} class="h5 bg-dark bg-gradient p-1 card-title">204🔥</span>
                        <div class='m-2'></div>
                        <span style={transparencyBuddy} class="bg-dark bg-gradient card-text">/chart/ THREAD</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 20 sec ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 46 min ago by topgobbler</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://img.discogs.com/k-CCH4MI8AKfp5WWg6EIcq8a3sk=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6249801-1414768649-9844.jpeg.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span style={transparencyBuddy} class="h5 bg-dark bg-gradient p-1 card-title">112🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">what do u think</span>
                        <div style={transparencyBuddy} class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 1 hr ago by postm'lone</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://i.pinimg.com/originals/13/8d/d1/138dd19a8ed3d38cc7c717eac9681e33.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">872🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">>tfw u run out of ribbity ribbity raps</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 1 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 4 hr ago by redditeur</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://pbs.twimg.com/media/Ef9wty0UwAEitU5.png" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">27🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">RYM THREAD</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 32 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 5 hr ago by mikee</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://ih1.redbubble.net/image.1231963182.5355/mp,504x516,gloss,f8f8f8,t-pad,600x600,f8f8f8.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">1🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">Are there any good resources/courses/videos online on extreme metal (especialy black metal) mixing for complete beginners?</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 58 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 58 min ago by floridashoeshine</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://i.kym-cdn.com/entries/icons/original/000/017/520/1405099255590.png" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">1391🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">>dont hate her when she gets up to leave</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 2 hours ago by eee</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://imgur.com/Wx0AGit.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">560🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">/meme/ thread</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 3 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 3 hr ago by 2007mcchickengirl</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="http://i.imgur.com/CTffrdo.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span style={transparencyBuddy} class="h5 bg-dark bg-gradient p-1 card-title">204🔥</span>
                        <div class='m-2'></div>
                        <span style={transparencyBuddy} class="bg-dark bg-gradient card-text">/chart/ THREAD</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 20 sec ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 46 min ago by topgobbler</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://img.discogs.com/k-CCH4MI8AKfp5WWg6EIcq8a3sk=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6249801-1414768649-9844.jpeg.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span style={transparencyBuddy} class="h5 bg-dark bg-gradient p-1 card-title">112🔥</span>
                        <div class='m-2'></div>
                        <span style={transparencyBuddy} class="bg-dark bg-gradient card-text">what do u think</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 1 hr ago by postm'lone</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://i.pinimg.com/originals/13/8d/d1/138dd19a8ed3d38cc7c717eac9681e33.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span style={transparencyBuddy} class="h5 bg-dark bg-gradient p-1 card-title">872🔥</span>
                        <div class='m-2'></div>
                        <span style={transparencyBuddy} class="bg-dark bg-gradient card-text">>tfw u run out of ribbity ribbity raps</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 1 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 4 hr ago by redditeur</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://pbs.twimg.com/media/Ef9wty0UwAEitU5.png" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">27🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">RYM THREAD</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 32 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 5 hr ago by mikee</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://ih1.redbubble.net/image.1231963182.5355/mp,504x516,gloss,f8f8f8,t-pad,600x600,f8f8f8.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">1🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">Are there any good resources/courses/videos online on extreme metal (especialy black metal) mixing for complete beginners?</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 58 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 58 min ago by floridashoeshine</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://i.kym-cdn.com/entries/icons/original/000/017/520/1405099255590.png" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">1391🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">>dont hate her when she gets up to leave</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 2 hours ago by eee</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://imgur.com/Wx0AGit.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">560🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">/meme/ thread</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 3 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 3 hr ago by 2007mcchickengirl</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="http://i.imgur.com/CTffrdo.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">204🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">/chart/ THREAD</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 20 sec ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 46 min ago by topgobbler</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://img.discogs.com/k-CCH4MI8AKfp5WWg6EIcq8a3sk=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6249801-1414768649-9844.jpeg.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">112🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">what do u think</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 1 hr ago by postm'lone</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://i.pinimg.com/originals/13/8d/d1/138dd19a8ed3d38cc7c717eac9681e33.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span style={transparencyBuddy} class="h5 bg-dark bg-gradient p-1 card-title">872🔥</span>
                        <div class='m-2'></div>
                        <span style={transparencyBuddy} class="bg-dark bg-gradient card-text">>tfw u run out of ribbity ribbity raps</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 1 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 4 hr ago by redditeur</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://pbs.twimg.com/media/Ef9wty0UwAEitU5.png" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span style={transparencyBuddy} class="h5 bg-dark bg-gradient p-1 card-title">27🔥</span>
                        <div class='m-2'></div>
                        <span style={transparencyBuddy} class="bg-dark bg-gradient card-text">RYM THREAD</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 32 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 5 hr ago by mikee</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://ih1.redbubble.net/image.1231963182.5355/mp,504x516,gloss,f8f8f8,t-pad,600x600,f8f8f8.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span style={transparencyBuddy} class="h5 bg-dark bg-gradient p-1 card-title">1🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">Are there any good resources/courses/videos online on extreme metal (especialy black metal) mixing for complete beginners?</span>
                        <div style={transparencyBuddy} class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 58 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 58 min ago by floridashoeshine</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://i.kym-cdn.com/entries/icons/original/000/017/520/1405099255590.png" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">1391🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">>dont hate her when she gets up to leave</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 2 hours ago by eee</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://imgur.com/Wx0AGit.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span style={transparencyBuddy} class="h5 bg-dark bg-gradient p-1 card-title">560🔥</span>
                        <div class='m-2'></div>
                        <span style={transparencyBuddy} class="bg-dark bg-gradient card-text">/meme/ thread</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 3 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 3 hr ago by 2007mcchickengirl</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="http://i.imgur.com/CTffrdo.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">204🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">/chart/ THREAD</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 20 sec ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 46 min ago by topgobbler</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://img.discogs.com/k-CCH4MI8AKfp5WWg6EIcq8a3sk=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6249801-1414768649-9844.jpeg.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">112🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">what do u think</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 1 hr ago by postm'lone</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://i.pinimg.com/originals/13/8d/d1/138dd19a8ed3d38cc7c717eac9681e33.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">872🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">>tfw u run out of ribbity ribbity raps</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 1 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 4 hr ago by redditeur</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://pbs.twimg.com/media/Ef9wty0UwAEitU5.png" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">27🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">RYM THREAD</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 32 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 5 hr ago by mikee</span>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://ih1.redbubble.net/image.1231963182.5355/mp,504x516,gloss,f8f8f8,t-pad,600x600,f8f8f8.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <span class="h5 bg-dark bg-gradient p-1 card-title">1🔥</span>
                        <div class='m-2'></div>
                        <span class="bg-dark bg-gradient card-text">Are there any good resources/courses/videos online on extreme metal (especialy black metal) mixing for complete beginners?</span>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump 58 min ago</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 58 min ago by floridashoeshine</span>
                    </div>
                </div>
            </div>









        </div>
    );


};


export default DumpsterBoards;



/*
                <div class="card bg-dark text-white">
                    <img src="https://i.redd.it/pfpmm3bmva451.jpg" class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <div style={transparencyBuddy} class="d-flex flex-row-reverse card-title">
                            <div style={{height: '1.5em'}} class='h5 text-right col-3 '><span class='p-1 bg-dark bg-gradient'>191🔥</span></div>
                            <div class='col-1'></div>
                            <div class='col-8 p-1'><span class='bg-dark bg-gradient'>>the lyrics are really thoughtful and deep asdflkas asdlkj af w feweifj  zxvc  wef  v vjjviooy  yvn o;aihvw v ;</span></div>
                        </div>
                        <div class='m-2'></div>
                        <span style={transparencyBuddy} class="bg-dark bg-gradient card-text"></span>
                        <div><span class="bg-dark bg-gradient card-text"></span></div>
                        <div class='row m-5'></div>
                        <span style={positionBuddy2} class="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} class="bg-dark bg-gradient p-1 card-text">posted 2 hr ago by eee</span>
                    </div>
                </div>
*/





