import Card from '../card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   return <div className={styles.divBienvenido}>
      {
         props.characters.map((personaje) => { 
         return <Card objeto={personaje}
         key={personaje.id}
         // name={personaje.name}
         // status={personaje.status}
         // species={personaje.species}
         // gender={personaje.gender}
         // origin={personaje.origin.name}
         // image={personaje.image}
         // onClose={() => window.alert('Emulamos que se cierra la card')}
         onClose={props.onClose}
      />
      })
      }


      {/* <Card id={props.characters.id}
            name={props.characters.name}
      /> */}
   </div>;
}
