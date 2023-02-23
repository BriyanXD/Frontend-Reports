interface TypeProps {
    message: string | number;
    bg: string;
    text: string;
}


export const Message = ({bg, message, text}:TypeProps) => {
    return (
    <div className={`card ${bg} ${text} d-flex justify-content-center align-items-center`}>
            <span>{message}</span>
    </div> )
}