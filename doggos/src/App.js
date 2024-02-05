import React from 'react';
import axios from 'axios';

const fetchDogs = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`).then(res => res).catch(err => console.error('error'));
}

export default class App extends React.Component {
    constructor() {
        console.log('constructor ran');
        super();
        this.state = {
            doggos: [],
            breed: 'husky'
        }
    }

    componentDidMount() {
        console.log('component did mount')
        fetchDogs(this.state.breed).then(res => {
            this.setState({ doggos: res.data.message });
        })
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('component did update')
        console.log(prevState)
    }

    render() {
        console.log('render function ran');
        return (
            <>
                <h1>My App</h1>
                {this.state.doggos.map((dog, index) => (
                    <img width="200" src={dog} key={index} alt={dog} />))}
            </>
        )
    }
}