import React from 'react';
import '../css/cursBaner.css';
import { Link } from "react-router-dom";
import CursData from '../models/CursData'

const CursBaner = (props: CursData) =>{
    const onPage = {
        pathname: "/curs/" + props.id
    }

    return (
    <div className="cur">
                <Link className='home-curs-link' to={onPage}>
                    <div>
                        
                        <img src={props.preview_img}  alt="curs-img" />
                        
                    </div>
                    <span>
                        <div className="curs-name">
                            <h3>{props.name}</h3>
                        </div>
                        <h5 className="curs-disc"> {props.descr} </h5>
                    </span>
                </Link>
    </div>

)
}

export default CursBaner;