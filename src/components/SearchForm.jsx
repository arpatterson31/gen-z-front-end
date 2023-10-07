import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const SearchForm = ({ userAgeGroup, setTranslationResult, setLoading }) => {

  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  let handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTranslationResult('')

    if (userAgeGroup === 'genZ') {
      try {
        let url = `${SERVER_URL}/genZToBoomer`
        let data = {
          userInput: e.target.searchTerm.value
        }
        let apiResponse = await axios.post(url, data)

        setTranslationResult(apiResponse.data);
        setLoading(false);

      } catch (error) {
        console.log(error);
      }
    } else if (userAgeGroup === 'millennial' || userAgeGroup === 'boomer') {
      try {
        let url = `${SERVER_URL}/boomerToGenZ`
        let data = {
          userInput: e.target.searchTerm.value
        }
        let apiResponse = await axios.post(url, data);
  
        setTranslationResult(apiResponse.data);
        setLoading(false);

      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Stack gap={0} className="col-md-5 col-10 col-sm-6 mx-auto">
      <p>To...</p>
      <Form.Select name="translateTo">
        <option value="oppositeAgeGroup">{userAgeGroup === "genZ" ? 'Boomer' : 'Gen Z'}</option>
      </Form.Select>

      <Form
        onSubmit={handleFormSubmit}
        className="mt-2"
      >
        <Form.Control
          as="textarea"
          rows={3}
          className="me-auto"
          placeholder={userAgeGroup === 'genZ' ? 'Change this to vintage lingo...' : 'Convert this so I can sound cool...'}
          name="searchTerm"
        />
        <Button
          type="submit"
          className="mt-3"
          variant="outline-dark"
        >
          Submit
        </Button>
      </Form>
    </Stack>
  )
}

export default SearchForm;