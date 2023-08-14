import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import React, { useEffect }  from 'react';
import {useState} from 'react';
import {getChar} from '../../redux/actions';
import {copy} from '../../redux/actions';
// import {useDispatch} from 'react-redux';


export default function Card(props) {
   const {objeto} = props;
   // const dispatch = useDispatch();
   // console.log(objeto);
   return (
      <div>
         {/* <h1>{objeto.id}</h1>
         <h2 className={styles.title}>{objeto.name}</h2>
         <h2>{objeto.status}</h2>
         <h2>{objeto.species}</h2>
         <h2>{objeto.gender}</h2>
      <img src={objeto.image} alt='' />  */}


   <div key={objeto.id} className={styles.card} >
      <div className={styles.image}>
         <img src={objeto.image} alt='' /> 
      </div>
   <div className={styles.details}>
      <div className={styles.center}>
         <h1>{objeto.id}</h1>
         <h1>{objeto.name}</h1>
         <h1><span>{objeto.status}</span></h1>
         <h1><span>{objeto.species}</span></h1>
         <h1><span>{objeto.gender}</span></h1>
      {/* <button onClick={()=>{props.onClose(objeto.id)}}>Detail</button> */}
      <Link to={`/detail/${objeto.id}`} >
         <h3 className="card-name">Detail</h3>
      </Link>

      <button onClick={()=>{props.onClose(objeto.id)}}>X</button>
      </div>
   </div>


</div>




      </div>
   );
}
