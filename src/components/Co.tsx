import styled from "styled-components";

const Co = ({name, iconReference, tagline, role, what}: {name: string, iconReference: string, tagline: string, role: string, what: string}) => {
  return (
    <Container>
      <Header>
        <img draggable={false} src={iconReference}/>
        <div>
          <h3>{name}</h3>
          <span>{tagline}</span>
        </div>
      </Header>
      <Content>
        <h3>Role</h3>
        <p>{role}</p>
        <h3>What</h3>
        <p>{what}</p>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid #101010;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #101010;
  padding: 1rem;
  /* box-sizing: border-box; */

  img {
    width: 70px;
    height: 70px;
    border-radius: 25%;
    margin-right: 1rem;
  }

  div {
    h3 {
      margin: 0;
    }

    span {
      color: #ccc;
    }
  }
`;

const Content = styled.div`
  padding: 1rem;
  box-sizing: border-box;
`;

export default Co;