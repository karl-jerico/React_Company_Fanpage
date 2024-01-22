import Best from "../sections/Best"
import Leaders from "../sections/Leaders"
import Teams from "../sections/Teams"
import Welcome from "../sections/Welcome"


const Home = () => {
  return (
    <div className="p-home">
        <Welcome />
        <Leaders />
        <Teams />
        <Best />
    </div>
  )
}

export default Home
