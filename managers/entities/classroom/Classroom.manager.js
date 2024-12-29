const { Classroom } = require('../../_common/schema.models');

class ClassroomManager {
    async createClassroom(data) {
        return await Classroom.create(data);
    }

    async getClassroomById(id) {
        return await Classroom.findById(id).populate('schoolId');
    }

    async updateClassroom(id, data) {
        return await Classroom.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteClassroom(id) {
        return await Classroom.findByIdAndDelete(id);
    }
}

module.exports = new ClassroomManager();
