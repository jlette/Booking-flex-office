import { MdEventSeat } from "react-icons/md";
import { BsFillBuildingFill } from "react-icons/bs";
import { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function Bureau() {
    const [reserver, setReserver] = useState("");
    const [shadow, setShadow] = useState("");
    const handleOnChange = (event) => {
        {
            reserver === "" ? setReserver("green") : setReserver("");
        }
    };

    const handleOnMouse = (event) => {
        setShadow("drop-shadow-2xl");
    };

    return (
        <div data-tooltip-id="my-tooltip" data-tooltip-content="Place 42">
            <ReactTooltip type="succes" id="my-tooltip" />
            <MdEventSeat
                onMouseEnter={handleOnMouse}
                onClick={handleOnChange}
                color={reserver}
                size={"2em"}
                className={{ shadow }}
            />
        </div>
    );
}
