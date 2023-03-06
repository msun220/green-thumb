import "./Loader.css"
import grass from "./grass.png"

export default function Loader(){
return (
    <div className="container text-center">
        <div className="loader">
            <div>
                <div className="weed weed--1">
                    <span className="weed__leaf weed__leaf--top-left"></span>
                    <span className="weed__leaf weed__leaf--top-right"></span>
                    <span className="weed__leaf weed__leaf--left"></span>
                    <span className="weed__leaf weed__leaf--right"></span>
                </div>
                <img className="grass" src="grass" alt="" />
            </div>
        </div>
    </div>
)}
