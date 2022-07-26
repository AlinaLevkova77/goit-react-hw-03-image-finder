import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { SearchForm,SearchbarHeader,SearchButton,SearchFormSpan,SearchFormInput} from 'components/Searchbar/Searchbar.styled.js';

 export default class Searchbar extends Component {
    state = {
        searchItem: '',
    };

    handleSearchInput = e => {
        this.setState({searchItem: e.currentTarget.value.toLowerCase()});
    };

    handleFormSubmit = e => {
        e.preventDefault();

        if (this.state.searchItem.trim() === '') {
            toast.error('Oops, enter the name of the image!');
            return;
        }
        this.setState({ searchItem: '' });
        this.props.onSubmit(this.state.searchItem);
    };

    render() {
        return (
            <SearchbarHeader>
                <SearchForm onSubmit ={this.handleFormSubmit}>
                    <SearchButton type="submit">
                        <FcSearch />
                            <SearchFormSpan></SearchFormSpan>
                           
                    </SearchButton>

                    <SearchFormInput
                        type="text"
                        autoComplete='off'
                        onChange={this.handleSearchInput}
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    </SearchForm>
            </SearchbarHeader>
        );
    }
}

Searchbar.protoTypes = {
    onSearch: PropTypes.func.isRequired,
};

