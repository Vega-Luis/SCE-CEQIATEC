import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ImgUser from "../images/user-icon.png";
import Image from "react-bootstrap/Image";
import ImgInfo from "../images/inf-icon.png";
import ImgPerson from "../images/person-icon.png";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

function Aside() {
  return (
    <Container
      style={{ backgroundColor: "#2EB394", height: "100%", padding: "13%" }}
    >
      <Row>
        <Col xs={3}>
          <Image src={ImgUser} alt="Icono de usuario" />
        </Col>
        <Col>
        <Stack gap={0}>
          <h5>ID: JLV-323</h5>
          <h4><strong>Javier Leiva Valverde</strong></h4>
          <h5>Administrador</h5>
          </Stack>
        </Col>
      </Row>
      <Stack gap={3}>
        <Button size="lg">
          <Image src={ImgInfo} />
          Equipos
        </Button>
        <Button size="lg">
          <Image src={ImgPerson} />
          Gestion de Usuarios
        </Button>
      </Stack>
    </Container>
  );
}
export default Aside;
