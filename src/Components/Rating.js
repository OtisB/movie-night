import './Rating.css';

function Rating({ rating }) {

    const ratings = () => {
        const starFull = <span className='star-full'>&#9733;</span>;
        const starEmpty = <span>&#9734;</span>;;
        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(starFull);
        }

        for (let i = 0; i < (5 - rating); i++) {
            stars.push(starEmpty);
        }
        return stars;
    }
    return (
        <span>{ratings()}</span>
    );
}

export default Rating;