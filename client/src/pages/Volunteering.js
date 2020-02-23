import React from "react";
import { Form, Checkbox, Grid, Container } from "semantic-ui-react";
import './Volunteering.css';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'x', text: 'Prefet not to say', value: 'no' },
]
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
            <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
            />
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
          <Form.Input
            fluid
            label="Best form of contact"
            placeholder="..."
          />
          <Form.Input
            fluid
            label="How did you learn about our Volunteering Program?"
            placeholder="Tell us here"
          />
          <Form.Group>
            <Checkbox label="I am interested in long-term involvement" />
            <Checkbox label="I am interested in short-term involvement" />
          </Form.Group>
          <Form.Group>
            <Checkbox label="I am receiving class credit for volunteering hours served" />
            <Checkbox label="I am receiving credit at work for volunteering hours served" />
          </Form.Group>
          <Form.Input
            fluid
            label="Is there a specific volunteer opportunity that you are interested in ?"
            placeholder="Tell us here"
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Grid.Row>
    </Grid>
  </div>
);
//console.log(everything)
export default Volunteering;
