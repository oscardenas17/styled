import styled from "styled-components";


const  P = styled.p`
  font-size: 24px;
  color: red;
`

const Content = styled.div`
  padding: 20px 25px;
`

const Button = styled.button`
  transition: box-shadow 0.2 ease;
  background-color: ${props => props.primary ? 'red': 'white'};
  color: ${props => props.primary ? 'white': 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius; 4px;

  &:hover{
    box-shadow: 1px 2px 5px rgb(0,0,0,0.3);
  }

  &.secondary{
    background-color:blue;
    border: solid 2px blue;
    color: white;
  }

  .info{
    font-zise: 28px;
  }
`

const BlockButton = styled(Button)`
  width: 100%;
  fonts-size: 24px;
`

//para pasar estilo con styled component, destructuring al classname
const Link = ({className, ...props}) => {
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color: blue;
`

//componente con propiedad pasada type y classname
//const Input = ({className}) =>{
//  return <input type="text" className={className}> </input>
//}

//componente de arriba con styled COmponent
//propiedades
const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
})) //estilos ``
` 
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color};
`

//cambiar propo type del input
const Password = styled(Input).attrs({
  type:'password'
})`
font-size: 15px;
border: 1px solid green;

`

function App() {

  return (
    <Content>
      <P>Hola soy un parrafo</P>

      <Button >Enviar <p className="info">css only a hijo</p></Button>

      <Button primary>Enviar</Button>

      <Button className="secondary">Enviar</Button>
         
      <BlockButton primary as="a" href="#"> Enviar como link a</BlockButton> 

      <BlockButton primary>Enviar2</BlockButton> 
      
      <Link> link </Link>

      <StyledLink> LInk con estyle component</StyledLink>

      <Input></Input>
      {/* //<Input color='green' /> */}
      <Password />

    </Content>
  );
}

export default App;
