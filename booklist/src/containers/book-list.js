import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    className="list-group-item"
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

}

// o que quer que essa funcao retorne será colocado dentro da classe BookList como props
// atraves da funcao connect do react-redux que é a responsavel por fazer a ligacao entre os componentes
// do React e o estado gerenciado pelo Redux
const mapStateToProps = (state) => {
    return {
        books: state.books
    };
}

// Anything returned by this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
    // whenever selectBook is called, the result should be passed to All of our Reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList as a container - it needs to know about this new dispatch method - selectBook.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
