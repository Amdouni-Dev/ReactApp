export const testFunction=(tab)=>{
    tab.map(person=>{
        person.age>18? console.log(`${person.name}  est adulte `):console.log(`${person.name}  n'est pas adulte`)
    })
}
      
  