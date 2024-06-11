
import MainQuestion from './components/MainQuestion/MainQuestion';
import CompOne from './components/CompOne/CompOne';
import CompTwo from './components/CompTwo/CompTwo';
import ArgBase from './components/ArgumentBase';
import Header from './components/Header';
import TabBlock from './components/TabBlock/TabBlock';
import { useState } from 'react';

function App()
{
  let [tabName, setTab] = useState(null)

  return (
    <div>
      <Header />
      <div>
        <MainQuestion questionText="Есть ли жизнь на марсе?" views={45} arguments={50} />
        <div className="argumentsContainer">
          <div className="argSides leftSide">
            <ArgBase side="left" description="я думаю, что да" votesFor={5} votesvotesAgainst={10} contrArgs={55} contrArgs_unverif={60} />
          </div>
          <div className="argSides rightSide">
            <ArgBase side="left" description="я думаю, что нетn" votesFor={5} votesvotesAgainst={10} contrArgs={55} contrArgs_unverif={60} />
          </div>
        </div>
      </div>
      <TabBlock onHide={(current) => setTab(current)} />

      {tabName == 'compOne' ? <><CompOne /></> : <><CompTwo /></>}
      
    </div>
  )
}

export default App
