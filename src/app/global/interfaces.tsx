import { RefetchOptions, ResetOptions } from "react-query";

interface label { label: string }
interface attributesLink { href: string, rel?: string, type?: string }
interface atributesCategory {
    'im:id': string,
    label: label,
    scheme: string,
    term: string,
}

interface IImagen {
    label?: string;
    attibutes?: { heigth: number }
}


export interface IPodcast {
    category: { attributes: atributesCategory, },
    id: { attributes: { 'im:id': string }, label: string },
    'im:artist': { attributes: { href: string }, label: string },
    'im:contentType': { attributes: { term: string }, label: string },
    'im:image': IImagen[],
    'im:name': { label: string },
    'im:price': { attributes: { amount: string, currency: string }, label: string },
    'im:releaseDate': { attributes: { label: string }, label: string },
    link: attributesLink[],
    title: label,
    summary: label
}

export interface IAllItunesData {
    feed: {
        author: { name: label, uri: label },
        uri?: label,
        entry?: IPodcast[],
        icon: label,
        id: label,
        link: attributesLink[]
        rights: label,
        title: label,
        updated: label
    }
}

export type TFetchStatus = "success" | "idle" | "error" | "loading"

export interface IStatus { status: TFetchStatus }

export interface IPodcastDescription {
    name: string,
    img: string | undefined;
    author: string,
    description: string
}


export interface IQueryResult {
    data?: IAllItunesData
    dataUpdatedAt: number
    error: null
    errorUpdateCount: number
    errorUpdatedAt: number
    failureCount: number
    isError: boolean
    isFetched: boolean
    isFetchedAfterMount: boolean
    isFetching: boolean
    isIdle: boolean
    isLoading: boolean
    isLoadingError: boolean
    isPlaceholderData: boolean
    isPreviousData: boolean
    isRefetchError: boolean
    isRefetching: boolean
    isStale: boolean
    isSuccess: boolean
    refetch: RefetchOptions
    remove: ResetOptions
    status: IStatus | string

}