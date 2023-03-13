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

export interface IFeed {
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
export interface IAllItunesData {
    feed: IFeed
}



export type TFetchStatus = "success" | "idle" | "error" | "loading"

export interface IStatus { status: TFetchStatus }

export interface IPodcastDescription {
    name: string,
    img: string | undefined;
    author: string,
    description: string
    id?: string,
}


export interface IQueryResult {
    data?: IAllItunesData,
    dataUpdatedAt: number,
    error: null,
    errorUpdateCount: number,
    errorUpdatedAt: number,
    failureCount: number,
    isError: boolean,
    isFetched: boolean,
    isFetchedAfterMount: boolean,
    isFetching: boolean,
    isIdle: boolean,
    isLoading: boolean,
    isLoadingError: boolean,
    isPlaceholderData: boolean,
    isPreviousData: boolean,
    isRefetchError: boolean,
    isRefetching: boolean,
    isStale: boolean,
    isSuccess: boolean,
    refetch: any,
    remove: any,
    status: IStatus | string,
}
export interface IPodcastEpisode {
    artistIds: number[],
    artistViewUrl: string,
    artworkUrl30: string,
    artworkUrl60: string,
    artworkUrl100: string,
    artworkUrl600: string,
    closedCaptioning: string,
    collectionId: number,
    collectionName: string,
    collectionViewUrl: string,
    contentAdvisoryRating: string,
    country: string,
    description: string,
    episodeContentType: string,
    episodeFileExtension: string,
    geepisodeFileExtensionnreIds: string,
    episodeGuid: string,
    episodeUrl: string,
    feedUrl: string,
    genres: [{
        name: string,
        id: string,
    }],
    kind: string,
    previewUrl: string,
    releaseDate: string,
    shortDescription: string,
    trackId: number,
    trackName: string,
    trackTimeMillis: number,
    trackViewUrl: string,
    wrapperType: string,
}
export interface IPodcastDetailList {
    resultCount: number;
    results: IPodcastEpisode[]
}

export interface IQueryResultPodcastDetail {
    data: IPodcastDetailList
    error: null,
    errorUpdateCount: number,
    errorUpdatedAt: number,
    failureCount: number,
    isError: boolean,
    isFetched: boolean,
    isFetchedAfterMount: boolean,
    isFetching: boolean,
    isIdle: boolean,
    isLoading: boolean,
    isLoadingError: boolean,
    isPlaceholderData: boolean,
    isPreviousData: boolean,
    isRefetchError: boolean,
    isRefetching: boolean,
    isStale: boolean,
    isSuccess: boolean,
    refetch: any,
    remove: any,
    status?: IStatus | string,
}

export interface IFormattedPodcast {
    title: string,
    date: string,
    duration: string,
    collectionId: number,
    trackId: number
}
