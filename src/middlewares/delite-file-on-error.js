import fs from "fs/promises"
import { join } from "path"

export const deliteFileOnError = async (err, req, next) => {
    if (req.file && req.filePath) {
        const filePath = join(req.filePath, req.file.filename)
        try {
            await fs.unlink(filePath)
        } catch (unlinkErr) {
            console.log(`Hubo un error al eliminar el archivo ${unlinkErr}`)
        }
    }
    next(err)
}