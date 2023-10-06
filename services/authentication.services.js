const tutorModel = require('../models/tutor.model');

class AuthenticationServices{
    //function to store tutor data into database
    static async storeTutorData(tutorID, fullName, email, phone, dateCreated, school, program, year, profilePhotoLink){
        var verified = "false";
        rating = 1;
        balance = 0;
        about = "";

        const tutorData = new tutorModel({tutorID, fullName, email, phone, dateCreated, school, program, year, profilePhotoLink, verified, rating, balance, about});
        return await tutorData.save();
    }

}

module.exports = AuthenticationServices;

