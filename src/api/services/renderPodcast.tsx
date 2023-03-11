import { IPodcast, IQueryResult } from "../../app/global/interfaces"

export function renderPodcast(inputSearch: string, podcast: IQueryResult): IPodcast[] | undefined {
    let result: IPodcast[] | undefined = []
    result = !inputSearch ? podcast?.data?.feed.entry :
        podcast?.data?.feed?.entry?.filter((entry: IPodcast) => {
            let name = entry['im:name'].label.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())
            let artist = entry["im:artist"].label.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())
            return !name ? artist : name
        })
    return result
}