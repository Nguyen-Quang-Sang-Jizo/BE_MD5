import postService from "../service/postService";
export const privatePost = async (req, res) => {
    let listPosts = await postService.getAll();
    const publicPosts = listPosts.filter(post => post.status === 'public');
    const privatePosts = listPosts.filter(post => post.status === 'private');
    const idUserLogin = req.decode.idUser
    const privates = privatePosts.filter(post => post.author.id === idUserLogin);
    const data = [...publicPosts,...privates];
    console.log(data)
    if (req.decode.role === 'admin') {
        return res.json(listPosts);
    } else {
        return res.json(data);
    }
}