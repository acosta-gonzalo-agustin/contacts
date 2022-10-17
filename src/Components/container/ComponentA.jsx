import {Contact} from "../../models/Contact.js"
import ComponentB from "./ComponentB.jsx";


const ComponentA = () => {

    const defaultContact = new Contact("gonzalo","acosta","gonzalo@gmail.com",false);


    return(
    
        <div>
              
                <h1><ComponentB {...defaultContact}/></h1>

        </div>
             
    );
};


// ComponentA.propTypes = {
//     name:PropTypes.string,

// };


export default ComponentA;
