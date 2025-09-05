import { useState, useEffect } from "react"
import axios from "../../utils/axios"
import requests from "../../utils/requests"
import "./Banner.css"

const Banner = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchTrending)
        const results = request.data.results
        const randomIndex = Math.floor(Math.random() * results.length)
        setMovie(results[randomIndex])
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <p className="banner__description">
          {movie?.overview?.length > 150
            ? movie.overview.slice(0, 150) + "..."
            : movie?.overview}
        </p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner
