import { Card, Img, CardFooter, CardHeader, Title, Paragraph } from "./index.style"
import { useNavigate } from "react-router-dom"
import { IPodcast } from "../../../app/global/interfaces"


function PodcastCard({ entry }: { entry: IPodcast }): JSX.Element {
    const history = useNavigate()
    return (
        <Card onClick={() => history(`/podcast/${entry?.id?.attributes['im:id']}`)}>
            <CardHeader>
                <Img src={entry['im:image'][2]?.label} />
            </CardHeader>
            <CardFooter>
                <Title> {entry['im:name'].label.slice(0, 50)}</Title>
                <Paragraph> {entry['im:artist'].label}</Paragraph>
            </CardFooter>
        </Card>
    )
}

export default PodcastCard