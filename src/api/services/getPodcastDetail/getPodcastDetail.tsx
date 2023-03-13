import axios, { AxiosResponse } from "axios";
import { IPodcastDetailList } from "../../../app/global/interfaces";
import { iTunesPath } from "../../../app/global/endpoints";


export async function getPodcastDetail(id: string): Promise<AxiosResponse<IPodcastDetailList[]> | string> {
    try {
        const path: string = `${iTunesPath}/lookup?id=${id}&media=podcast
        &entity=podcastEpisode&limit=20`
        const { data, status } = await axios.get(path, { withCredentials: false });
        console.log("response status is: ", status);
        return data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error as string);
            return "An unexpected error occurred";
        }
    }
}