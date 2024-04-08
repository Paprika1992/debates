function MainQuestion(props)
{
  return (
    <div>
        {/* Автоматически добавлять вопросительный знак к тексту вопроса если не передан */}
        <div class="mainQuestion"> {props.questionText} </div>
        <div class="mainQuestion-stats">
            <div class="mainQuestion-stats-views"> {props.views} </div>
            <div class="mainQuestion-stats-arguments"> {props.arguments} </div>
        </div>
    </div>
  )
}

export default MainQuestion