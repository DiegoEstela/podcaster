import { Grid } from "react-loader-spinner"
import { primary } from "../../../app/global/styles"
import { Container, Loader } from "./index.style"

function FullLoader({ active }: { active: boolean }): JSX.Element {
    return (
        <Container>
            {active ?
                <Loader>
                    <Grid
                        height="200"
                        width="200"
                        color={primary}
                        ariaLabel="grid-loading"
                        radius="12.5"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={active}
                    />
                </Loader>
                : ''
            }

        </Container>
    )
}

export default FullLoader