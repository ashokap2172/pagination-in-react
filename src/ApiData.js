import React, {useEffect, useState} from 'react'
import Pagination from './Pagination';

const ApiData = ()=>{
  const [passengersData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(()=>{
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((json) => { 
      console.log(json);
      setData(json.slice((currentPage-1)*10,currentPage*10));
      setLoading(false);});
      
  },[currentPage]);
    
  const onPageChange= (pageNumber)=>{
    setCurrentPage(pageNumber);
  }

  const onPrevClick = ()=>{
     
      if (currentPage>0) {
        setCurrentPage(prev=> prev-1);
      } else {
        setCurrentPage(prev=> prev);
      }
   }
  
  const onNextClick = ()=>{
     
      if (currentPage<25) {
        setCurrentPage(prev=>prev+1);
      } else {
        setCurrentPage(prev=>prev);
      }
    }

  const paginationAttributes = {
    currentPage,
    response: passengersData,
  };

  return(
    <div>
        <h2>API Data</h2>
        {!loading ? <Pagination {...paginationAttributes} 
                          onPrevClick={onPrevClick} 
                          onNextClick={onNextClick}
                          onPageChange={onPageChange}
                          key={Math.floor(Math.random() * 100)}/>
        : <div> Loading... </div>
        }
    </div>
)
      
 }
export default ApiData;