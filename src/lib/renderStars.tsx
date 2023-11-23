import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";


export  const renderStars = (fullStars: number, hasHalfStar: boolean) => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i}>&#9733;</FaStar>); // Full star
    }

    if (hasHalfStar) {
        stars.push(
            <FaStarHalfStroke 
                key="half"
                style={{ width: "16%"}}
            ></FaStarHalfStroke>
        ); // Half star
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<FaRegStar  key={`empty-${i}`}>&#9734;</FaRegStar>); // Empty star
    }

    return stars;
};