import './Rating.css';

function Rating({rating}){

    const ratings = ()=>{
        const starFull = '«';
        const starEmpty = '¶';
        let stars = '';
        for (let i = 0; i < rating; i++){
            stars += starFull;       
        }

        for (let i = 0; i < (5-rating); i++) {
            stars += starEmpty;
            
        }
        return stars;
    }
    return(
        <span>{ratings()}</span>
    );
}

export default Rating;