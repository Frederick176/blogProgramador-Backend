import { Router } from "express"
import { createPublication, getPublications, getPublicationsByCourse, updatePublication, deletePublication} from "./publication.controller.js";
import { createPublicationValidator, updatePublicationValidator, deletePublicationValidator, 
    getPublicationsByCourseValidator} from "../middlewares/publication-validator.js";

const router = Router();

router.post("/add", createPublicationValidator, createPublication);

router.get("/", getPublications);

router.put("/update:id", updatePublicationValidator, updatePublication);

router.delete("/delete:id", deletePublicationValidator, deletePublication);

router.get("/course:name", getPublicationsByCourseValidator, getPublicationsByCourse);

export default router;
