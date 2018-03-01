import React from 'react'
import RecipeList from './RecipeList'
import RecipeInfo from './RecipeInfo'
import background from './background3.jpg'

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
    if (input1 == '' || input2 == '' || input3 == ''){
      this.setState({recipes:'need more ingredients...'})
    } else {
      fetch(`https://api.edamam.com/search?q=${inputs}&app_id=0296d6c7&app_key=622b6a9f8811b21a64fa77f17cb3c4e8`)
      .then(res => res.json())
      .then(res => this.setState({recipes: res.hits}))
    }
  }


  componentDidMount() {
    console.log('olio')
  }

  render() {
    const style_1 = {
      padding: '180px 0',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center no-repeat',
      backgroundRepeat: 'no-repeat',
    }

    return <div>

    <section className="page-background" style={style_1} data-stellar-background-ratio="0.4">
    </section>

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
