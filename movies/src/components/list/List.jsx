import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import ListItem from "../listItem/ListItem"
import "./list.scss"

export default function List() {
  return (
    <div className="list">
         <span className="listTitle">Continue to watch</span>
          <div className="wrapper">
             <ArrowBackIosOutlined className="sliderArrow left"/>
               <div className="container">
                   <ListItem />
                   <ListItem />
                   <ListItem />
                   <ListItem />
                   <ListItem />
                   <ListItem />
                   <ListItem />
                   <ListItem />
                   <ListItem />
                   <ListItem />
                   <ListItem />
                   <ListItem />
                </div>
             <ArrowForwardIosOutlined className="sliderArrow right"/>
          </div>
     </div>
  )
}
