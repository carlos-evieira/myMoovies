import {RiSearchLine} from "react-icons/ri"

import { Input } from "../../components/Input"
import { Container } from "./styles"


export function Details(){
  return(
    <Container>
      <Input icon={RiSearchLine} />
      <h1>Olá, </h1>
      <span>Kadu Vieira</span>

    </Container>
    
  )
}