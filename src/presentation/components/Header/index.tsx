import { Bars } from "react-loader-spinner"
import { primary } from "../../../app/global/styles"
import { Container, Title, Loader } from "./index.style"
import { IStatus } from "../../../app/global/interfaces"




function Header({ status }: IStatus): JSX.Element {
  return (
    <Container>
      <Title>
        Podcaster
      </Title>
      <Loader>
        <Bars
          height="40"
          width="40"
          color={primary}
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={status === 'success' ? false : true}
        />
      </Loader>
    </Container >
  )
}

export default Header