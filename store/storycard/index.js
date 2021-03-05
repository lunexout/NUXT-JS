import axios from 'axios'
export default {
    state: {
      stories: [],
    },
    mutations: {
      ADD_STORIES(state, data){
        // state.stories.push(data)
      },
    },
    actions: {
      getStories(ctx){
        // console.log(axios.get('https://source.unsplash.com/random/80x80').then(data=>data.url));
      }
    },
    getters: {
    //   getCounter: (state) => { return state.stories },
    }
  }