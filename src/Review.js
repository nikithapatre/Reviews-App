import React, {useState} from "react"; 
import people from "./data"; 
import { FaChevronRight, FaChevronLeft, FaQuoteRight} from "react-icons/fa";


const Review = () => {
    const [index, setIndex] = useState(0) ;
    console.log(people); 
    const { image, job, name, text } = people[index];

    const countNumber = (num) => {
        if(num > people.length -1) {  //when array ends, return 0
            return 0; 
        } else if (num < 0) {       //less than 0, return last index. .length-1
 return people.length -1
        } else {
            return num;
        }
    }

const nextClick = () => {
setIndex((index) => {
    let newIndex = index + 1;
    return  countNumber(newIndex)
})
 }

const prevClick = () => {
setIndex((index) => {
    let newIndex = index - 1;
    return countNumber(newIndex)
})
}

const randomClick = () => {
    // console.log(Math.random());
      setIndex((index) => {
     const random = Math.floor(Math.random() * people.length);
     return countNumber(random);
     } )
}

return (
        <article> 
        <div className="image-container">
          <img src={image} alt={image} className="img" />
        <span className="quote-icon">
           <FaQuoteRight />
        </span>
        </div>
        <h4 className="author">{name}</h4>
        <h6 className="job">{job}</h6>
        <p className="text">{text}</p>

<div className="btn-container">
<button className="prev-btn" onClick={prevClick}>
    <FaChevronLeft />
</button>
<button className="next-btn" onClick={nextClick}>
    <FaChevronRight />
</button>
</div>

<div className="random-container">
<button className="random-btn" onClick={randomClick}>
    Random Reviews
</button>
</div>

</article>
    )
    
}

export default Review; 