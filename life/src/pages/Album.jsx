import React from 'react';
import { useParams } from 'react-router-dom';

const Album = () => {
  // Utilisez useParams pour obtenir l'identifiant de l'album depuis l'URL
  const { albumId } = useParams();

  // Utilisez l'identifiant de l'album pour récupérer les données de l'album depuis votre backend
  // Remplacez cette logique avec la vraie récupération des données de l'album
  // (par exemple, appel à un service pour récupérer les détails de l'album)

  return (
    <div>
      <h1>Album {albumId}</h1>
      test
    </div>
  );
};

export default Album;

