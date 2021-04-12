import { useState, useEffect } from 'react';


export default function UseFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(data => {
        setData(data.data)
      })
      .catch(error => {
        setError(error)
        console.log(error);
      })
      .finally(_ => {
        setTimeout(() => {
          setLoading(false)
        }, 500)
      })
  }, [url])

  return [data, loading, error]
}