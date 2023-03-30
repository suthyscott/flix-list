import { useState, useContext } from "react"
import axios from "axios"
import AuthContext from "../store/authContext"

const ShowCard = ({ show, getShowsAndMovies }) => {
    const [editing, setEditing] = useState(false)
    const [showName, setShowName] = useState(show.showName)
    const [imageUrl, setImageUrl] = useState(show.imageUrl)
    const [avgEpisodeLength, setAvgEpisodeLength] = useState(
        show.avgEpisodeLength
    )
    const [priority, setPriority] = useState(show.priority)
    const [seasons, setSeasons] = useState(show.seasons)
    const { token } = useContext(AuthContext)

    const optionsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const handleSubmit = e => {
        e.preventDefault()
        let body = {
            showName,
            priority,
            imageUrl,
            avgEpisodeLength,
            seasons,
            id: show.id
        }

        axios
            .put("/api/shows", body, {
                headers: { authorization: token }
            })
            .then(res => {
                getShowsAndMovies()
                setEditing(false)
            })
            .catch(err => console.log(err))
    }

    const deleteShow = () => {
        axios
            .delete(`/api/flix/show/${show.id}`, {
                headers: { authorization: token }
            })
            .then(res => {
                console.log(res.data)
                getShowsAndMovies()
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="w-3/4 border border-green-500 flex flex-col items-center">
            {!editing ? (
                <>
                    <h2>{show.showName}</h2>
                    <img className="w-4/5 " src={show.imageUrl} />
                    <p>{show.avgEpisodeLength}</p>
                    <p>Priority: {show.priority}</p>
                    <p>Number of seasons: {show.seasons}</p>
                </>
            ) : (
                <form onSubmit={e => handleSubmit(e)}>
                    <input
                        placeholder="Enter the show's name"
                        value={showName}
                        onChange={e => setShowName(e.target.value)}
                    />

                    <select
                        value={priority}
                        onChange={e => setPriority(+e.target.value)}
                    >
                        {optionsArr.map(op => (
                            <option value={op} key={op}>
                                {op}
                            </option>
                        ))}
                    </select>

                    <input
                        placeholder="Enter the show's length"
                        value={avgEpisodeLength}
                        onChange={e => setAvgEpisodeLength(e.target.value)}
                    />

                    <input
                        placeholder="Enter an image url for the show"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />

                    <input
                        placeholder="Enter the number of seasons the show runs"
                        value={seasons}
                        onChange={e => setSeasons(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            )}
            <button onClick={e => setEditing(!editing)}>Edit show</button>
            <button onClick={e => deleteShow()}>Delete Show</button>
        </div>
    )
}

export default ShowCard
