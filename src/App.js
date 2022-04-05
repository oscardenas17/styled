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

    </Content>
  );
}

export default App;
