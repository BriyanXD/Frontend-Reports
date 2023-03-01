interface TypeProps {
    titles: string[];
    children: JSX.Element[]
}
export const Table = ({titles, children}: TypeProps) => {
    return(
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    {titles.map(current => <th scope="col">{current}</th>)}
                </tr>
            </thead>
            <tbody>
                    {children}
            </tbody>
        </table>
    )
}