import { configureStore } from '@reduxjs/toolkit'
import postreducer from './reducers/posts.js'

export default configureStore({
  reducer: {
    posts:postreducer,
  },
})