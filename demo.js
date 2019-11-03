const addBookMutation = gql`

    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;


  submitForm(e){
        e.preventDefault();
		
        // use the addBookMutation
        this.props.addBookMutation({
            
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            }
        });
    }
	
///	Rect remaining code of Add Book Component ///
	
export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);














const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save();
            }
        }
    }
});





const addBookMutation = gql`
    mutation {

        addBook(name: "", genre: "", authorId: ""){
            name
            id
        }
    }
`;

 submitForm(e){
    e.preventDefault()

    this.props.addBookMutation(); // adds a book, but with no values
}


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save();
            }
        }
    }
});















import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

const query1 = gql``;

const query2 = gql``;

class component_name extends Component {

    render(){
        console.log(this.props);
        return(
            <div>
			<h1> books and authors record </h1>
            </div>
        );
    }
}

export default compose(
    graphql(query1, { name: "name_to_access_query1" }),
    graphql(query2, { name: "name_to_access_query2" })
)(component_name);


export default graphql(query1,query2)(component_name);


















class BookList extends Component {
    
    displayBooks(){
        var data = this.props.data;
        
        if(data.loading){
            return( <div>Loading books...</div> );
        } 
        else {
            return data.books.map(book => {
                return(
                    <li key={ book.id }>{ book.name }</li>
                );
            })
        }
    }
    render(){
        return(
            <div>
            <h1> Ninjas Reading List </h1>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);





import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

class BookList extends Component {

    render(){
        console.log(this.props);
        return(
            <div>
			<h1> books record </h1>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);







import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
        
        <ApolloProvider client={client}>
        
            <div >
                <Component1 />
                <Component2 />
            </div>
        
        </ApolloProvider>
    );
  }
}

export default App;
