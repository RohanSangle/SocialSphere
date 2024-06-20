import express from "express";
import { createPost} from "../controllers/post.js";
import { getPosts } from "../controllers/post.js";

const router = express.Router();

router.get('/get', getPosts);
router.post('/create', createPost);
// router.get('/latest', latestPosts);
// router.get('/', (req,res)=>{
//     res.send("Hello from posts route");
// })

export default router;