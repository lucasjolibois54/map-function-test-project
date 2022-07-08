import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'
import { data } from '/data.js' //import the data

export default function Home() {
  return (
  <div>
    {data.map((props) => ( //start by writing data as i wanna fetch my data from data (in import too), then i write map as its a map function. Then i start a parenthesis as i want the the component and shit inside the map function. Then i write props as thats the data i wanna use for the mpa function (i can use parenthesis if there is more than one parameter). Afterwards i do an arrow function to parce the data in (so its to call the data)
        <Landing
        pricingOne={props.pricingOne} pricingTwo={props.pricingTwo} pricingThree={props.pricingThree} //telling the component to take this data
        />
    ))}
  </div>
  )
}
