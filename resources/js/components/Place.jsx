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
        onPlaceSelect(placeid);
        console.log(`Vous avez selectionner la place ${numplace} avec son ID ${placeid}`);
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
                    class=" cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-indigo-600 hover:bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-800 dark:hover:bg-gray-indigo"
                >
                    <div
                        key={placeid}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={`Place ${numplace} ${colorPlace}`}
                    >
                        <ReactTooltip type="success" id="my-tooltip" />
                        <MdEventSeat color={colorPlace} size={"2em"} />
                    </div>
                </label>
            </div>
        </>
    );
}
