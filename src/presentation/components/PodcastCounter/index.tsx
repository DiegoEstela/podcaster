import { Counter, Text } from "./index.style"

function PodcastCounter({ podcastCount }: { podcastCount: number }): JSX.Element {
    return (
        <Counter>
            <Text>
                Episodes: {podcastCount}
            </Text>
        </Counter>
    )
}

export default PodcastCounter