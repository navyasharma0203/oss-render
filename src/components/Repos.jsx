import React from 'react'

function Repos({ posts, name, tags, desc }) {
  return (
    <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl items-center mx-auto gap-12">
                {posts.filter(item => {
                    if (name === '' && tags === '' && desc === '') return true
                    let nameMatch = false, tagsMatch = false, descMatch = false
                    if (name !== '') {
                        nameMatch = item.name.toLowerCase().includes(name.toLowerCase());
                    }
                    if (tags !== '') {
                        tagsMatch = item.tags.some(tag => tag.toLowerCase().includes(tags.toLowerCase()));
                    }
                    if (desc !== '') {
                        descMatch = item.desc.toLowerCase().includes(desc.toLowerCase());
                    }
                    return nameMatch || tagsMatch || descMatch
                }).map(({ name, desc, tags, site }, index) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm m-4 grid gap-8 p-4 h-full" key={index}>
                            <h4 className="text-xl font-semibold text-blue-500">
                                {name}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {desc}
                            </p>
                            <div className='flex overflow-hidden w-full flex-wrap items-center'>
                                {tags.map((tag, index) => (
                                    <div className="text-sm text-blue-500 bg-blue-100 rounded shadow px-2 py-1 m-1" key={index}>{tag}
                                        </div>
                                ))}
                            </div>
                            <div className='rd-btn flex justify-end items-center'>
                                <a href={site} className="rd-btn text-sm text-blue-100 bg-blue-600 rounded shadow px-8 py-2">
                                    Read more
                                </a>
                            </div>
                    </div>
                ))}
            </div>
        </>
  )
}

export default Repos