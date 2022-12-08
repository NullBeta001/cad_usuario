//GET
export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
}

export interface ResponseUser {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}

//POST
export interface RequestCreate {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
}


export interface ResponseCreate {
    email: string;
    first_name: string;
    last_name: string;
    id: number;
}







