function ArgBase(props)
{
  return (
    <div class="argBase">
      <div class="argDescription"> {props.description} </div>
      <div class="argVotes">
        <div class="arg-for"> {props.votesFor} </div>
        <div class="arg-against"> {props.votesAgainst} </div>
      </div>
      <div class="contrArguments">
        <div class="arg-contrArg"> {props.contrArgs} </div>
        <div class="arg-contrArg-unverif"> {props.contrArgs_unverif} </div>
      </div>
    </div>
  )
}

export default ArgBase