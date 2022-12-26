import React, { useEffect } from 'react';
import '../css/curs.css';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import CursData from '../models/CursData'
import LectionsData from '../models/LectionsData'
import {getCurs} from '../apis/cursApi';
import {getLections} from '../apis/lectionsApi';
import CursLentaPart from '../components/cursLentaPart';

const Curs = () =>  {

    const {cursId} = useParams()
    const [cursData, setCursData] = React.useState<CursData>({
        id: 0,code:'',name:'',descr:'', preview_img:'', main_img:'', author:'', date:''});
    const [lectionData, setLectionsData] = React.useState<LectionsData[]>([]);

    useEffect( () =>{
        getCurs(setCursData, cursId)
    }, [cursId])

    useEffect( () =>{
        getLections(setLectionsData,'', cursId)
    }, [cursId])

return (
    <div className="container">
        <div className="title-all">
            <img className="curs-logo" src={cursData.main_img} alt="curs-main-img"  />
            <div className="title">
                    <h3> {cursData.name} </h3>
            </div>
        </div>
       
        <section className="lenta">
        {lectionData.map(lections => <CursLentaPart {...lections} key={lections.id} />)}

        <div className="leave-button"> <button type="button"  className="btn  btn-outline-danger btn-lg">Покинуть курс</button></div>    

        </section>
    </div>

)
}

export default Curs;