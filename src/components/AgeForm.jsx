import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const AgeForm = ({ handleUserAgeSelect }) => {
  return (
    <Stack gap={1} className="col-md-5 col-10 col-sm-6 mx-auto">
      <p>Translate from...</p>
      <Form.Select onChange={handleUserAgeSelect} name="userAgeGroup">
        <option value="">Open this select menu</option>
        <option value="genZ">Gen Z</option>
        <option value="boomer">Boomer</option>
      </Form.Select>
    </Stack>
  )
}

export default AgeForm;