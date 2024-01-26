import mongoose , {Schema ,Document ,ObjectId} from "mongoose";
import {IUser} from '../../../../entities/userEntities'

const userSchema : Schema = new Schema({
    userName : {
        type : String,
        required : true ,
        
    },
    email : {
        type : String ,
        required : true , 
        unique: true
    },
    phone : {
        type : Number ,
        unique : true ,
    },
    skills : [{ type : String }],
    socialMediaLinks : [{
        link  :  { type : String },
        socialMedia : { type : String }
    }],
    dob : { type : Date || String},
    status : { type : Boolean },
    jobStatus : { type : String },
    about : { type : String },
    languages : [{ type :String }],
    education : [{ type : String }],
    experiance : [{ type : String }]
})

export default mongoose.model<IUser>("Users", userSchema);

export interface IUserData extends IUser{
    createdAt: Date;
    updatedAt: Date;
}
export interface IUserDoc {
    _id : ObjectId ,
    name : string ,
    email : string, 
    password : string, 
    phone?: string | null,
    profilePic?: string | null ,
    status?:boolean ,
    skills?:string[] | null,
    socialLinks?:{
        link?:string | null ;
        socialMedia?:string | null ;
    }[];
    dob?:string| null,
    about?:string | null,
    languages?:string[] | null,
    education?:object[] | null ,
    experiance : object [ ] | null 
}