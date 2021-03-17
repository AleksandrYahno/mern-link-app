import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <>
            <h5>Link</h5>
            <p>your link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>from where: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>the number of clicks on the link: <strong>{link.clicks}</strong></p>
            <p>date of creation: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}