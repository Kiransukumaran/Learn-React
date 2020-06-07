import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = {images: []}

    onSearchSubmit = term => {
        console.log(term)
        unsplash.get('/search/photos', {
            params: {
                query: term
            },   
        }).then(response => {
            this.setState({images: response.data.results});
        })
    }

    render() {
        return(
            <div className="ui container searchbar" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length}
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;