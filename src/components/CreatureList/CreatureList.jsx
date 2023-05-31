import CreatureItem from "../CreatureItem/CreatureItem";

function CreatureList (props) {

    return (
        <>
        <h2>All Creatures</h2>
      <ul>
        {props.creatureList.map(creature => 
         (<CreatureItem key={creature.id} creature={creature} />)
        )}
      </ul>
      </>
    )
}

export default CreatureList;