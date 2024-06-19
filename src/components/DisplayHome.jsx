import React from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';

const DisplayHome = () => {
  return (
    <>
      <Navbar />

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album, index) => (
            <AlbumItem
              key={index}
              id={album.id}
              name={album.name}
              desc={album.desc}
              image={album.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => (
            <SongItem
              key={index}
              id={song.id}
              name={song.name}
              desc={song.desc}
              image={song.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
