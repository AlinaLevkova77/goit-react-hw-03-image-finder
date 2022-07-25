import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import Modal from "components/Modal/Modal";
import axios from 'axios';

axios.defaults.baseURL ='https://pixabay.com/api/';



 export default class App extends Component {
  state = {
    searchItem: '',
    items: [],
    status: 'idle',
    page: 1,
    showModal: false,
    imageModal: false,
    error: null,
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ imageModal: largeImageURL });
  };
  handleFormSubmit = searchItem => {
    this.setState({
      searchItem,
      items: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.searchItem;
    const newName = this.state.searchItem;
    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevName !== newName || prevPage !== newPage) {
      this.setState({ status: 'pending' });
      if (prevName !== newName) {
        this.setState({ page: 1 });
      }

      try {
        const response = await axios.get(
          `?q=${newName}&page=${newPage}&key=27593469-896b3f7b8b670d808c482de21&image_type=photo&orientation=horizontal&per_page=12`
        );

        const galleryList = response.data.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => {
            return { id, webformatURL, largeImageURL, tags };
          }
        );
        this.setState(prevState => ({
          items: [...prevState.items, ...galleryList],
          status: 'resolved',
        }));
        if (response.data.hits.length === 0) {
          toast.error('Something went wrong.Please try again!',
            {
              position: 'top-center',
            });
      }
  }catch (error) {
      toast.error('Something went wrong :(', { position: 'top-center' });
      this.setState({ status: 'rejected' });
    }
  }
}
   
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
   
  render() {
    const { items, status,showModal,imageModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictures={items} onClick={this.toggleModal} />
        {status === 'pending' && <Loader />}
        {(items.length === 12 || items.length > 12) && (
          <Button onClick={this.loadMore}/>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src ={imageModal} alt=''/>
          </Modal>
        )}
        
       <ToastContainer autoClose ={3000} position='top-center'/>
        
      </div>
    );
  }
};

