import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <Link to='/'>List</Link>
      <Link to='/new'>Add new</Link>
    </header>
  );
}

export default Header;
