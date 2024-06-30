import { Container, Form, Button } from 'react-bootstrap';

export default () => {
  return (
    <Container className="text-center pt-5">
      <p className="fs-3 mb-2">¿Quieres trabajar con nosotros?</p>
      <p className="fs-4 mb-2">¡Contactanos!</p>
      <Form>
        <Form.Group className="mb-3" controlId="form-input">
          <Form.Label>Tu correo:</Form.Label>
          <Form.Control type="email" placeholder="nombre@ejemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form-textarea">
          <Form.Label>Cuentanos más:</Form.Label>
          <Form.Control as="textarea" rows={2} />
        </Form.Group>
        <Button variant="danger">Enviar</Button>
      </Form>
    </Container>
  );
};