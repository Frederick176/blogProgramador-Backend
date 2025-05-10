import { Router } from "express"
import { createPublication, getPublications, getPublicationsByDateRecent, getPublicationsOld, getPublicationsByCourse, 
    updatePublication, deletePublication} from "./publication.controller.js";
import { createPublicationValidator, updatePublicationValidator, deletePublicationValidator, 
    getPublicationsByCourseValidator} from "../middlewares/publication-validator.js";

const router = Router();

router.post("/add", createPublicationValidator, createPublication);

router.get("/", getPublications);

router.put("/update/:id", updatePublicationValidator, updatePublication);

router.delete("/delete/:id", deletePublicationValidator, deletePublication);

router.get("/recent", getPublicationsByDateRecent);

router.get("/old", getPublicationsOld);

router.get("/course", getPublicationsByCourseValidator, getPublicationsByCourse);

export default router;
