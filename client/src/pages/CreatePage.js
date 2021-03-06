import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {
        request,
        // loading,
        // error,
        // clearError
        } = useHttp()
    const [link, setLink] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if(event.key === 'Enter') {
            try {
                const data = await request(
                    '/api/link/generate',
                    'POST',
                    {from: link},
                    {Authorization: `Bearer ${auth.token}`}
                    )

                history.push(`/detail/${data?.link._id}`)
            } catch (e) {}
        }
    }

    return (
        <div className="row">
            <h5>Create page</h5>
            <div className="col s8 offset" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input
                        placeholder="enter link"
                        id="link"
                        type="text"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="link">Enter Link</label>
                </div>
            </div>
        </div>
    )
}