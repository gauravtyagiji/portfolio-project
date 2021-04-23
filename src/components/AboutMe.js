import React, { useEffect, useState } from 'react'
import sanityClient from '../Client'
import ESCR from '../ESCR.jpg'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

function AboutMe() {

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
            }`).then((data) => setAuthor(data[0]))
            .catch(console.error)
    }, []);

    if (!author) return <div>Loading...</div>

    return (
        <>
            <div className="relative">
                <img src={ESCR} alt="escr" className="absolute w-full h-full" />
                <div className="p-10 lg:pt-32 container mx-auto relative">
                    <section className="bg-green-600 opacity-80 rounded-lg shawdow-2xl lg:flex p-20">
                        <img src={urlFor(author.authorImage).url()} className="rounded w-48 h-50 lg:w-64 lg:h-32 mr-8"
                            alt={author.name}
                        />
                        <div className="text-lg flex flex-col justify-center d-inline mb-5">
                            <h1 className="cursive text-6xl text-green-200 mb-4">
                                Hey there. I'm {" "}
                                <span className="text-green-100">{author.name}</span>
                                <div className="prose lg:prose-xl text-white">
                                    <BlockContent blocks={author.bio} projectId="sq0vlab5" dataset="production" />
                                </div>
                            </h1>
                        </div>
                    </section>
                </div>
            </div>
            
            
        </>
    )
}
export default AboutMe;