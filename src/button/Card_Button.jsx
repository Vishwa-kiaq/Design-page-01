function CardButton(){
    return(
        <div className="flex gap-4 font-bold mt-6 mb-6">
            <button className="bg-white py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white">All Leads</button>
            <button className="bg-white py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white">New</button>
            <button className="bg-white py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white">Follow-up</button>
            <button className="bg-white py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white">Interested</button>
            <button className="bg-white py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white">Converted</button>
        </div>
    )
}

export default CardButton;