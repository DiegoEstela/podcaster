import { useNavigate } from "react-router-dom"
import { Container, Img, Title, SubTitle, DescriptionTitle, DescriptionBody } from "./index.style"
import { IPodcastDescription } from "../../../app/global/interfaces"


function PodcastDescription({ name, img, author, description, id }: IPodcastDescription): JSX.Element {
    const history = useNavigate()
    return (
        <Container>
            <Img src={img} onClick={() => id && history(`/podcast/${id}`)} active={id ? true : false} />
            <Title onClick={() => id && history(`/podcast/${id}`)} active={id ? true : false}> {name} </Title>
            <SubTitle onClick={() => id && history(`/podcast/${id}`)} active={id ? true : false}> by {author}</SubTitle>
            <DescriptionTitle> Description:</DescriptionTitle>
            <DescriptionBody> {description}</DescriptionBody>
        </Container>
    )
}

export default PodcastDescription