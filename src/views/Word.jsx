import { useParams } from "react-router";


const Word = (props) => {
    const {word} = useParams();
    return (
        <div>
            <h1>The word is: {word}</h1>
            {props.children}
        </div>
    )
}

export default Word;