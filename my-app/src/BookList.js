import React from "react";
import Book from "./Book";
import "./BookList.css";
import { BookContext } from "./contexts/BookContext";
import { ThemeContext } from "./contexts/ThemeContext";

export default class BookList extends React.Component {
    
  render() {
    const handleChange = () =>{
        this.setState({isDarkTheme:false})
    }
    return (
        
      <ThemeContext.Consumer>
          
        {(contextTheme) => (
          <BookContext.Consumer>
             {(ContextBook) => {
                 const {books} =ContextBook
              const {isDarkTheme, dark,light} = contextTheme;
              const theme = isDarkTheme ? dark : light;
            
              return (
                  
                <section className="page-section" style={{background: theme.bg, color:theme.txt}} id="portfolio">
                  <div className="container">
                  <button onClick={() => handleChange}>BAS</button>
                    <div className="text-center">
                      <h2 className="section-heading text-uppercase">
                        BookFolio
                      </h2>
                      <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </h3>
                      <button
                        type="button"
                        className="btn btn-sm btn-info"
                        style={{ marginTop: "-70px" }}
                      >
                        Change Theme
                      </button>
                    </div>
                    <div className="row">
                      {books.map((book, i) => {
                        return <Book book={book} key={i} />;
                      })}
                    </div>
                  </div>
                </section>
              );
            }}
          </BookContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
