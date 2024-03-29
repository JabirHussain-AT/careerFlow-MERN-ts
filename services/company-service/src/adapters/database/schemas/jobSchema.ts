import mongoose, { Schema, Document, ObjectId } from "mongoose";
import { IJobs } from "../../../entities/jobEntity";

const JobsSchema: Schema = new Schema(
    {
      applicants: [
        {
          applicantId: { type: Schema.Types.ObjectId },
          appliedDate: { type: Date , default :  new Date() },
          description: { type: String },
          email: { type: String },
          hiringStage: { type: String , default : 'Applyed' },
          linkedIn: { type: String },
          name: { type: String },
          number: { type: Number },
          portfolio: { type: String },
          prevJob: { type: String },
          resume: { type: String },
          schedule: {
            date: { type: Date },
            time : { type : String} ,
            InterviewType : {type : String  },
            InterviewName : { type : String } ,
            InterviewRoom : { type : String }
          },
        },
      ],
      category: {type : String},
      fromSalary: { type: Number},
      toSalary: { type: Number},
      jobDescription: { type: String },
      jobTitle: { type: String },
      requirements: [{ type: String }],
      skills: [{ type: String }],
      jobExpiry: { type: Date || String },
      vacancy: { type: Number },
      jobType : { type : String },
      status : { type : Boolean , default : true } ,
      companyId: { type: Schema.Types.ObjectId, ref: 'Company', alias: '_id' },
    },
    {
      timestamps: true,
    }
  );
  
  export interface IJobsData extends IJobs {
    _id: ObjectId;
    createdAt: Date;
    upadtedAt: Date;
  }
  
  const Jobs = mongoose.model<IJobs>("Jobs", JobsSchema);
  
  export default Jobs;