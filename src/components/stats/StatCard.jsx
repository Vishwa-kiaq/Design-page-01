

const StatCard =({title, value, color ,border}) => {
    return(
        <div className={`flex-1 h-20 px-3 rounded-lg border-2 ${border} ${color} flex flex-col justify-center items-center`}>
            <h3 className="text-lg font-semibold">{value}</h3>
            <p className="text-xs text-gray-600">{title}</p>
        </div>
    )
}

export default StatCard;
