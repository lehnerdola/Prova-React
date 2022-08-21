import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import './index.scss';

export default function Cadastro(){

    const animation = {
        rotate:[0,0,-5,5,0]
    }

    const variants={
        aberto : {opacity:[0,1]}
    }

    const [mostrar, setMostrar] = useState(false);


    return(
        <div className="corzinha">

        <motion.div className="cont-1" 
      >

        {mostrar === false &&    

            
         <motion.section className="txt-section">
            <motion.h1 className="txt-1"
            initial={{opacity:0}}
            animate={{opacity:1, y:[-2,5]}}
            transition={{delay:0.7, duration:0.8}}
            >Oii amor, fiz essa coisa boba pra vc =D</motion.h1>
            <motion.h2 className="txt-2"
            initial={{opacity:0}}
            animate={{opacity:0.9}}
            transition={{delay:0.7, duration:0.8}}
            >espero que vc goste S2</motion.h2> 
         </motion.section> 
         }

        <motion.div className="div-cartinha">

        {mostrar ===false &&
        <div>
        <motion.p className="txt-3" initial={{opacity:0}}
            animate={{opacity:0.9}}
            transition={{delay:0.7, duration:2}}>:O, vc recebeu uma cartinha</motion.p>
        <motion.p className="txt-4" initial={{opacity:0}}
            animate={{opacity:0.9}}
            transition={{delay:0.7, duration:2}}>clique nela para descobrirmos oq tem</motion.p>
        </div>
    }
        {mostrar===false &&
        <motion.div   variants = {variants}
        animate={mostrar ? 'aberto' : 'fechado'}>
         <motion.img 
            animate={animation}
            transition={{repeat:Infinity}}
            src="../assets/images/1661092997011.png" className="cartinha-conf" onClick={() => setMostrar(!mostrar)}/>

        </motion.div>  
    }

        {mostrar === true &&
        <div>
        <h1 className="ily">Eu te amo!!!!</h1>

            <div >
                <motion.img src="../assets/images/2_Sem_Titulo_20220821115302.png" className="cartinha-conf-2" 
                animate={{x:[0,-350]}}
                transition={{delay:0.7, duration:0.8}}

                />
                <motion.img src="../assets/images/png_20220821_103949_0000.png" className="conf-txt"
                initial={{opacity:0}}
                animate={{opacity:1, marginBottom:100, x:-76,y:-93, width:[80,250], height:[50,360]}}
                />
            </div>
            </div>

        }
        </motion.div>

        </motion.div>

        </div>
    )

}