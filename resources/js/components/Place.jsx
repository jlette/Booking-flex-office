import { MdEventSeat } from "react-icons/md";
import { BsFillBuildingFill } from "react-icons/bs";
import { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function Place(props) {
    // const { places } = props;
    console.log(props);

    const [selectedOption, setSelectedOption] = useState("");
    const [reserver, setReserver] = useState("");
    const handleOnChange = (event) => {};
    const handleSelectionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(`${value}`);
        props.modifyparentstatevalue(event.target.value);
        console.log(event.target);
        setCheked(true);

        /*  {
            reserver === ""
                ? setReserver("green") & props.modifyparentstatevalue("true")
                : setReserver("") & props.modifyparentstatevalue("false");
        } */
    };

    return (
        <>
            <div>
                <input
                    type="radio"
                    id={props.placeid}
                    name="idplace"
                    value={props.placeid}
                    onChange={handleSelectionChange}
                    class="hidden peer"
                />
                <label
                    for={props.placeid}
                    class=" cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-indigo-600 hover:bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-800 dark:hover:bg-gray-indigo"
                >
                    <div
                        key={props.places.id}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={`Place ${props.places}`}
                    >
                        <ReactTooltip type="success" id="my-tooltip" />

                        <MdEventSeat color={reserver} size={"2em"} />
                    </div>
                </label>
            </div>
        </>
    );
}
