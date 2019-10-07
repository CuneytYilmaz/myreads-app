import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  	onShelfChange = (event)  => {
      	const {value} = event.target;
      	event.preventDefault();
    	this.props.onUpdateBook(this.props.book, value);
    }
  
	render(){
      	const { book } = this.props;
    	return (
          <li key={book.id}>
              <div className="book">
                  <div className="book-top">
                      <div className="book-cover" 
                          style={{ 
                              width: 128, 
                              height: 193, 
                              backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}></div>
                          <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={this.onShelfChange}>
                                  <option value="move" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                              </select>
                          </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors ? 
                          book.authors.map((author,i) => (
                              book.authors.length === i + 1 ? author : author + ', '
                          )) : ''}</div>
              </div>
         </li>
    	);
    }
} 

Book.propTypes = {
	book: PropTypes.object.isRequired,
	onUpdateBook: PropTypes.func.isRequired,
}

export default Book;