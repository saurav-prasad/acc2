import React, { useEffect, useState } from 'react'

function MovieLists({ movies, filterData }) {
    const [data, setdata] = useState([...movies])

    useEffect(() => {
        if (filterData) {
            const a = movies.filter((e) => e.genre === filterData)
            setdata([...a])
        } else {
            setdata([...movies])
        }
    }, [filterData])

    return (
        <>

            <div className="relative overflow-x-auto shadow-md  movielist">
                <table className="w-full text-sm text-left rtl:text-right text-gray-900">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Genre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Year
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e, i) =>

                                <tr className="bg-white border-b" key={i}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r">
                                        {e.title}
                                    </th>
                                    <td className="px-6 py-4 text-gray-900 border-r">
                                        {e.genre}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">
                                        {e.year}
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MovieLists