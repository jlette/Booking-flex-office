import { MdEventSeat } from "react-icons/md";
import { BsFillBuildingFill } from "react-icons/bs";
import { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function Bureau(props) {
    const [reserver, setReserver] = useState("");
    const [shadow, setShadow] = useState("");
    const handleOnChange = (event) => {
        setReserver("green");
    };

    const handleOnMouse = (event) => {
        setShadow("drop-shadow-2xl");
    };

    return (
        <div className="w-50 h-50 bg-success ">
            <div
                className="container border border-dark flex justify-center"
                style={{ padding: 25 }}
            >
                <div>
                    <MdEventSeat
                        onMouseEnter={handleOnMouse}
                        onClick={handleOnChange}
                        color={reserver}
                        size={"2em"}
                        className={{ shadow }}
                    />

                    <ReactTooltip type="succes" id="tool" />
                    <MdEventSeat className="drop-shadow-2xl" size={"2em"} />
                    <MdEventSeat size={"2em"} />
                </div>
                <div>
                    <MdEventSeat size={"2em"} />
                    <MdEventSeat size={"2em"} />
                    <MdEventSeat size={"2em"} />
                </div>
                <div>
                    <MdEventSeat size={"2em"} />
                    <MdEventSeat size={"2em"} />
                    <MdEventSeat size={"2em"} />
                </div>
                <div>
                    <MdEventSeat size={"2em"} />
                    <MdEventSeat size={"2em"} />
                    <MdEventSeat size={"2em"} />
                </div>
                <div>
                    <MdEventSeat size={"2em"} />
                    <MdEventSeat size={"2em"} />
                    <MdEventSeat size={"2em"} />
                </div>
            </div>

            <h4 className="mt-3 flex justify-center">
                <div className="flex row mr-3">
                    <MdEventSeat color={"green"} size={"1.5em"} />
                    <p className="">Mes places</p>
                </div>

                <div className="flex row  mr-3">
                    <MdEventSeat size={"1.5em"} />
                    <p className="">Places libre</p>
                </div>

                <div className="flex row  mr-3">
                    <MdEventSeat color={"grey"} size={"1.5em"} />
                    <p>Places occupé</p>
                </div>
            </h4>
        </div>
    );
}
