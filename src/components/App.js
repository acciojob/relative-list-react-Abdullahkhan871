import React from 'react'

const App = () => {
    let data= [
      {
        "name": "Grandparents",
        "key": "relativeListItem1"
      },
      {
        "name": "Uncle Ramesh",
        "key": "relativeListItem2"
      },
      {
        "name": "Aunt Meera",
        "key": "relativeListItem3"
      },
      {
        "name": "Cousin Priya",
        "key": "relativeListItem4"
      },
      {
        "name": "Cousin Aman",
        "key": "relativeListItem4"
      }
    ]
    
  
  return (
    <div id="main">
      <ol id='relativeList'>
              {
                 data.map(item =>(
                    <li id={item.key}>{item.name}</li>
                 ))
               }
      </ol>
    </div>
  )
}

export default App
