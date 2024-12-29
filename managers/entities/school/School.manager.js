const { School } = require('../../_common/schema.models');

class SchoolManager {
    async createSchool(data) {
        return await School.create(data);
    }

    async getSchoolById(id) {
        return await School.findById(id);
    }

    async updateSchool(id, data) {
        return await School.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteSchool(id) {
        return await School.findByIdAndDelete(id);
    }
}

module.exports = new SchoolManager();
