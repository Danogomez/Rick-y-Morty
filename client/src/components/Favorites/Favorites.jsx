import Card from "../Card/Card"
import { connect, useDispatch } from "react-redux";
import { CardsContainer } from "../Cards/styledComponents";
import { filterCard, orderCard } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false)

    const handleOrder=(event)=> {
        dispatch(orderCard(event.target.value))
        setAux(true);
    }
    const handleFilter=(event)=> {
        dispatch(filterCard(event.target.value))
    }


    return (
        <>
        <div>
        <select onChange={handleOrder}>
            <option value='A'>Ascendente</option>
            <option value='D'>Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">AllCharacters</option>
        </select>
        </div>

        <CardsContainer>        
        {
            myFavorites?.map(fav => {
                return (
                    <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    species={fav.species}
                    gender= {fav.gender}
                    image= {fav.image}
                    />
                    )
                })
            }
        </CardsContainer>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(
    mapStateToProps,
    null
)(Favorites);