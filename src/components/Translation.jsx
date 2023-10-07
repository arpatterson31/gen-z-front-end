import '../styles/translation.css';

const Translation = ({ translationResult }) => {

  return (
    <div className="speech-bubble col-md-5 col-10 col-sm-6 mx-auto">
      <p>{translationResult}</p>
    </div>

  )

}

export default Translation;