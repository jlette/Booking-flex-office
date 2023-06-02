import { MdEventSeat } from "react-icons/md";
import { Link } from "@inertiajs/react";
export default function ReservationLayout({ children }) {
    return (
        <div className="w-50 h-50 bg-success ">
            <div
                className="container border border-dark flex justify-center"
                style={{ padding: 25 }}
            >
                {children}
            </div>

            <h4 className="mt-3 flex justify-center">
                <div className="flex row mr-3">
                    <MdEventSeat className="text-blue-700" size={"1.5em"} />
                    <p className="ml-1">Ma place</p>
                </div>

                <div className="flex row  mr-3">
                    <MdEventSeat className="text-green-600" size={"1.5em"} />
                    <p className="ml-1">Places libre</p>
                </div>

                <div className="flex row  mr-3">
                    <MdEventSeat color={"red"} size={"1.5em"} />
                    <p className="ml-1">Places occupé</p>
                </div>
            </h4>
        </div>
    );
}
