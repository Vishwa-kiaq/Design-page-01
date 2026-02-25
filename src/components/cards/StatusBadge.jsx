
const colors = {
    Interested:"bg-green-100 text-green-700 flex flex-col justify-center items-center",
    "Follow-up":"bg-yellow-100 text-yellow-700 flex flex-col justify-center items-center",
    New: "bg-blue-100 text-blue-700 flex flex-col justify-center items-center",
    Converted: "bg-purple-100 text-purple-700 flex flex-col justify-center items-center",
}

const StatusBadge = ({status})=> {
    return (
        <span className={`px-3 py-1 text-xs rounded-full ${colors[status]}`}>
            {status}
        </span>
    )
}

export default StatusBadge;
