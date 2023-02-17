import '../style/Page.css'
import m3face from "../assets/m3/BMW-M3-E92-1.jpeg";
import m32 from "../assets/m3/BMW-M3-E92-2.jpeg";
import m33 from "../assets/m3/BMW-M3-E92-3.jpg";

import m5face from "../assets/m5/bmw-m5-1.jpg";
import m52 from "../assets/m5/bmw-m5-2.jpg";
import m53 from "../assets/m5/bmw-m5-3.jpg";
import m54 from "../assets/m5/bmw-m5-4.jpg";

import m3Tface from "../assets/M3-Touring-scaled.jpeg";
import none from "../assets/no-image/no-image.png";
import { useParams } from 'react-router-dom';



function M3drift(props){
    const voitures = [{
            etat:'etat',
            stock: 'enStock',
            nom: 'M3',
            prix: '75000$',
            modele: "M3",
            img1: m3face,
            img2: m32,
            img3: m33,
            description:' Ce véhicule est vendu sans accessoire pour le moment. Il vous sera prochainement possible de commander votre véhicule directement customiser dans notre atelier.'},

        {
            etat: 'etat',
            stock: 'enStock',
            nom: 'M5',
            prix: '120 000$',
            modele: "M5",
            img1: m5face,
            img2: m52,
            img3: m53,
            img4: m54,
            description:' Ce véhicule est vendu sans accessoire pour le moment. Il vous sera prochainement possible de commander votre véhicule directement customiser dans notre atelier.'},
        {
            etat: 'etat-r',
            stock: 'pasDeStock',
            nom: 'M3 Touring',
            prix: 'Arrive prochainement',
            modele: "M3T",
            img1: m3Tface,
            img2: none,
            description:"Ce véhicule n'est pas disponible au grand public. Il sera en vente dès sa sortie"
        }]
        const { modele } = useParams()

        console.log(modele)
    let theme= props.mode
      return(
      <div>
      {voitures.map((voiture)=>(
        <div>
        {voiture.modele == modele ?  <div className={` M3drift ${theme}`}>
        <div className='contenueProduit'>
            <div className='photo'>
                 <div className=''>
                    <img className='img-principal' src={voiture.img1} alt=''/>
                </div>
                <div className='sous-img'>
                    <img className='petiteImg' src={voiture.img2} alt=''/>
                    <img className='petiteImg' src={voiture.img3} alt=''/>
                    <img className='petiteImg' src={voiture.img4} alt=''/>
                </div>
            </div>

            <div className='info'>
                <h1>{voiture.nom}</h1>

                <hr></hr>
                
                <h1>{voiture.prix}</h1>

                <div className={voiture.etat}>
                    <h4 className={voiture.stock}>{voiture.stock=='enStock' ? 'En Stock' : 'Pas De Stock'}</h4>
                </div>
                <br></br>
                <hr></hr>

                <div className='bouton'>
                    <button className='btn-commande'>
                        <h3>{voiture.stock=='enStock' ? 'Commander' : 'Indisponible'}</h3>
                    </button>

                    <button className='btn-devis'>
                        <h3>Devis</h3>
                    </button>
                </div>

            </div>

        </div>

        <div className='description'>
            <h1>Description: </h1>
            <div className='textDescription'>
                <h3>
                    {voiture.description}
                </h3>
            </div>
        </div>

      </div>
 : ""}
 </div>
      ))}
     </div>
  )}
  

export default M3drift;
