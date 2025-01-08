import {useState} from "react";
import './Label_disp.css';

const Label_disp = ()=>{
    const [label ,labels] = useState([
        {
            img:require('./label1.png'),
            name:"label 1",
            price:500
        },
        {
            img:require('./label1.png'),
            name:"label 2",
            price:500
        },
        {
            img:require('./label1.png'),
            name:"label 3",
            price:500
        },
        {
            img:require('./label1.png'),
            name:"label 4",
            price:500
        },
        {
            img:require('./label1.png'),
            name:"label 5",
            price:500
        },
        {
            img:require('./label1.png'),
            name:"label 6",
            price:500
        },
        {
            img:require('./label1.png'),
            name:"label 7",
            price:500
        },
        {
            img:require('./label1.png'),
            name:"label 8",
            price:500
        },
        {
            img:require('./label1.png'),
            name:"label 9",
            price:500
        },
        {
            img:require('./label1.png'),
            name:"label 10",
            price:500
        }
    ]);
    return(   
        <div id="all_label">{
            label.map( (label) => (
                <div id="details">
                    <img src={label.img} alt="label" />
                    <h2>{label.name}</h2>
                    <h2> Price : {label.price}</h2>
                    <button>Order</button>
                </div>
            ))}
        </div>

    )
}

export default Label_disp