import { Component } from "react";
import LoaderComponent from "./components/Loader";
import axios from "axios";
import Searchbar from "./components/Searchbar";
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import styles from './Style.module.css';
import Modal from './components/Modal';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '20453006-0e0077c0f95e4ae00473fdd9d';

class App extends Component {
  state = {
    images: [],
    bigImageUrl: '',
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  };  

  onSearch = query => {
    this.setState({
      images: [],
      searchQuery: query,
      currentPage: 1,
      error: null
    })   
  };

  onImageClick = event => {    
    this.setState({bigImageUrl: event.currentTarget.name})
  };

  onModalClose = () => {
    this.setState({ bigImageUrl: '' });
  }
  
  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    
    this.setState({isLoading: true})
  
    axios
      .get(`?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {         
        this.setState(prevState => (
          {
            images: [...prevState.images, ...response.data.hits],
            currentPage: prevState.currentPage + 1
          }
        ));
      })
      .catch(error => this.setState({error}))
      .finally(() => { this.setState({ isLoading: false }) })
  };

  render() {
    const { images, isLoading, bigImageUrl } = this.state;

    return <div className={styles.App}>
      <Searchbar onSubmit={this.onSearch}/>      
      <ImageGallery images={images} onClick={this.onImageClick} />      
      {images.length > 0 && (isLoading ? <LoaderComponent /> : <Button onClick={this.fetchImages} />)}
      {bigImageUrl.length > 0 && <Modal Url={bigImageUrl} onClose={this.onModalClose}/>}
    </div>
  }
}

export default App;