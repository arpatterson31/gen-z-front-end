import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import AgeForm from '../components/AgeForm';
import SearchForm from '../components/SearchForm';
import Translation from '../components/Translation';

const Main = () => {

  const [userAgeGroup, setUserAgeGroup] = useState('');
  const [translationResult, setTranslationResult] = useState('');

  let handleUserAgeSelect = (event) => {
    setUserAgeGroup(event.target.value);
  }

  return (
    <Stack gap={5}>
      <AgeForm handleUserAgeSelect={handleUserAgeSelect} />
      { userAgeGroup && <SearchForm />}
    </Stack>
  )
}

export default Main;