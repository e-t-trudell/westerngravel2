import React from 'react'
import {Link} from 'react-router-dom';

// add links to each section for single page app functions
const Nav = (props) => {

    return (
        <div class="navbar fixed-top container-fluid navbar-expand-xlg navbar-dark bg-secondary vw-100 vh-30 justify-content-center flex-sm-row">
            <div class="btn-group align-items-end justify-content-around flex-fill">
                <div class="mx-1">
                    <button class="btn btn-primary btn-outline-light">Home</button>
                </div>
                <div class="dropdown-center mx-1">
                    <button class="btn btn-light btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Aggregates</a></li>
                        <li><a class="dropdown-item" href="#">Ready Mixed Concretes</a></li>
                        <li><a class="dropdown-item" href="#">Pre-Cast</a></li>
                    </ul>
                </div>
                <div class="dropdown-center mx-1">
                    <button class="btn btn-primary btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Aggregate Tonnage Calculator</a></li>
                        <li><a class="dropdown-item" href="#">Concrete Yards Calculator</a></li>
                        <li><a class="dropdown-item" href="#">Crushing</a></li>
                    </ul>
                </div>
                <div>
                    <h1 class="mx-1">Western Gravel Inc.</h1>
                    <h2 class="mx-1">970-249-2431</h2>
                </div>
                <div class="dropdown-center mx-1">
                    <button class="btn btn-light btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About Us
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Our Story</a></li>
                        <li><a class="dropdown-item" href="#">Careers</a></li>
                    </ul>
                </div>
                <div class="dropdown-center mx-1">
                    <button class="btn btn-primary btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Western Gravel Inc.</a></li>
                    </ul>
                </div>
                <div class="dropdown-center mx-1">
                    <button class="btn btn-light btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Contact Us
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Contact Form</a></li>
                        <li><a class="dropdown-item" href="#">970-249-2431</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Nav;