import { Container, Img, Title, SubTitle, DescriptionTitle, DescriptionBody } from "./index.style"
import { IPodcastDescription } from "../../../app/global/interfaces"


function PodcastDescription({ name, img, author, description }: IPodcastDescription) {
    return (
        <Container>
            <Img src={img} />
            <Title> {name} </Title>
            <SubTitle> by {author}</SubTitle>
            <DescriptionTitle> Description:</DescriptionTitle>
            <DescriptionBody> {description}</DescriptionBody>
        </Container>
    )
}

export default PodcastDescription