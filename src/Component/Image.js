import produit from "../product";
const Image = () => {
    return ( 
        <div>
         <img src={produit.image} alt="pantalon" />
        </div>
     );
}
 
export default Image;