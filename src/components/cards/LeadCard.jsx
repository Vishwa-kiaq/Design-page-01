import { HiOutlinePhone , HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import StatusBadge from "./StatusBadge";

const LeadCard = ({lead}) => {
    return(
        <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="flex justify-between">
                <div>
                    <h2 className="font-semibold text-lg">{lead.name}</h2>
                    <p className="text-gray-500">{lead.company}</p>
                </div>
                <StatusBadge status={lead.status} />
            </div>

            <div className="mt-3 text-sm text-gray-600 space-y-1">
                <p className="flex items-center gap-2"><HiOutlinePhone className="text-blue-500" />{lead.phone}</p>
                <p className="flex items-center gap-2"><HiOutlineMail className="text-green-500" />{lead.email}</p>
                <p className="flex items-center gap-2"><HiOutlineLocationMarker className="text-red-500" />{lead.city}</p>
            </div>

            <div className="mt-3 bg-yellow-50 rounded-md text-sm">
                {lead.note}
            </div>
        </div>
    )
}

export default LeadCard;

