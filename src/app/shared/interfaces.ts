export interface IEstudiante {
    id: number;
    name: string;
    lastName: string;
    nodeName: string;
    deleted: boolean;
    courseDate: string;
    graduationDate:	string;
    email: string;
    phone: string;
    resumeUrl: string;
    lookingForWork: any;
    working: any;
    feedback: string;
    interviews: number;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}
