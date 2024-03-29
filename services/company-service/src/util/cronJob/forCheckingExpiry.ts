import cron from "node-cron";
import color from  'colors'
import Jobs from "../../adapters/database/schemas/jobSchema";
import { ObjectId } from "mongoose";

const updateExpiredJobs = async () => {
  try {
    const currentDate = new Date();
    const expiredJobs = await Jobs.find({
      jobExpiry: { $lt: currentDate },
      status: true,
    });
    if (expiredJobs.length > 0) {
      const updatePromises = expiredJobs.map(
        async (job: { _id: ObjectId | string }) => {
          await Jobs.findByIdAndUpdate(job._id, { status: false });
        }
      );
      await Promise.all(updatePromises);
      console.log(color.yellow("Expired jobs updated successfully."), expiredJobs);
    } else {
      console.log("No expired jobs found.");
    }
  } catch (error) {
    console.error("Error updating expired jobs:", error);
  }
};

const scheduleJobUpdate = () => {
  // Schedule the job to run at midnight every day (00:00)
  cron.schedule("0 0 * * *", async () => {
    console.log("Running job update task at midnight...");
    console.log("========================");
    await updateExpiredJobs();
  });
};

export default scheduleJobUpdate;
