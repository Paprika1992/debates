import './MainQuestion.css';
import Button from './../Button.jsx';
import PopupForm from './../Popup/PopupForm.jsx';

//Не должно быть голосов ЗА и ПРОТИВ и вопроса. Хотите изучить предмет - читайте аргументы за и против

function MainQuestion(props)
{
  function callOpinionForm (opinion)
  {
    console.log(opinion)
    let opinionForm_class;
    switch (opinion) {
      case 'agree':
        opinionForm_class = 'agree'
        break;
      case 'disagree':
        opinionForm_class = 'agree'
        break;
      default:
        break;
    }

    return <PopupForm />
  }

  return (
    <div>
        {/* Автоматически добавлять вопросительный знак к тексту вопроса если не передан */}
        <div className="mainQuestion"> 
          <div className="mainQuestionDescr"> {props.questionText} </div>
          <div className="mainQuestion-stats">
            <div className="mainQuestion-stats-views"> {props.views} </div>
            <div className="mainQuestion-stats-arguments"> {props.arguments} </div>
          </div>
          <div className="mainQuestion-buttons">
            <Button className="mainQuestion-button-agree" onClick={() => callOpinionForm('agree')} > Согласен </Button>
            <Button className="mainQuestion-button-disagree" onClick={() => callOpinionForm('disagree')} > Не согласен </Button>
          </div>
        </div>
    </div>
  )
}

export default MainQuestion