import React from 'react'
import Loading from './Loading'
import Card from './Card'


const Styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'  
}
    
export default class Recipes extends React.Component {
 state = {
    recipes: [],
    loading: true
  }
  componentDidMount() {
    fetch("https://api.spoonacular.com/recipes/random?&number=5&apiKey=89737e3cba4d4d35aeff1ea3afbc3f27")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            recipes: result
          });
          console.log(this.state.recipes)
        },
        (error) => {
          this.setState({
            loading: true,
            error
          });
        }
      )
    }
    
    render() {
      const {loading} = this.state;
      let recipes = this.state.recipes.recipes;
      return (
        <section style={Styles}>
          {
            loading ? <Loading /> : recipes.map(item => (
              <Card
                title={item.title}
                image={item.image}
                ingredients={item.extendedIngredients}
                description={item.description}
                id={item.id}
              />
            ))
          }
        </section>
      )
    }
}