import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Название, производитель, штрих-код или дейст. вещество"
    />
  );
};

export default Search;
