// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// import { Routes,Route } from "react-router-dom";
// import Home from './Home';
// import Books from './Books';
// function App() {
//    return(
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='Book' element={<Books/>}/>
//     </Routes>
//    );
// }
// import { Routes,Route } from "react-router-dom";
// import Home from './Home';
// import Books from './Books';
// import { Link } from "react-router-dom";
// function App() {
//    return(
//     <> 
//      <ul>
//       <li>
//         <Link to='/'>Home</Link>
//       </li>
//       <li>
//         <Link to='/Book'>Books</Link>
//       </li>
//       <li><Link to="/calculator">calculator</Link></li>
//      </ul>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='Book' element={<Books/>}/>
//       <Route path='calculator' element={<calculator/>}></Route>
//     </Routes>
//     </>
//    );
// }
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import Booklist from './Booklist';
import Calculator from './Calculator'; // Import the Calculator component
import  Notfound  from './Notfound';
function App() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Book'>Books</Link>
        </li>
        {/* Use Link instead of link */}
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/Booklist">Booklist</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Book' element={<Books />} />
        {/* <Route path='book/:id' element= {<BookDetails />} /> */}
        {/* Use Calculator component, not calculator */}
        <Route path='calculator' element={<Calculator />} />
        <Route path='Booklist' element={<Booklist />}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </>
  );
}

export default App;




