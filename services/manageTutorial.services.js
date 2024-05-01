const TutorialService = require('../models/tutorialService.model');
const TutorialVideo = require('../models/tutorialVideo.model');
const PendingTutorial = require('../models/pendingTutorials.model');

class ManageTutorialServices {
    // Fetch all tutorial services for a specific tutor
    static async readTutorialServices(tutorID) {
        try {
            const tutorialServices = await TutorialService.find({ tutorID: tutorID }).exec();
            return tutorialServices.length > 0 ? tutorialServices : null;
        } catch (error) {
            console.error('Error fetching tutorial services:', error);
            return null;
        }
    }

    // Fetch all tutorial videos for a specific tutor
    static async readTutorialVideos(tutorID) {
        try {
            const tutorialVideos = await TutorialVideo.find({ tutorID: tutorID }).exec();
            return tutorialVideos.length > 0 ? tutorialVideos : null;
        } catch (error) {
            console.error('Error fetching tutorial videos:', error);
            return null;
        }
    }

    // Fetch all pending tutorials for a specific tutor
    static async readPendingTutorials(tutorID) {
        try {
            const pendingTutorials = await PendingTutorial.find({ tutorID: tutorID }).exec();
            return pendingTutorials.length > 0 ? pendingTutorials : null;
        } catch (error) {
            console.error('Error fetching pending tutorial services:', error);
            return null;
        }
    }

    // Delete a specific tutorial service by tutorialID
    static async deleteTutorialService(tutorialID) {
        try {
            const result = await TutorialService.findByIdAndDelete(tutorialID);
            return result ? result : null;  // Return null if no document was found
        } catch (error) {
            console.error('Error deleting tutorial service:', error);
            return null;
        }
    }

    // Delete a specific tutorial video by tutorialID
    static async deleteTutorialVideo(tutorialID) {
        try {
            const result = await TutorialVideo.findByIdAndDelete(tutorialID);
            return result ? result : null;  // Return null if no document was found
        } catch (error) {
            console.error('Error deleting tutorial video:', error);
            return null;
        }
    }

    // Cancel a specific pending tutorial by tutorialID
    static async cancelPendingTutorial(tutorialID, studentName, studentEmail, tutorialTitle) {
        try {
            const result = await PendingTutorial.findByIdAndDelete(tutorialID);

            // Send student email if tutorial is cancelled
            if (result) {
                const message = `Dear ${studentName},\n\n
                We regret to inform you that your upcoming tutorial session titled "${tutorialTitle}" has been canceled. We understand the inconvenience this may cause and want to assure you that any fees paid for this service will be fully refunded to your original payment method within the next 5-7 business days.\n\n
                You can revisit our platform for a suitable alternative. Our team is committed to providing you with the best learning experience and support throughout your journey with us.\n\n
                Thank you for your understanding and patience. If you have any questions or require further assistance, please do not hesitate to reach out. We value your choice to learn with Tutorium and look forward to continuing to serve your educational needs.\n\n
                Warm regards,\n
                The Tutorium Team`;

                const subject = "Cancellation of Tutorial Service";

                // Assuming sendEmail is a method in your EmailServices class
                let emailStatus = await EmailServices.sendEmail(studentEmail, subject, message);

                if (!emailStatus) {
                    console.error('Error sending cancellation email');
                    return null; // You might handle this more gracefully depending on your error handling strategy
                }
            }

            return result ? result : null;  // Return null if no document was found
        } catch (error) {
            console.error('Error canceling pending tutorial:', error);
            return null;
        }
    }


    // Update a specific tutorial service
    static async updateTutorialService(tutorialID, tutorID, title, category, description, thumbnailLink) {
        try {
            const updatedTutorialService = await TutorialService.findOneAndUpdate(
                { _id: tutorialID, tutorID: tutorID }, // ensures that only the tutor who owns the tutorial can update it
                { $set: { title, category, description, thumbnailLink } },
                { new: true }  // returns the updated document
            );
            return updatedTutorialService ? updatedTutorialService : null;
        } catch (error) {
            console.error('Error updating tutorial service:', error);
            return null;
        }
    }

    // Update a specific tutorial video
    static async updateTutorialVideo(tutorialID, tutorID, title, category, description, thumbnailLink) {
        try {
            const updatedTutorialVideo = await TutorialVideo.findOneAndUpdate(
                { _id: tutorialID, tutorID: tutorID }, // ensures that only the tutor who owns the video can update it
                { $set: { title, category, description, thumbnailLink } },
                { new: true }  // returns the updated document
            );
            return updatedTutorialVideo ? updatedTutorialVideo : null;
        } catch (error) {
            console.error('Error updating tutorial video:', error);
            return null;
        }
    }
}

module.exports = ManageTutorialServices;
