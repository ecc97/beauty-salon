export interface IClientsResponse {
    content: IClient[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    numberOfElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    empty: boolean;
}

export interface IClient {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    appointments: Appointment[];
}

export interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface Sort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
}

export interface Appointment {
    id: number;
    dateTime: string;
    duration: number;
    comments: string;
    service: Service;
    employee: Employee;
}

export interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
}


export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: 'ADMIN' | 'USER' | 'OTHER_ROLE';
}
