
import { Card, Img, CardFooter, CardHeader, Title, Paragraph } from "./index.style"


function PodcastCard({ entry }: any) {
    console.log(entry)
    return (
        <Card onClick={() => console.log("dalee")}>
            <CardHeader>
                <Img src={entry['im:image'][2].label} />
            </CardHeader>
            <CardFooter>
                <Title> {entry['im:name'].label}</Title>
                <Paragraph> {entry['im:artist'].label}</Paragraph>
            </CardFooter>
        </Card>
    )
}

export default PodcastCard