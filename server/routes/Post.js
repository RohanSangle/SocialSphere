import express from "express";
import { createPost, getPosts, likePost} from "../controllers/Post.js";

const router = express.Router();

router.get('/get', getPosts);
router.post('/create', createPost);
router.patch('/:id/likePost', likePost);
// router.get('/latest', latestPosts);
// router.get('/', (req,res)=>{
//     res.send("Hello from posts route");
// })

export default router;