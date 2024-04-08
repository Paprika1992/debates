
import MainQuestion from './components/MainQuestion';
import ArgBase from './components/ArgumentBase';
import Header from './components/Header';

function App()
{
  return (
    <div>
      <Header />
      <MainQuestion questionText="Есть ли жизнь на марсе?" views={45} arguments={50} />
      {/* <ArgBase /> */}
      <h1>Hello React</h1>
    </div>
  )
}

export default App
