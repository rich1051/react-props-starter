function CreatureItem(props) {


    return(
        <li>{props.creature.name} is from {props.creature.origin}</li>
    );
}

export default CreatureItem;

