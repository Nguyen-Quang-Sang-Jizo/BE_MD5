const jwt = require('jsonwebtoken');
export const SECRET = '123456'
import postService from "../service/postService";

export const onlyDeleteOwnPost = async (req, res, next) => {
    let accessToken = req.headers.authorization.split(' ')[1];
    const decodedToken  = jwt.verify(accessToken, SECRET)
    let id = req.params.id;
    const post = await postService.findByIdPost(id);

    if(!post){
        return res.status(403).json({ message: 'Bạn không được phép xóa bài đăng này' });
    }
    // So sánh ID người dùng hiện tại với ID người đăng bài
    if(post.author.id === decodedToken.idUser || decodedToken.role === 'admin'){
        return next();
    }
    if (post.author.id !== decodedToken.idUser) {
        return res.status(401).json({ message: 'Bạn không được phép xóa bài đăng này.' });
    }
}