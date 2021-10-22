import INote from "./note";

export default interface IRootState {
    auth?: IUser;
    notes?:INotes;
}

export interface IUser {
    uid: string;
    name: string;
    authethicated:boolean;
}

export interface INotes{
    id:string;
    notes:INote;
    active?:any;
}