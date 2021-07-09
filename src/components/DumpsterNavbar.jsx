import React from 'react'
import { NavLink } from 'react-router-dom'



const DumpsterNavbar = () => {

    

    return (

        <nav class="sticky-top row d-flex flex-row navbar bg-danger bg-gradient navbar-expand-lg navbar-light">
            <a class="col-2 navbar-brand text-white text-center" data-toggle="tooltip" data-placement="bottom" title='secret back-to-top button' href="#">‏‏‎‎dumpster</a>
            
            <div class="col-10 p-0 collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav justify-content-left mr-auto">
                    <li class="mr-2 nav-item">
                        <NavLink to='/' exact activeClassName="active" className='link'><a class="nav-link text-white" href="#">timeline</a></NavLink>
                    </li>
                    <li class="ml-2 mr-2 nav-item active">
                        <NavLink to='/boards' className='link' activeClassName="active"><a class="nav-link text-white" href="#">boards</a></NavLink>
                    </li>
                    <li class="ml-2 mr-2 nav-item">
                        <NavLink to='/messages' className='link' activeClassName="active"><a class="nav-link text-white" href="#">messages</a></NavLink>
                    </li>
                    <li class="ml-2 mr-2 nav-item">
                        <NavLink to='/saved' className='link' activeClassName="active"><a class="nav-link text-white" href="#">saved</a></NavLink>
                    </li>
                    <li class="ml-2 mr-2 nav-item">
                        <NavLink to='/notifications' className='link' activeClassName="active"><a class="nav-link text-white" href="#">notifications</a></NavLink>
                    </li>
                    <li class="ml-2 nav-item">
                        <NavLink to='/' className='link' activeClassName="active"><a class="nav-link text-white" href="#">log out</a></NavLink>
                    </li>
                </ul>
                <form class="form-inline my-2 mr-5 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="search /dumpster/" aria-label="search" />
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
};

export default DumpsterNavbar;