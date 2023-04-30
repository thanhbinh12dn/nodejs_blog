const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => {
        res.render("me/stored-courses", {
          deletedCount,
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);

    //2 ông ở dưới này gộp thành promise.all
    // Course.countDocumentsDeleted()
    //   .then((deletedCount) => {
    //     console.log(deletedCount);
    //   })
    //   .catch(() => {});

    // Course.find({})
    //   .then((courses) =>
    //     res.render("me/stored-courses", {
    //       courses: multipleMongooseToObject(courses),
    //     })
    //   )
    //   .catch(next);
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
