import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import './styles.css';
import { useDataContext } from '../../../../context/DataContext';

const If = ({ test, children }) => {
  if (test) return <>{children}</>;
  return null;
}

const SearchBar = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  const { setSearchResults, searchQuery, setSearchQuery } = useDataContext();

  const handleSearch = async (query) => {
    console.log(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            query: query,
          },
        }
      );

      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
    handleSearch(inputValue); // Call the debounced function
  };

  const handleClearClick = () => {
    setSearchQuery('');
    clearSearch();
  };

  return (
    <div className="search-bar">
      <div className="search-icon">
        <FaSearch />
      </div>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <If test = {searchQuery}> {<button className="clear-search" onClick={handleClearClick}>
          <FaTimes />
        </button>} 
      </If>
    </div>
  );
};

export default SearchBar;
