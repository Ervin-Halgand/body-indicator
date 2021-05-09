import underweight from '../../assets/images/underweight.png';
import normal from '../../assets/images/normal.png'
import overweight from '../../assets/images/overweight.png'
import obese from '../../assets/images/obese.png'
import extremely_obese from '../../assets/images/extremely_obese.png'

export const ImcDescriptionCard = [{
    image: underweight,
    alt: 'underweight',
    containerColor: "rgb(39, 172, 228)",
    title: "Sous-Poids",
    desc: "< 18,5"
},
{
    image: normal,
    alt: 'normal',
    containerColor: "rgb(109, 126, 56)",
    title: "normal",
    desc: "18,5",
    desc2: "24,9"
},
{
    image: overweight,
    alt: 'overweight',
    containerColor: "rgb(226, 157, 29)",
    title: "Surpoids",
    desc: "25,0",
    desc2: "29,9"
},
{
    image: obese,
    alt: 'obese',
    containerColor: "rgb(221, 112, 44)",
    title: "obésité",
    desc: "30,0",
    desc2: "34,9"
},
{
    image: extremely_obese,
    alt: 'test',
    containerColor: "rgb(218, 31, 38)",
    title: "obésité sévère",
    desc: "> 35"
}
];