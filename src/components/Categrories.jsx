import styled from "styled-components"
import { categories } from "../data"
import CategorieItem from "./CategorieItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

function Categrories() {
  return (
    <Container>
        {categories.map(item=>(
            <CategorieItem item={item} key={item.id}/>
        )
        )}
    </Container>
  )
}

export default Categrories