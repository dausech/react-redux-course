import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item" key={book.title}>{book.title}</li>
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

export default connect(mapStateToProps)(BookList);
