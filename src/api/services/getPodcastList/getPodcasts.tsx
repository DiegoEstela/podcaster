import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { iTunesPath } from "../../../app/global/endpoints";
import { IAllItunesData } from "../../../app/global/interfaces";


export async function getPodcasts(limit: number): Promise<AxiosResponse<IAllItunesData[]> | string> {
    try {
        const path: string = `${iTunesPath}/us/rss/toppodcasts/limit=${limit}/genre=1310/json`
        const headers: AxiosRequestConfig = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }
        const { data, status } = await axios.get(path, headers);
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