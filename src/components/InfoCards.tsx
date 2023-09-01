import { Link } from "react-router-dom";

function InfoCard() {
    return (
        <div className="bg-slate-400 h-28 w-52 p-4 m-5 rounded-md">
            <h1>I'm Card</h1>
            <Link to='/flow'>
                <button className="bg-slate-200 p-1 rounded-md">click me!!</button>
            </Link>
            

        </div>
    );
}

export default InfoCard