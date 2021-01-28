// This file contains the code needed to create a small, working React app (building from the ground up)

import React from 'react';
import ReactDOM from 'react-dom';

import { MainView } from './components/main-view/main-view';
import { MovieCard } from './components/movie-card/movie-card';

// Import statement to indicate that we need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
    render() {
        return <MainView />;
    }
}

// Finds the root of app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);