const jwt = require('jsonwebtoken');
export const SECRET = '123456'

import commentService from "../service/commentService";

export const deleteComment = async (req, res, next) => {
    let accessToken = req.headers.authorization.split(' ')[1];
    const decodedToken  = jwt.verify(accessToken, SECRET)
    let id = req.params.id;
    const comment = await commentService.findByIdComments(id);
    console.log(comment)

    if(!comment){
        return res.status(403).json({ message: 'Bạn không được phép xóa bình luận  này' });
    }
    // So sánh ID người dùng hiện tại với ID người đăng bài
    if(comment.authors.id === decodedToken.idUser || decodedToken.role === 'admin'){
        return next();
    }
    if (comment.authors.id !== decodedToken.idUser) {
        return res.status(401).json({ message: 'Bạn không được phép xóa bình luận này.' });
    }
}