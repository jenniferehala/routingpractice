import { useParams } from "react-router";


const Color = (props) => {
    const {word, color1, color2} = useParams();

    if(isNaN(word)){
        return (
            <h1 style={ {color: color1, backgroundColor: color2} }>{word}</h1>
        );
    
    } else {
        return <h1> The number is: {word}</h1>
    }

    
}

export default Color;