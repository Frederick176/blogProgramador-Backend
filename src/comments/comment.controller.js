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