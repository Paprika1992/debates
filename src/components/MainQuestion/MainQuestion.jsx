import './MainQuestion.css';
import Button from './../Button.jsx';
import PopupForm from './../Popup/PopupForm.jsx';
import { useState } from 'react';

//Не должно быть голосов ЗА и ПРОТИВ и вопроса. Хотите изучить предмет - читайте аргументы за и против

function MainQuestion(props)
{
  let [ component, testFunc ] = useState();
  function callOpinionForm (opinion)
  {
    testFunc(opinion)
    console.log(opinion)

    // return <PopupForm />
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
        {component ? <PopupForm dataOpinion={component} /> : "пусто"}
    </div>
  )
}

export default MainQuestion