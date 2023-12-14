import { Component } from 'react';

export class TextInput extends Component {

  render() {
    const { handleSearch, searchValue } = this.props

    return (
      <>
        <input type="search" value={searchValue} onChange={handleSearch} />
      </>
    )
  }
}