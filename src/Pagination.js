import React from 'react'
import './pagination.css'
const renderData = (data,currentPage) => {
    console.log(data);
    return (
        <ol start={((currentPage-1)*10)+1}>
            {
                data.map((ele, key) => {
                    return (
                        <li key={((currentPage-1)*10)+key}>{JSON.stringify(ele)}<hr /></li>
                    )
                })
            }
        </ol>
    )
}
const Pagination = (props) => {
   
    const { currentPage,
    } = props;
    const data = props.response;

    const handlePrevClick = () => {
        props.onPrevClick();
    }
    const handleNextClick = () => {
        props.onNextClick();
    }
    const handlePageClick = (e) => {
        props.onPageChange(Number(e.target.id));
    }

  

    return (
        <div className="main">
            <div className="mainData">
                {renderData(data,currentPage)}
            </div>

            <ul className="pageNumbers">
                <li>
                    <button onClick={handlePrevClick} 
                    >Prev</button>
                </li>
               
                <li>
                    <button onClick={handleNextClick} 
                    >Next</button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
