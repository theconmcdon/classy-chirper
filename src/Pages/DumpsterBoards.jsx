import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

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
                <div class='col-10 display-4' >boards</div>
            </div>

            <nav class="row d-flex flex-row navbar pr-5 bg-light bg-gradient navbar-expand-lg navbar-light">
                <div class="col-2 text-dark navbar-brand text-center text-white mr-0" href="#">‏‏‎‎member</div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="col-10 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="text-dark nav-link text-white" href="#">sort by:</a>
                        </li>
                        <li class="nav-item">
                            <a id='submit' onMouseEnter={() => hoverEnterOption()} onMouseLeave={() => hoverLeaveOption()} class="text-dark nav-link" href="#">most visited</a>
                        </li>
                        <li class="nav-item active">
                            <a class="text-dark nav-link text-white" href="#">abc</a>
                        </li>
                        <li class="nav-item active">
                            <a class="text-dark nav-link text-white" href="#">new</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-dark nav-link text-white" href="#">old</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="search /boards/" aria-label="Search" />
                        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">search</button>
                    </form>
                </div>
            </nav>
            <div class='row'>
                <div class='col-2 border-right'>
                    <div class="ml-2 mt-2 card">
                        <ul class="list-group list-group-flush">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'boards/music'}><li class="list-group-item pl-2">/music/</li></Link>
                            <li class="list-group-item pl-2">/cooking/</li>
                            <li class="list-group-item pl-2">/homebrewing/</li>
                            <li class="list-group-item pl-2">/wine/</li>
                            <li class="list-group-item pl-2">/leftpolitics/</li>
                            <li class="list-group-item pl-2">/halo/</li>
                            <li class="list-group-item pl-2">/hiking/</li>
                            <li class="list-group-item pl-2">/ufos/</li>
                            <li class="list-group-item pl-2">/wallstreet/</li>
        
                        </ul>
                    </div>
                </div>
                <div class='col-10'>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'boards/music'}>
                    <div class="mt-2 mb-2 mr-4 ml-1 card">
                        <div style={{height: '2.5em', fontSize: '2em' }} class='card-header lead text-white bg-danger'>/music/</div>
                        <div class="card-body border-top">
                            <h5 class="card-title lead" style={{ fontSize: '1.25em' }}>we listen to music not opinions</h5>
                            <p class="card-text"></p>
                            <p class="card-text"><small class="text-muted">2,347 bumps this hour</small></p>
                        </div>
                    </div>
                    </Link>
                    <div class="mt-2 mb-2 mr-4 ml-1 card">
                        <div style={{height: '2.5em', fontSize: '2em' }} class='card-header lead text-white bg-danger'>/cooking/</div>
                        <div class="card-body border-top">
                            <h5 class="card-title lead" style={{ fontSize: '1.25em' }}>fresh hot posts</h5>
                            <p class="card-text"></p>
                            <p class="card-text"><small class="text-muted">961 bumps this hour</small></p>
                        </div>
                    </div>


                    <div class="mt-2 mb-2 mr-4 ml-1 card">
                        <img class="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div class="card-body border-top">
                            <h5 class="card-title lead" style={{ fontSize: '2em' }}>/homebrewing/</h5>
                            <p class="card-text">none of the rest of these work</p>
                            <p class="card-text"><small class="text-muted">last post 3 min ago</small></p>
                        </div>
                    </div>

                    <div class="mt-2 mb-2 mr-4 ml-1 card">
                        <img class="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div class="card-body border-top">
                            <h5 class="card-title lead" style={{ fontSize: '2em' }}>/wine/</h5>
                            <p class="card-text">none of the rest of these work</p>
                            <p class="card-text"><small class="text-muted">last post 1 min ago</small></p>
                        </div>
                    </div>

                    <div class="mt-2 mb-2 mr-4 ml-1 card">
                        <img class="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div class="card-body border-top">
                            <h5 class="card-title lead" style={{ fontSize: '2em' }}>/leftpolitics/</h5>
                            <p class="card-text">none of the rest of these work</p>
                            <p class="card-text"><small class="text-muted">last post 4 min ago</small></p>
                        </div>
                    </div>

                    <div class="mt-2 mb-2 mr-4 ml-1 card">
                        <img class="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div class="card-body border-top">
                            <h5 class="card-title lead" style={{ fontSize: '2em' }}>/halo/</h5>
                            <p class="card-text">none of the rest of these work</p>
                            <p class="card-text"><small class="text-muted">last post 5 min ago</small></p>
                        </div>
                    </div>

                    <div class="mt-2 mb-2 mr-4 ml-1 card">
                        <img class="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div class="card-body border-top">
                            <h5 class="card-title lead" style={{ fontSize: '2em' }}>/hiking/</h5>
                            <p class="card-text">none of the rest of these work</p>
                            <p class="card-text"><small class="text-muted">last post 40 sec ago</small></p>
                        </div>
                    </div>

                    <div class="mt-2 mb-2 mr-4 ml-1 card">
                        <img class="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div class="card-body border-top">
                            <h5 class="card-title lead" style={{ fontSize: '2em' }}>/ufos/</h5>
                            <p class="card-text">none of the rest of these work</p>
                            <p class="card-text"><small class="text-muted">last post 7 min ago</small></p>
                        </div>
                    </div>

                    <div class="mt-2 mb-2 mr-4 ml-1 card">
                        <img class="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div class="card-body border-top">
                            <h5 class="card-title lead" style={{ fontSize: '2em' }}>/wallstreet/</h5>
                            <p class="card-text">none of the rest of these work</p>
                            <p class="card-text"><small class="text-muted">last post just now</small></p>
                        </div>
                    </div>


                </div>
            </div>











        </div>
    );


};


export default DumpsterBoards;






