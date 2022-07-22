import './App.css'
import Recommend from './components/recommend/recommend.component'
import Category from './components/category/category.component'

const App = () => {
  return (
    <div className='App'>
      <Category />
      <Recommend />
    </div>
  )
}

export default App