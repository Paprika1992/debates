import './MainQuestion.css';

//Не должно быть голосов ЗА и ПРОТИВ и вопроса. Хотите изучить предмет - читайте аргументы за и против

function MainQuestion(props)
{
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
              <button className="mainQuestion-button-agree"> {"Согласен"} </button>
              <button className="mainQuestion-button-disagree"> {"Не согласен"} </button>
          </div>
        </div>
    </div>
  )
}

export default MainQuestion