interface label { label: string }
interface attributesLink { href: string, rel?: string, type?: string }
interface atributesCategory {
    'im:id': string,
    label: label,
    scheme: string,
    term: string,
}

export interface IPodcast {
    category: { attributes: atributesCategory, },
    id: { attributes: { 'im:id': string }, label: string },
    'im:artist': { attributes: { href: string }, label: string },
    'im:contentType': { attributes: { term: string }, label: string },
    'im:image': [{ label: string }],
    'im:name': { label: string },
    'im:price': { attributes: { amount: string, currency: string }, label: string },
    'im:releaseDate': { attributes: { label: string }, label: string },
    link: attributesLink[],
    title: label,
    summary: label
}


export interface IFeed {
    author: { name: label, uri: label },
    uri: label,
    entry: IPodcast[],
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


