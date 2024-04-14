function ArgBase(props)
{
  return (
    <div className="argBase" data-side={props.side}>
      <div className="argDescription"> {props.description} </div>
      <div className="argVotes">
        <div className="arg-for"> {props.votesFor} </div>
        <div className="arg-against"> {props.votesAgainst} </div>
      </div>
      <div className="contrArguments">
        <div className="arg-contrArg"> {props.contrArgs} </div>
        <div className="arg-contrArg-unverif"> {props.contrArgs_unverif} </div>
      </div>
    </div>
  )
}

export default ArgBase