import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import {Route, useHistory, Switch} from 'react-router-dom';
import {useState, useEffect}from 'react';

function App() {
  return (
    <div className="App">
    <Header />
    <Nav />
    <Home />
    <NewPost />
    <About />
    <Missing />
    <PostPage />
    <Footer />
    </div>
  );
}

export default App;
