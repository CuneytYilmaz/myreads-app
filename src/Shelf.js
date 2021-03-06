import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component {
	render(){
      	const { books,shelf,onUpdateBook } = this.props;
      	return(
          <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf === 'currentlyReading' ? 'Currently Reading':
          				shelf === 'wantToRead' ? 'Want To Read' : shelf === 'read' ? 'Read' : ''}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
					  {books.filter(f => f.shelf === shelf).map(book => {
                      	return( <Book book={book} key={book.id} onUpdateBook={onUpdateBook} /> );
                      })}
                    </ol>
                  </div>
          </div>
        );
    }
}

Shelf.propTypes = {
	shelf: PropTypes.string.isRequired,
  	books: PropTypes.array.isRequired,
  	onUpdateBook: PropTypes.func.isRequired,
}

export default Shelf;