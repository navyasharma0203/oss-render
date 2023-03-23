import React from 'react'

function Repos({posts}) {
  return (
    <>
            <div className="grid grid-cols-3 items-center">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm m-4" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
  )
}

export default Repos