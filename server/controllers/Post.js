import mongoose from 'mongoose';
import Post from '../models/Post.js';

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);
    try {
        await newPost.save();
        res.status(201).json({
            message: 'Post created successfully',
            newPost : newPost
        });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getPosts = async (req, res) => {
    try {
        const postMessages = await Post.find();
        res.status(200).json({
            post: postMessages
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await Post.findById(id);

    const updatedPost = await Post.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}
// export const latestPosts = async (req, res) => {
//     try {
//         const postMessages = await Post.find().sort({ createdAt: -1 });
//         res.status(200).json({
//             postMessages: postMessages
//         });
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }