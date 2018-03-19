function personAndTeacher() {
    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString() {
            let type = this.constructor.name;
            let props = Object.getOwnPropertyNames(this);

            return `${type} (${props.map(pr => `${pr}: ${this[pr]}`).join(', ')})`;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}