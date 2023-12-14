import './styles/global-style.css';
import { Component } from 'react';
import { loadPosts } from './utils/load-posts';
import { Home } from './templates/Home/Index';
class App extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 40,
    searchValue: ""
  };

  async componentDidMount() {
    const postsAndPhotos = await loadPosts();
    const { page, postsPerPage } = this.state;
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })

  };


  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    const postsPage = [...posts, ...nextPosts]
    this.setState({ posts: postsPage, page: nextPage });

  }

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
    console.log(this.state);
  }
  render() {
    const { page, allPosts, postsPerPage, searchValue } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      }) : allPosts
    return (
      <>
        <Home
          loadMorePosts={this.loadMorePosts}
          filteredPosts={filteredPosts}
          noMorePosts={noMorePosts}
          handleSearch={this.handleSearch}
          searchValue={searchValue}
        />
      </>
    )
  }
}

export default App;
