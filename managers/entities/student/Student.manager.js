const { Student } = require('../../_common/schema.models');

class StudentManager {
    async createStudent(data) {
        return await Student.create(data);
    }

    async getStudentById(id) {
        return await Student.findById(id).populate('classroomId');
    }

    async updateStudent(id, data) {
        return await Student.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteStudent(id) {
        return await Student.findByIdAndDelete(id);
    }
}

module.exports = new StudentManager();
