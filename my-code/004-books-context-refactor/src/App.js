import React from 'react';
import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
    // }, []);
    // If you listen the the ESLint warning and just add [fetchBooks] into the dependency array above, it will create an endless loop! Every time a component renders, a brand new set of variables is declared, and because of this, useEffect will be continuosly executed bc fetchBooks is technically changed. ESLint should usually be followed but the fix may break something else.
    // To fix correctly, use Hook useCallback
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
