import React, { Component } from 'react';
import apiKey from './config';
import Photo from './Photo';
import NotFound from './NotFound';

class Gallery extends Component {
    constructor() {
        
        super();

        // setting state to default, as an empty photo array

        this.state = {
            photos: [],
            isLoading: true
        };
    }

    fetchPhotos = (query) => {

      // showing deafult state while images are loading

        this.setState({ photos: [], isLoading: true });

        // url for Flickr containing JSON info.. with Api key, showing 24 items per page

        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`
           
// fetching JSON info from URL
        
        fetch(url)
            .then(response => response.json())
            .then(responseData => {
                this.setState({ photos: responseData.photos.photo, isLoading: false });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    //construct the photo URL for this particular JSON photo item: use the flickr format, display using the Photo Component


    mapPhotoComponentsWithJson = (photo, i) => {
        let url = '';

        url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        return <Photo src={url} key={i} />;
    }


    //  run fetchPhotos to get the photos for 'type' params when the gallery mounts
 


    componentDidMount() {
        this.fetchPhotos(this.props.match.params.searchName);
    }

    // fetching new photos if the key changes

    componentDidUpdate(prevProps) {
        if (this.props.location.key !== prevProps.location.key) {
            this.fetchPhotos(this.props.match.params.searchName);
        }
    }

    render() {
        let images = [];
        let content = '';

    
        // if there are photos in the array, display them

        if (this.state.photos.length > 0) {
            images = this.state.photos.map(this.mapPhotoComponentsWithJson);
        }
        // if there are no photos in the array, and the isLoading is false, then load the NotFound component
        else if (!this.state.isLoading) {
            images = <NotFound />;
        }
            
        // otherwise, show "loading"
            
        else {
            images = <p>Loading...</p>
        }
        // return the photo-container with the content and images 
        return  <div className="photo-container"><h2>{content}</h2><ul>{images}</ul></div>;
    }
}

export default Gallery;