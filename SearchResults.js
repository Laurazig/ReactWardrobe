// import React, { useState, useEffect } from "react";
// import WorkshopList from "./leipzig-wardrobe-react/src/Views/WorkshopList";


// const SearchResults = props => {
//     const [ workshopCard, setWorkshopCard ] = useState([]);
//     const [ filteredWorkshops, setFilteredWorkshops ] = useState([]);

//     setWorkshopCard(props.workshops)

//     useEffect(() =>{
//         let foundWorkshops = workshopCard.filter(workshop => workshop.name.toLowerCase().inculdes(props.searchTerm.toLowerCase()) )
//         setFilteredWorkshops(foundWorkshops);
//     },[props.searchTerm, workshopCard])

//     return (
//         <>
//             <div>
//                 <input  type="text"  
//                     placeholder="search for a workshop"
//                     value={props.searchTerm}
//                     onChange={props.handleChangeSearch  }                
                    
//                 />
//                 <button>search</button>
            
//             </div>
//             <div className="results">
//                 {filteredWorkshops.map((workshop) => {
//                     return <WorkshopList key={workshop.id} id={workshop.id} name={workshop.name}  />
//                 })}

//             </div>  
//         </>
//     )
// }
// export default SearchResults
