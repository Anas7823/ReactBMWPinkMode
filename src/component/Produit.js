import '../style/Produit.css';
import { Link } from "react-router-dom";
import M3 from "../assets/m3.jpg";
import M5 from "../assets/m5.jpg";
import M3Touring from "../assets/M3-Touring-scaled.jpeg";



function Produit(props) {
  let theme= props.mode
    const Produit = 
    [{
    name: 'M3 drift',
    commentaire: "Avec ses 270cv et ses 250kg ce véhicule totalement homologué va vous satisfaire et vous donnera des sensations tel que celle d'un avion de chasse.",
    image:M3,
    modele: "M3",

    },

    {name: "M5 Custom",
    commentaire: "Plus lourde que la M3, la M5 Pack M sport + vous garantit une vitesse de pointe et accéleration digne de son nom, cependant à voir si vos points ne disparaitrons pas plus vite que la voiture.",
    image:M5,
    modele: "M5",

    },


    {name: "M3 Touring",
    commentaire: "Prochainement...",
    image:M3Touring,
    modele: "M3T",

    },
]
return(
    <div className={`card_items  ${theme}`}>
        {Produit.map((produit, index) => (
        <div className='item'>
            
            <div>
               <img className='img-card' src={produit.image} alt=''/> 
            </div>

            <div className='body-card'>
                <Link to={"/produit/"+ produit.modele}>
                    <h1 className='produitLien'>{produit.name}</h1>
                </Link>
                <p>{produit.commentaire}</p>
            </div>
        </div>
        ))}
    </div>
)}

export default Produit;
