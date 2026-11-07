import Card from './components/card.jsx'
//we can import components and use them at once place for performing different operations 
// we can use {} to print the values of variables


function App(){
  const name="krishna"
  const wealth="infinite"
  return (
   <>
   <h1>Hare krishna</h1>
   <h2>Hari boll</h2>
   {Card()}
{/*  we can use components like this also <Card /> */}
   <h1>{name} has {wealth} wealth , he is all opulent</h1>
   </>
  )
}

export default App