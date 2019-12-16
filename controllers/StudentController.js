const Student = require("../models/Student");

module.exports = {
  addStudent: async (fin_id, next) => {
    const student = new Student({ fin_id });
    await student.save(function(err, u) {
      if (err) return console.log(err);
      next(u);
    });
  },
  updateStudent: async (fin_id, name, p_mobile, next) => {
    Student.findOneAndUpdate({ fin_id }, { name, p_mobile })
      .then(result => {
        next(result);
      })
      .catch(e => {
        console.log(e);
      });
  },
  getAllStudents: next => {
    Student.find({}, function(err, students) {
      next(students);
    });
  },
  findStudentByFinId: (fin_id,next) => {
    Student.find({fin_id}, function(err, student) {
      const n = student[0].name
      const m = student[0].p_mobile
      const p = student[0].paid
 
      next({
        1: n,
        2: m,
        3: p
      });
    });
  },
};
