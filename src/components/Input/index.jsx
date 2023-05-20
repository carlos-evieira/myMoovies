import {Container} from './styles'

export function Input({ icon: Icon, ...rest}){
  return(
    <Container>
        
        {Icon && <Icon size={20} />} {/* se existir o ícone , então ele mostrará */}
        <input {...rest} placeholder='Pesquisar pelo título'/>
    </Container>
    
  )
}