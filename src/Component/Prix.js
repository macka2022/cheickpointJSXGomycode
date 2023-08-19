import produit from "../product";
const Prix = () => {
    return ( 
        <div style={{fontSize:14}}>
            {`${produit.prix}`}
        </div>
     );
}
export default Prix;