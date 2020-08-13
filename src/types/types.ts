export type PhotosType = {
    small: string | null,
    large: string | null
};
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
};
export type PostType = {
    id: number,
    message: string,
    likeCount: number};
export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed:boolean
};
export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: boolean,
    fullName: string,
    contacts: Array<ContactsType>,
    photos: Array<PhotosType>};
