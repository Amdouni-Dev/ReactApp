import logo from './logo.svg';
import { ReactDOM } from 'react';
import './App.css';
import { FindLongestWord2 } from './atelier0/Exercises';
import { testFunction } from './atelier0/TestAdulte';
import Welcome from './atelier1/TestIndiv/app';
import ClassComponent from './atelier1/ComponentsClasse/ClassComponent';
import Mounting from './atelier1/ComponentsClasse/Mounting';
import UnMounting from './atelier1/ComponentsClasse/UnMoiunting';
import Updating from './atelier1/ComponentsClasse/Updating';
import Product from './atelier1/Components/Product';
// import Products from './atelier1/Components/Products';
//import Products from './atelier1/Correction/products';
import FuntionalComponent from './Atelier2/Functionnalcompoenent/FunctionalCompoenent';
import {Route,Routes} from 'react-router-dom';
//import Notfound from './Atelier2Routage/Components/NotFound';
import CustomNavbar from './Atelier2Routage/Components/NavBar';
import { lazy, Suspense } from 'react';
import ReduxComponent from './Redux/ReduxComponent'
const Home = lazy(()=>import('./Atelier2Routage/Components/Home'));
const UpdateProduct = lazy(()=>import('../src/Atelier2Routage/Components/UJpdateProduct'));

const ProductDetails = lazy(()=>import('../src/Atelier2Routage/Components/ProductDetails'));
const AddProduct = lazy(()=>import('../src/Atelier2Routage/Components/AddProduct'));
const Products = lazy(()=>import('../src/Atelier2Routage/Components/products'));
const ProductLayout = lazy(()=>import('./Atelier2Routage/Components/ProductLayout'));
const Notfound = lazy(()=>import('./Atelier2Routage/Components/NotFound'));
function App() {

//  ReactDOM.render(<Welcome />)

  return (

    <div style={{ backgroundColor:"light" }} className="App">
 <Suspense fallback={<h1>Loaading ....</h1>}>
    <CustomNavbar/>
    <Routes>
      <Route path="*" element={<Notfound/>}/>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/home/:username" element={<Home/>}/> 
      <Route path="/Redux"  element={ <ReduxComponent /> } ></Route>


      <Route path="/products" element={<ProductLayout />}>
          <Route path="list" element={<Products />}/>
         <Route path="add" element={<AddProduct/>}/> 
      <Route path='update/:id' element={<UpdateProduct />}/>

          <Route path=":id" element={<ProductDetails/>}/>
      </Route>
    </Routes>
    </Suspense>
      {/* <header className="App-header"> */}
  


      {/* <ClassComponent /> */}
      {/* <Mounting></Mounting> */}
      {/* <UnMounting></UnMounting> */}
     {/* <h1>Correction</h1> */}
     {/* <Updating/>  */}
     <br/>
      {/* <Product></Product>  */}
      <br/>
      {/* <Products></Products>  */}
{/* <FuntionalComponent  titre="functionnal componenet"></FuntionalComponent> */}
      {/* </header> */}
    </div>
  );
}

export default App;









/** Test Atelier 0

import logo from './logo.svg';
import './App.css';
import { FindLongestWord2 } from './atelier0/Exercises';
import { testFunction } from './atelier0/TestAdulte';
import Welcome from './atelier1/TestIndiv/app';
import { ReactDOM } from 'react-dom/client';
import Mounting from './atelier1/ComponentsClasse/Mounting';
import Product from './atelier1/Components/Product';
import { FuntionalComponent } from './atelier0/Atelier2/Functionnalcompoenent/FunctionalCompoenent';
import ReduxComponent from './Redux/ReduxComponent';
function App() {
  function hoisting(){
    console.log(a)
    var a=10;
    console.log(a)
  }
  //hoisting();
  const num =90;
  console.log(num)
  //num = 77;
  let x =10;
  x=100;
  if(x>5){
    var y =5;
    const z=20;
    console.log(y+z)
    console.log(x+y)
  }
  //console.log(z)
  console.log(y)

  let f = nom=> console.log(nom)
  f("test")

  const t = [1,2,3,4]
  let newt=t.filter(p=>p<2)
  console.log(newt)

  const users = [
    {name:'mohamed',age:15},
    {name:'salma',age:20},
    {name:'kamel',age:16},
    {name:'mariem',age:50}
  ]
  
    let numbers=[2,1,3,6]
   

console.log("***********Exercice4")
users.push()

  const students = [

'salma',
    'kamel',
    'mariem'
  ]
  console.log("*************************")
  console.log(FindLongestWord2(students))
  const [{name,age},p2,p3,p4]=users
  const testAdulte = users.map(person => person.age > 18 ? console.log(`${person.name} est un adulte`):console.log(`${person.name} n'est pas un adulte`))
  //console.log(p1)
//const {name,age} = p1
console.log(name,age)
const classe = {
  niveau:"4twin",
  nbEtudiant:15
}
const newClasse = {...classe,email:"4twin@esprit.tn"}
console.log(newClasse)
const newUsers = [...users,{name:'spreadTest',age:50}]
console.log(newUsers)
let name2="Mouna AMdouni"
function getetudiant(n){
  return n;
}

function testclick(){
  alert("Bonjour Mannou 2")
}
const animals=[
   "Lapin",
   "Poule",
   "Tigre" 
]

const utilisateurs=[
  {name:'Ahmed',age:50},
  {name:'ali',age:10},
  {name:'Mouna',age:24},
  {name:'amal',age:13},

]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  
        />
        <p
        // onClick={testclick()}
                 onClick={()=>alert('Bonjour Mannou')}
>
          Bonjour {getetudiant("Test")}
          Hi {name2}
            Edit <code>4twin6</code> and save to reload.
        </p>
        
<h2>
  afficher un tableau
</h2>




{
  users.map((obj)=>{
    return <p style={{color:'red'}}>{obj.name}</p>
  })
}


<h2>Tableaux  </h2>
<h3>********Concat</h3>

{
  students.concat(" Mouna Amdouni bel concat ")
}

<h3>******Filter</h3>
{
  students.filter(word => word.length>5)
}

<h3>******Find</h3>
{
  students.find(word => word.length>2) // ken awel element lbe9i lee
}

<h3>*******Map</h3>
{
  students.map(x=> x+"Hi") // ay kelma yzidha hi w x hiya l element tableau 
}
<h3>******FindIndex</h3>

{
  students.findIndex(x=> x.length>5)// ken mel9a  xhay yraja3 -1w yabd yehseb m 0
}
<h3>*******Push</h3>
{
  students.push("Ahmed AMdouni")
  
}
<p>{students}</p>
<h3>********Reduce</h3>
{
  numbers.reduce( (acc,curr)=>acc+curr ) // numbers=[1,3,46] ==> 50  
  
}

<h3>******* reverse </h3>

{
  numbers.reverse()
}
<h5>Tableaux : {numbers}</h5>
<h3>******* shift </h3>
{
  numbers.shift() //   let numbers=[2,1,3,6]
}
<h3>********* Unshift</h3>
{
  numbers.unshift()
}

{
  // lezem nes2lou aala shift w unshift
}

<h3>******Sort</h3>

{
  numbers.sort()
}

<h3>******ForEach</h3>
{
  numbers.forEach(element => {
   console.log(element)
  })
}

<h3>*******Join</h3>
{
  numbers.join('-') //1-2-3
}
<h3>{animals}</h3>
{animals.join('-') //Lapin-Poule-Tigre
} 
<h3>******Slice</h3>
{
//animals.slice(0,1) // Lapin
animals.slice(-2) //PouleTigre //yabda yehseb melekher ema yraja3li chaine mel ysar lel ymin 
 
}
<h3>********Splice</h3>
{
  animals.splice(2,1,'Chatte')// Tigre
}
<p></p>
{
  animals //LapinPouleTigre
}
<h3>******Unshift</h3>
{
  animals.unshift('chien','Gazelle')
}
<p>taille tableau</p>
{
  animals.join('-') //chien-Gazelle-Lapin-Poule-Chatte
}

<h1>Test Adulte**</h1>
{
testFunction(utilisateurs)

}


<h5 style={{color:'red'}}>Test 
Adulte</h5>

<h1  style={{color:'green'}} ></h1>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/