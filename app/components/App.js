import React from 'react'
import RecipeList from './RecipeList'
import RecipeInfo from './RecipeInfo'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.showRecipe = this.showRecipe.bind(this)
    this.getInput = this.getInput.bind(this)
    this.showLink = this.showLink.bind(this)
    this.state = {
      recipes: 'waiting for input',
      recipeInfo: ''
    }
  }

  getInput(e) {
    this.setState({[e.target.className]: e.target.value})
  }

  showRecipe(e) {
    e.preventDefault()
    this.setState({recipes: 'loading recipes...'})
    let {input1, input2, input3} = this.state
    var inputs = `${input1}+${input2}+${input3}`
    fetch(`https://api.edamam.com/search?q=${inputs}&app_id=0296d6c7&app_key=622b6a9f8811b21a64fa77f17cb3c4e8`)
      .then(res => res.json())
      .then(res => this.setState({recipes: res.hits}))
  }

  showLink(e) {
    e.preventDefault()
    e.target.p
    console.log('clicky')
  }

  componentDidMount() {
    console.log('olio')
  }

  render() {
    return <div>
      <p>list 3 ingredients you have and we will find a recipe to match your ingredients!</p>
      <input className='input1' type='text' onChange={this.getInput} />
      <input className='input2' type='text' onChange={this.getInput} />
      <input className='input3' type='text' onChange={this.getInput} />
      <button onClick={this.showRecipe}>find</button>
      <RecipeList recipes= {this.state.recipes} />
      <p onClick={this.state.showLink}>clickme!</p>



      {/* <RecipeInfo recipes= {this.state.recipes.url}/> */}
    </div>
  }
}
