import React, { Component } from 'react';
import FilterBox from '../components/FilterBox';
import ScrollBar from '../components/ScrollBar';
import CharacterList from '../components/CharacterList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchfield: '',
      characterList: []

  }
}

  componentDidMount() {
      fetch('https://aqueous-castle-51302.herokuapp.com/characters', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(data => this.setState({ characterList:  data.data.results}))
        .catch(console.log)
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

  render() {
    const { characterList, searchfield } = this.state;
    const filteredCharacters = characterList.filter(character => {
        return character.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return(
      <div className='tc'>
        <h1 className='f2'>Rick and Morty Characters</h1>
        <FilterBox searchChange={ this.onSearchChange }/>
          <ScrollBar>
            <CharacterList characterList={ filteredCharacters }/>
          </ScrollBar>
      </div>
    );
  }
}

export default App;
