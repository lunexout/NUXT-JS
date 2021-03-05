import Vuex from 'vuex'
import user from './user/index'
import storycard from './storycard/index'

const createStore = () => {
    return new Vuex.Store({
      modules: {
          user,
          storycard
      }
    })
  }
  export default createStore