import React from 'react'

interface Video {
  name: string
  key: string
  site: string
}

interface VideoProps {
  videos: Video[]
}

const VideoList: React.FC<VideoProps> = ({ videos }) => {
  return (
    <div>
      {videos.map((video) => (
        <div key={video.key}>
          <h3>{video.name}</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  )
}

const Vid: React.FC = () => {
  const serverResponse = {
    results: [
      {
        iso_639_1: "en",
        iso_3166_1: "US",
        name: "\"Escape Town on a Bus\" Clip",
        key: "gPPN8OPYMsQ",
        site: "YouTube",
      },
      {
        iso_639_1: "en",
        iso_3166_1: "US",
        name: "Every Time Jim Carrey Spots a Creepy Fake Ad",
        key: "TcG157VFbuY",
        site: "YouTube",
      },
      {
        iso_639_1: "en",
        iso_3166_1: "US",
        name: "The Truman Show - Trailer",
        key: "N1VlDVRiFrk",
        site: "YouTube",
      },
      {
        iso_639_1: "en",
        iso_3166_1: "US",
        name: "Trailer",
        key: "loTIzXAS7v4",
        site: "YouTube",
      },
    ]
  };

  return (
    <div>
      <VideoList videos={serverResponse.results} />
    </div>
  );
};

export default Vid