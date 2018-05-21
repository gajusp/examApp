
export interface IModulePage {
    title: string,
    component: any,
    description: string,
    icon: string
}

export interface IState {
    code: string,
    name: string
}

export interface ILanguage {
    code: string,
    language: string
}

export interface IContactUs {
    name: string,
    email: string,
    phoneNumber: number,
    city: string,
    message: string
}