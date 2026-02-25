const Header =() => {
    return(
        <div className="flex justify-between items-center mb-6 bg-gray-300 p-4 ">
            <h1 className="text-2xl font-bold">Assigned leads</h1>

            <div className="space-x-2">
                <button className="px-4 py-2 bg-white rounded-lg">Refresh</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Export</button>
            </div>
        </div>
    )
}

export default Header;
