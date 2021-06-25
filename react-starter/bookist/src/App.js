import React, {useState} from 'react'
import "./App.css"
import { data } from "./data"

function App () {
  const [books, setBooks] = useState(data)
  const [input, setInput] = useState({search:""})
  const [filtered, setFilter] = useState("")

const handleChange = (val) => {
  setInput({search:val});
}

const filterBook = (input) => {
  const filterBook = books.filter(book => {return book.title.toLowerCase().includes(input.toLowerCase())
  });
  setFilter(filterBook)
}

  return (   
    <div>
      <Header/>
      <input 
        type="text" 
        className="input"
        placeholder = {"search Book"}
        onChange = {(e) => handleChange(e.target.value)} />
      <button type="button" className="btn" >Search</button>
      <button type="button" className="btn" onClick={() => setBooks([])}>Clear Search</button>
      <section className= "booklist"> 
        {books.map((book) => {
          return <BookList key={book.id} {...book}></BookList>
        })}
      </section>
    </div>
  )
}

function Header () {
  return (
      <div className="Header">
        <h1>Bookist</h1>
      </div>
  )
}

function BookList (props) {
  return (
    <div className= "book"> 
      <img src={props.img} alt="" />)
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
    </div>
  )
}

export default App;

