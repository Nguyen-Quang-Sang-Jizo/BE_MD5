export const checkRole = (req, res, next) => {
    if(req.decode.role === 'admin') return next();
    else {
        res.json('ban khong co quyen')
    }
}