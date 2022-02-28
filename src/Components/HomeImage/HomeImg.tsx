import Img from 'next/image'
import MainImg from "../../public/Home/HomeImage.jpg"
import { StyledHomeImg } from "./HomeImg.style"

function HomeImg() {
  return (
    <StyledHomeImg style={{ position: 'relative', height: '50vw' }}>
      <Img src="/Home/HomeImage.jpg" layout='fill'  ></Img>
    </StyledHomeImg>

  )
}

export default HomeImg
