import mongoose, { Schema, Document, ObjectId } from "mongoose";
import { IUser } from "../../../../entities/userEntities";

const userSchema: Schema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    skills: [{ type: String }],
    socialMediaLinks: [
      {
        link: { type: String },
        socialMedia: { type: String },
      },
    ],
    dob: { type: Date || String },
    status: { type: String },
    aboutMe: { type: String },
    jobStatus: { type: String },
    about: { type: String },
    languages: [{ type: String }],
    education: [
      {
        scheme: { type: String },
        institution: { type: String },
        startDate: { type: String },
        endDate: { type: String },
      },
    ],
    experiance: [
      {
        jobPosition: { type: String },
        company: { type: String },
        fromDate: { type: String },
        toDate: { type: String },
      },
    ],
    approved: { type: Boolean },
    stage: { type: String },
    profilePic: { type: String },
    resume: { type: String },
    location: { type: String },
    position: { type: String },
    preferredJobs: [{type:String}] ,
    isBlocked : { type : Boolean , default : false },              
    profileVerification: { type: Boolean },
    savedJobs: [{ type: String }],
    basicInfoUpdated: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("Users", userSchema);

export interface IUserData extends IUser {
  createdAt: Date;
  updatedAt: Date;
}
export interface IUserDoc {
  _id: ObjectId | string ,
  userName: string;
  email: string;
  role: string;
  password: string;
  phoneNumber?: number | null;
  profilePic?: string | null;
  status?: string;
  skills?: string[] | null;
  socialLinks?: {
    link?: string | null;
    socialMedia?: string | null;
  }[];
  dob?: string | null;
  location?: string;
  position?: string;
  about?: string | null;
  languages?: string[] | null;
  education?: object[] | null;
  experiance: object[] | null;
  approved: boolean | null;
  isBlocked : boolean | null ;
  stage: string | null;
  savedJobs: string[];
  basicInfoUpdated: boolean;
}
