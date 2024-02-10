import React, { useState } from 'react';

const Profile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

  // Simule la récupération des informations de profil de l'utilisateur

    useEffect(() => {
    // Exemple de récupération de données simulée
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        };
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
    }, []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour mettre à jour les informations du profil (par exemple, appel à un service de mise à jour de profil)
  };

  return (
    <div>
      <h2>Profil</h2>
      <form onSubmit={handleUpdateProfile}>
        <input
          type="text"
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nom de famille"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default Profile;
