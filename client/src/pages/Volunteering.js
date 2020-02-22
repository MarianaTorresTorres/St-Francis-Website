import React from "react";
import { Form, Checkbox, Grid, Container } from "semantic-ui-react";

const Volunteering = () => (
  <>
    <Container>
      <h1>Volunteering Application</h1>
    </Container>
    <Container>
      <h1>General Information</h1>
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Contact Phone"
            placeholder="(123)-456-7890"
          />
          <Form.Input
            fluid
            label="Alternate Phone"
            placeholder="(123)-456-7890"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Email Adress"
            placeholder="albert.gator@gmail.com"
          />
          <Form.Input
            fluid
            label="Mailing Adress"
            placeholder="Mailing Adress"
          />
        </Form.Group>
        <Checkbox label="I am over 18" />
      </Form>
    </Container>
  </>
);

export default Volunteering;
