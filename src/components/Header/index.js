import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import SearchBar from './Partials/SearchBar';
import './styles.css';
import { useDataContext } from '../../context/DataContext';

const Header = ({ isDetailsPage}) => {
    const { setSearchResults, setSearchQuery} = useDataContext();

    const handleHomeButton = () => {
        setSearchResults([]);
        setSearchQuery('');
    }
    return (
        <div className="header">
        <div className="navigation-box">
            {isDetailsPage ? (
            <h2>Movie Details</h2>
            ) : (
            <SearchBar/>
            )}
        </div>
        <Link to="/" className="home-icon" onClick={handleHomeButton}>
            <FaHome />
        </Link>
        </div>
    );
};

export default Header;
