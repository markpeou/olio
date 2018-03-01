import React from 'react'
import RecipeList from './RecipeList'
import RecipeInfo from './RecipeInfo'
import Background from './background3.jpg'
import logo from  './logo.png'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.showRecipe = this.showRecipe.bind(this)
    this.getInput = this.getInput.bind(this)
    this.state = {
      input1: '',
      input2: '',
      input3: '',
      recipes: '',
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

  componentDidMount() {
    console.log('olio')
  }

  render() {

    return <div>

      <img className='background' src={Background} />
      <div className='form'>
      <p>list 3 ingredients you have and we will find a recipe to match your ingredients!</p>
      <input className='input1' type='text' onChange={this.getInput} />
      <input className='input2' type='text' onChange={this.getInput} />
      <input className='input3' type='text' onChange={this.getInput} />
      <button onClick={this.showRecipe}>find</button>
      </div>
      <RecipeList recipes= {this.state.recipes} />
      <RecipeInfo recipeInfo={this.state.recipeInfo} />

    </div>
  }
}
