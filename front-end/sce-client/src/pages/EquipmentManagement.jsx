import React from "react";
import Aside from "../components/Aside";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import { getEquipmentList } from "../calls/ApiCalls";
import Image from "react-bootstrap/Image";
import ImgCreate from "../images/create-equipment.png";
import ImgDelete from "../images/delete-equipment.png";
import ImgDetails from "../images/see-details.png";
import Row from "react-bootstrap/Row";
import OptionsBar from "../components/OptionsBar";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function EquipmentMagement() {
  const navigate = useNavigate();
    const [equipmentList, setEquipmentList] = useState([]);
  
    useEffect(() => {
      getEquipmentList( "", "", "")
        .then((res) => {
          console.log(res.data);
          setEquipmentList(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, []);

    return (
    <Container fluid style={ {height: '1080px'}}>
      <Row style={ {height: '100%'}}>
        <Col xs={3}>
          <Aside />
        </Col>
        <Col>
          <OptionsBar />
          <Row>
            <Col>
            <Button variant="outline-primary" size="lg"
            >Filtrar</Button>
            </Col>
            <Col xs={3}>
            <Button
            variant="outline-ligth">
            <Image src={ImgDetails} />

            </Button>
            <Button
            variant="outline-ligth">
            <Image src={ImgDelete} />
              </Button>
            <Button
            variant="outline-ligth"
            onClick={() => {
              navigate('/create-equipment');
            }}>
            <Image src={ImgCreate} />
              </Button>
            </Col>
          </Row>
          <Row>
            <Table hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo de equipo</th>
                        <th>Ubicación</th>
                        <th>Responsable</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        equipmentList.map(function (equipment, index) {
                            return(
                                <tr key={index}>
                                    <td> <Form.Check
                                        label={equipment.Id}/></td>
                                    <td>{equipment.Type}</td>
                                    <td>{equipment.Location}</td>
                                    <td>{equipment.Responsible}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default EquipmentMagement;
