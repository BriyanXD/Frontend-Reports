interface TypeProps {
    setFunction: (value:boolean) => void;
    message: string;
    bg: string;
    text: string;
}


export const Message = ({setFunction, bg, message, text}:TypeProps) => {
    setTimeout(() => setFunction(false),3000)
    return (
    <div className={`card ${bg} ${text} d-flex justify-content-center align-items-center`}>
            <span>{message}</span>
    </div> )
}