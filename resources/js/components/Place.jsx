import { MdEventSeat } from "react-icons/md";
import { BsFillBuildingFill } from "react-icons/bs";
import { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function Place(props) {
    // const { places } = props;
    console.log(props);

    const [reserver, setReserver] = useState("");
    const handleOnChange = (event) => {
        {
            reserver === ""
                ? setReserver("green") & props.modifyparentstatevalue("true")
                : setReserver("") & props.modifyparentstatevalue("false");
        }
    };

    return (
        <div
            key={props.places.id}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`Place ${props.places}`}
        >
            <ReactTooltip type="success" id="my-tooltip" />
            <MdEventSeat
                onClick={handleOnChange}
                color={reserver}
                size={"2em"}
            />
        </div>
    );
}
