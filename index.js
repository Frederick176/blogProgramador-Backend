import { config } from "dotenv";
import { initServer } from "./configs/server.js";
import { createCourse } from "./src/course/course.controller.js"

config()
initServer()
createCourse()