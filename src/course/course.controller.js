import Course from './course.model.js';

export const createCourse = async () => {
    const taller = {
        "name": "Taller",
        "description": "El curso de taller es un curso práctico donde los estudiantes aprenderán a desarrollar aplicaciones web utilizando tecnologías modernas.",
        "teacher": "Braulio Echeverria",
    }

    const tecnologia = {
        "name": "Tecnologia",
        "description": "El curso de tecnologia es un curso teórico donde los estudiantes aprenderán sobre los fundamentos de la programación y el desarrollo de software.",
        "teacher": "Braulio Echeverria",
    }

    const practica = {
        "name": "Practica Supervisada",
        "description": "El curso de practica supervisada es un curso práctico donde los estudiantes aplicarán todos los conocimientos adquiridos en los cursos anteriores.",
        "teacher": "Braulio Echeverria",
    }

    const courseTaller = await Course.findOne({ name: taller.name });

    const courseTecnologia = await Course.findOne({ name: tecnologia.name });
    
    const coursePractica = await Course.findOne({ name: practica.name });

    if(!courseTecnologia) {
        await Course.create(tecnologia);
        console.log("Curso de tecnologia creado exitosamente");
    }

    if(!courseTaller) {
        await Course.create(taller);
        console.log("Curso de taller creado exitosamente");
    }

    if(!coursePractica) {
        await Course.create(practica);
        console.log("Curso de practica supervisada creado exitosamente");
    }
}