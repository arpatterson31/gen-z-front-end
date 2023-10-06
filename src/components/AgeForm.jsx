import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const AgeForm = ({ handleUserAgeSelect }) => {
  return (
    <Stack gap={2} className="col-md-5 col-10 col-sm-6 mx-auto">
      <h2>I am...</h2>
      <Form.Select onChange={handleUserAgeSelect} name="userAgeGroup">
        <option value="">Open this select menu</option>
        <option value="genZ">Gen Z</option>
        <option value="millennial">a Millennial</option>
        <option value="boomer">a Boomer</option>
      </Form.Select>
    </Stack>
  )
}

export default AgeForm;