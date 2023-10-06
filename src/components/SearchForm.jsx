import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchForm = () => {

  let handleFormSubmit = e => {
    e.preventDefault();
    console.log('did this submit?');
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