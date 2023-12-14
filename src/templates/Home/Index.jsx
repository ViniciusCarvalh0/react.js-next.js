import './styles.css'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button'
import { Component } from 'react';
import { TextInput } from '../../components/TextInput';
export class Home extends Component {



  render() {
    const { loadMorePosts, filteredPosts, noMorePosts, handleSearch, searchValue } = this.props;

    return (
      <section className='container' >
        {filteredPosts.length === 0 && (
          <h2>Não existem posts com o valor especificado</h2>
        )}

        <TextInput
          handleSearch={handleSearch}
          searchValue={searchValue} />

        {filteredPosts.length > 0 &&
          <Posts posts={filteredPosts} />
        }



        <div className='btn-container'>
          <Button
            text='Load More Posts'
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    )
  }
}