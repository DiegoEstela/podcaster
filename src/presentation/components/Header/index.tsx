import { IStatus } from "../../../app/global/interfaces"
import { Link } from "react-router-dom"
import { Bars } from "react-loader-spinner"
import { primary } from "../../../app/global/styles"
import logo from '../../../assets/Imagotipo.png'
import { Container, Loader } from "./index.style"




function Header({ status }: IStatus): JSX.Element {
  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt="Podcaster" />
      </Link>

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