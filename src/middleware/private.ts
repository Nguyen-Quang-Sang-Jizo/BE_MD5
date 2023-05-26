
const jwt = require('jsonwebtoken');
export const SECRET = '123456'

import postService from "../service/postService";

export const privatePost = async (req, res, next) => {
    let accessToken = req.headers.authorization.split(' ')[1];
    const decodedToken  = jwt.verify(accessToken, SECRET)


    let listPosts = await postService.getAll();

    const publicPosts = listPosts.filter(post => post.status === 'public');

    const privatePosts = listPosts.filter(post => post.status === 'private');
    const idUserLogin = decodedToken.idUser
    const privates = privatePosts.filter(post => post.author.id === idUserLogin);

    const data = publicPosts.concat(privates);

    const list = data || publicPosts;

    if (decodedToken.role === 'admin') {
        // Do something for the admin role
        return res.json(listPosts);
    } else {
        // Do something for other roles with the 'list' object
        return res.json(list);
    }




}