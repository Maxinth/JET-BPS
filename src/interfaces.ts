



export interface TableOpt {
    columns: any,
    data: Data[],
    loading?: boolean,
    tableBtn?: React.ReactElement

}

export interface Data {
    reference?: string,
    amt?: number,
    status?: string,
    createdDate?: string,
    processDate?: string,
    type?: string,
    description?: string,

}


export interface SubType {
    id: number,
    name: string,
    description: string,
}

export interface ApplicationState {
    reference: string,
    email: string | null,
    amt_2: number | null,
    amt_3: number | null,
    amt_1: number | null,
    phone: string | null,
    city: string | null,
    name: string | null,
    code: string | null,
    subsidyPercentage: number | null,
    subTypeId: number | null,
}
export interface User {
    id: number,
    email: string | null,
    phone: string | null,
    city: string | null,
    firstName: string | null,
    lastName: string | null,
    postCode: string | null,

}

export interface Token {

    accessToken: string
}