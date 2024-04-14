
import MainQuestion from './components/MainQuestion/MainQuestion';
import ArgBase from './components/ArgumentBase';
import Button from './components/Button';
import Header from './components/Header';

function App()
{
  return (
    <div>
      <Header />
      <div>
        <MainQuestion questionText="Есть ли жизнь на марсе?" views={45} arguments={50} />
        <div className="argumentsContainer">
          <div className="argSides leftSide">
            <ArgBase side="left" description="я думаю, что нетn" votesFor={5} votesvotesAgainst={10} contrArgs={55} contrArgs_unverif={60} />
          </div>
          <div className="argSides rightSide">
            <ArgBase side="left" description="я думаю, что нетn" votesFor={5} votesvotesAgainst={10} contrArgs={55} contrArgs_unverif={60} />
          </div>
        </div>
      </div>
      {/* <Button test="test">Кнопка</Button> */}
      <h1>Hello React</h1>
    </div>
  )
}

export default App
