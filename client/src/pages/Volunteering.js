import React from "react";
import { Form, Checkbox, Grid, Container } from "semantic-ui-react";
import './Volunteering.css';

const Volunteering = () => (
  <div id = "volunteer">
    <Grid style={{padding: '4vw'}}>
      <Grid.Row fluid>
        <h1 style={{color: '#000000'}}>Volunteering Application</h1>
      </Grid.Row>

      <Grid.Row>
        <Form style={{width: '100%', padding: '2vw'}}>
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
      </Grid.Row>
    </Grid>
  </div>
);
//console.log(everything)
export default Volunteering;
