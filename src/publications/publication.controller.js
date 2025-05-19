import Publication from './publication.model.js';
import Course from '../course/course.model.js';

export const createPublication = async (req, res) => {
    const data = req.body;
    try{
        const publication = await Publication.create(data);

        return res.status(201).json({
            success: true,
            message: "Publicación creada exitosamente (:",
            publication: publication
        })

    }catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear la publicación ):",
            error: error.message
        })
    }
}

export const getPublications = async (req, res) => {
    try {
        const publications = await Publication.find({status: true}).populate("course", "teacher").populate("course", "name")

        if(!publications || publications.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No hay publicaciones disponibles ):"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Publicaciones obtenidas exitosamente (:",
            publications: publications
        })
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener las publicaciones ):",
            error: error.message
        })
    }
}

export const getPublicationsByCourse = async (req, res) => {
    const { name } = req.body;

    try {
        const course = await Course.findById(name);

        if(!course || course.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Curso no encontrado ):"
            })
        }

        const courseIds = course.map(course => course._id)
        const publications = await Publication.find({ status: true, course: { $in: courseIds } }).populate("course", "teacher name")

        if(!publications || publications.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No hay publicaciones disponibles para este curso ):"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Publicaciones obtenidas exitosamente (:",
            publications: publications
        })
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener las publicaciones ):",
            error: error.message
        })
    }
}

export const updatePublication = async (req, res) => {
    const { id } = req.params
    const data = req.body

    try {
        const publication = await Publication.findByIdAndUpdate(id, data, { new: true })

        return res.status(200).json({
            success: true,
            message: "Publicación actualizada exitosamente (:",
            publication: publication
        })

    }catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar la publicación ):",
            error: error.message
        })
    }
}

export const deletePublication = async (req, res) => {
    const { id } = req.params

    try {
        const publication = await Publication.findByIdAndUpdate(id, { status: false }, { new: true })

        return res.status(200).json({
            success: true,
            message: "Publicación eliminada exitosamente (:",
            publication: publication
        })
        
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar la publicación ):",
            error: error.message
        })
    }
}