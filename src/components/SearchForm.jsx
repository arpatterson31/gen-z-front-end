
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchForm = ({ userAgeGroup, setTranslationResult, setLoading }) => {

  

  let handleFormSubmit = e => {
    e.preventDefault();
    setLoading(true);

    if(userAgeGroup === 'genZ'){
      console.log('API to hit genZ route');
      setTranslationResult('api response data');
      setLoading(false)
    } else if(userAgeGroup === 'millennial' || userAgeGroup === 'boomer'){
      console.log('Api to hit boomer route');
      //setTranslationResult('api response data');
      // setLoading(false)
    }
  }

  return (
    <Form
      className="col-md-5 col-10 col-sm-6 mx-auto"
      onSubmit={handleFormSubmit}
    >
      <Form.Control
        as="textarea"
        rows={2}
        className="me-auto"
        placeholder="Add your phrase here..." name="searchTerm"
      />
      <Button
        type="submit"
        className="mt-3"
        variant="outline-dark"
      >
        Submit
      </Button>
    </Form>
  )
}

export default SearchForm;