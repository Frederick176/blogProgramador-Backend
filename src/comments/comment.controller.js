import Comment from './comment.model.js';

export const createComment = async (req, res) => {
    const data = req.body;
    try{
        const comment = await Comment.create(data);

        return res.status(201).json({
            success: true,
            message: "Comentario creado exitosamente (:",
            comment: comment
        })

    }catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear el comentario ):",
            error: error.message
        })
    }
}

export const getCommentsByPublication = async (req, res) => {
    const { postId } = req.params;
    try {
        const comments = await Comment.find({ postId }).sort({ date: -1 });
        res.status(200).json({
            success: true,
            message: "Comentarios obtenidos exitosamente (:",
            comments: comments
        })
        
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los comentarios ):",
            error: error.message
        })
    }
}