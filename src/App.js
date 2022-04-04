import styled from "styled-components";


const  P = styled.p`
  font-size: 24px;
  color: red;
`

const Content = styled.div`
  padding: 20px 25px;
`

const Button = styled.button`
  background-color: ${props => props.primary ? 'red': 'white'};
  color: ${props => props.primary ? 'white': 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius; 4px;
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

function App() {

  return (
    <Content>
      <P>Hola soy un parrafo</P>

      <Button >Enviar</Button>

      <Button primary>Enviar</Button>
         
      <BlockButton primary as="a" href="#"> Enviar como link a</BlockButton> 

      <BlockButton primary>Enviar2</BlockButton> 
      
      <Link> link </Link>

      <StyledLink> LInk con estyle component</StyledLink>

    </Content>
  );
}

export default App;
