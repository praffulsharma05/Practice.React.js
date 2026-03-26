 

 
const App = () => {
  const numbers = [10,20,30,40,50];
//const xyz =  numbers.map(numbers=>numbers*2);
//console.log(xyz)
  return (
    <div>
      <h1>Number</h1>
      {numbers.map(num=><p className="text-lg gap-8">  {num*2}</p>)}
       
    </div>
  );
};

export default App;