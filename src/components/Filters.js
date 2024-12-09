import React from 'react'

function Filters({ genres, changeFilter, filterData }) {

    return (
        <div className='bg-gray-200 rounded-md p-5 mb-8 mt-5'>
            <h1 className='text-xl font-bold'>Filter by Genre</h1>
            <div className='space-x-2 space-y-2 mt-2'>
                {
                    genres.map((e, i) =>
                        <button onClick={() => e === filterData ? changeFilter() : changeFilter(e)}
                            className={`px-3 py-1 rounded-md text-gray-900 font-medium ${e === filterData ? "bg-gray-500" : "bg-gray-300"} ${e !== filterData && "hover:bg-gray-400"}`}
                            key={i}>{e}</button>
                    )
                }
            </div>
        </div >
    )
}

export default Filters