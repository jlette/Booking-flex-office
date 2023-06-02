import { MdEventSeat } from "react-icons/md";
import { BsFillBuildingFill } from "react-icons/bs";
import { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function Place(props) {
    
    const { numplace, placeid, onPlaceSelect, colorPlace } = props;

    // const { places } = props;
    //console.log(props);

    const [selectedOption, setSelectedOption] = useState("");
    const [reserver, setReserver] = useState("");


    const handleSelectionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(`${value}`);
        props.modifyparentstatevalue(event.target.value);
        console.log(event.target);
    };

    const handleSelectPlace = () => {
        if (colorPlace == 'red') {
            alert("La place est déjà occupée")
        } else{
            onPlaceSelect(placeid);
            console.log(`Vous avez selectionner la place ${numplace} avec son ID ${placeid} et cette place ${colorPlace}`);
        }
    };

    return (
        <>
            <div>
                <input
                    type="radio"
                    id={placeid}
                    name="idplace"
                    value={numplace}
                    onChange={handleSelectionChange}
                    onClick={handleSelectPlace}
                    class="hidden peer"
                />
                <label
                    for={placeid}
                    class="cursor-pointer peer-checked:border-green-600 text-green-600 peer-checked:text-blue-700 hover:text-indigo-600"
                >
                    <div
                        key={placeid}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={`Place ${numplace}`}
                    >
                        <ReactTooltip type="success" id="my-tooltip" />
                        <MdEventSeat color={colorPlace} size={"2em"} />
                    </div>
                </label>
            </div>
        </>
    );
}
