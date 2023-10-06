import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';
import AgeForm from '../components/AgeForm';
import SearchForm from '../components/SearchForm';
import Translation from '../components/Translation';

const Main = () => {

  const [userAgeGroup, setUserAgeGroup] = useState('');
  const [translationResult, setTranslationResult] = useState('');
  const [loading, setLoading] = useState(false);

  let handleUserAgeSelect = (event) => {
    setTranslationResult('');
    setLoading(false);
    setUserAgeGroup(event.target.value);
  }

  return (
    <Stack gap={5}>
      <AgeForm handleUserAgeSelect={handleUserAgeSelect} />
      {
        userAgeGroup && (
          <>
            <SearchForm
              userAgeGroup={userAgeGroup}
              setTranslationResult={setTranslationResult}
              setLoading={setLoading}
            />
            {
              loading && <Spinner animation="border" variant="primary" />
            }

            { 
              translationResult && <Translation />
            }
          </>
        )
      }

    </Stack>
  )
}

export default Main;