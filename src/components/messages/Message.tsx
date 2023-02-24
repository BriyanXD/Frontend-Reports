interface TypeProps {
    message: string | number;
    bg: string;
    text: string;
}


export const Message = ({bg, message, text}:TypeProps) => {
    return (
    <div className={`card ${bg} ${text}`}>
            <span className="text-center">{message}</span>
    </div> )
}