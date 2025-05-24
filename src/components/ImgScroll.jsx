import React from 'react'

export const ImgScroll = () => {
  // Define the keyframe animation as a style string
  const scrollAnimation = {
    animation: 'loop-scroll 190s linear infinite',
  };

  return (
    <>
      {/* Inline keyframe definition */}
      <style>
        {`
          @keyframes loop-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>

      <div className='flex gap-12 overflow-hidden'>
        <div className='flex gap-12 items-center' style={scrollAnimation}>
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ACIERS_SPECIAUX-removebg-preview.png " alt="ACIERS_SPECIAUX-removebg-preview.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ACIERS-removebg-preview.png " alt="ACIERS-removebg-preview.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ACTIONNEUR.jpg " alt="ACTIONNEUR.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ADVANCE GEARBOX.jpg " alt="ADVANCE GEARBOX.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ALARME GAZ.jpg " alt="ALARME GAZ.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/API pipe.png " alt="API pipe.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/BALISE BATEAU.jpg " alt="BALISE BATEAU.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/Balise-RigRat-Honeywell-1.jpeg " alt="Balise-RigRat-Honeywell-1.jpeg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/BALL VALVE.jpg " alt="BALL VALVE.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CABLE INDUSTRIEL.jpg " alt="CABLE INDUSTRIEL.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CAMERAS BIS.avif " alt="CAMERAS BIS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CAMERAS.avif " alt="CAMERAS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CENTRALISEUR 2.png " alt="CENTRALISEUR 2.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/COFFRET ATEX 2.jpg " alt="COFFRET ATEX 2.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/COMPRESSEUR A VIS.jpg " alt="COMPRESSEUR A VIS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CONTECH THREAD PROTECT.png " alt="CONTECH THREAD PROTECT.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CONTROLEUR PID.jpg " alt="CONTROLEUR PID.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/DISJONCTEURS.jpg " alt="DISJONCTEURS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ECLAIRAGE ENGINS.jpg " alt="ECLAIRAGE ENGINS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ELINGUES ET CABLES.jpg " alt="ELINGUES ET CABLES.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/FITTINGS.png " alt="FITTINGS.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/FLASHERS.avif " alt="FLASHERS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/GILET SOLAS.jpg " alt="GILET SOLAS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/GYRO BIS.avif " alt="GYRO BIS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/HEATD PLOW PLIGHTS.avif " alt="HEATD PLOW PLIGHTS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/KIT ANTI POLLLUTION.jpg " alt="KIT ANTI POLLLUTION.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/LED ATEX.jpg " alt="LED ATEX.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/LIGHTS BIS.avif " alt="LIGHTS BIS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/MARINE gps.jpg " alt="MARINE gps.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/MOTERUS ELECTRIQUES.jpg " alt="MOTERUS ELECTRIQUES.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/MOTEURS WEICHAI.jpg " alt="MOTEURS WEICHAI.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/OUTILLAGE A MAIN.jpg " alt="OUTILLAGE A MAIN.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/PALAN.jpg " alt="PALAN.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/Perimeter-Light-300x300.jpg " alt="Perimeter-Light-300x300.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/POMPE A BETON.jpg " alt="POMPE A BETON.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/pompe a membrane.jpg " alt="pompe a membrane.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/pompe incendie.jpg " alt="pompe incendie.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/pompes immergees.jpg " alt="pompes immergees.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/POSTE A SOUDER GYS.jpg " alt="POSTE A SOUDER GYS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/PURGEURS.jpg " alt="PURGEURS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/Rescue nautique.jpeg " alt="Rescue nautique.jpeg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/RIA.jpg " alt="RIA.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/SINLGE JOINT ELEVATOR.png " alt="SINLGE JOINT ELEVATOR.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/TETE DE FORAGE.png " alt="TETE DE FORAGE.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/THROW-OVER-LIFERAFT-12.jpg " alt="THROW-OVER-LIFERAFT-12.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/Torche ATEX.jpeg " alt="Torche ATEX.jpeg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/VANNE GUILLOTINE.jpg " alt="VANNE GUILLOTINE.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/VANNE PAPILLON.jpg " alt="VANNE PAPILLON.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/Y SLIPED ELEVATOR.png" alt="Y SLIPED ELEVATOR.pn" />
        </div>
        <div className='flex gap-12 items-center' style={scrollAnimation} aria-hidden="true">
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ACIERS_SPECIAUX-removebg-preview.png " alt="ACIERS_SPECIAUX-removebg-preview.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ACIERS-removebg-preview.png " alt="ACIERS-removebg-preview.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ACTIONNEUR.jpg " alt="ACTIONNEUR.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ADVANCE GEARBOX.jpg " alt="ADVANCE GEARBOX.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ALARME GAZ.jpg " alt="ALARME GAZ.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/API pipe.png " alt="API pipe.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/BALISE BATEAU.jpg " alt="BALISE BATEAU.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/Balise-RigRat-Honeywell-1.jpeg " alt="Balise-RigRat-Honeywell-1.jpeg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/BALL VALVE.jpg " alt="BALL VALVE.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CABLE INDUSTRIEL.jpg " alt="CABLE INDUSTRIEL.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CAMERAS BIS.avif " alt="CAMERAS BIS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CAMERAS.avif " alt="CAMERAS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CENTRALISEUR 2.png " alt="CENTRALISEUR 2.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/COFFRET ATEX 2.jpg " alt="COFFRET ATEX 2.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/COMPRESSEUR A VIS.jpg " alt="COMPRESSEUR A VIS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CONTECH THREAD PROTECT.png " alt="CONTECH THREAD PROTECT.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/CONTROLEUR PID.jpg " alt="CONTROLEUR PID.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/DISJONCTEURS.jpg " alt="DISJONCTEURS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ECLAIRAGE ENGINS.jpg " alt="ECLAIRAGE ENGINS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/ELINGUES ET CABLES.jpg " alt="ELINGUES ET CABLES.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/FITTINGS.png " alt="FITTINGS.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/FLASHERS.avif " alt="FLASHERS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/GILET SOLAS.jpg " alt="GILET SOLAS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/GYRO BIS.avif " alt="GYRO BIS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/HEATD PLOW PLIGHTS.avif " alt="HEATD PLOW PLIGHTS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/KIT ANTI POLLLUTION.jpg " alt="KIT ANTI POLLLUTION.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/LED ATEX.jpg " alt="LED ATEX.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/LIGHTS BIS.avif " alt="LIGHTS BIS.avif" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/MARINE gps.jpg " alt="MARINE gps.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/MOTERUS ELECTRIQUES.jpg " alt="MOTERUS ELECTRIQUES.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/MOTEURS WEICHAI.jpg " alt="MOTEURS WEICHAI.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/OUTILLAGE A MAIN.jpg " alt="OUTILLAGE A MAIN.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/PALAN.jpg " alt="PALAN.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/Perimeter-Light-300x300.jpg " alt="Perimeter-Light-300x300.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/POMPE A BETON.jpg " alt="POMPE A BETON.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/pompe a membrane.jpg " alt="pompe a membrane.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/pompe incendie.jpg " alt="pompe incendie.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/pompes immergees.jpg " alt="pompes immergees.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/POSTE A SOUDER GYS.jpg " alt="POSTE A SOUDER GYS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/PURGEURS.jpg " alt="PURGEURS.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/Rescue nautique.jpeg " alt="Rescue nautique.jpeg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/RIA.jpg " alt="RIA.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/SINLGE JOINT ELEVATOR.png " alt="SINLGE JOINT ELEVATOR.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/TETE DE FORAGE.png " alt="TETE DE FORAGE.png" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/THROW-OVER-LIFERAFT-12.jpg " alt="THROW-OVER-LIFERAFT-12.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/Torche ATEX.jpeg " alt="Torche ATEX.jpeg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/VANNE GUILLOTINE.jpg " alt="VANNE GUILLOTINE.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/VANNE PAPILLON.jpg " alt="VANNE PAPILLON.jpg" />
          <img className='object-contain object-center w-[140px] max-h-[100px] overflow-hidden self-center shrink-0 m-auto' src="./img/nosproduits/Y SLIPED ELEVATOR.png" alt="Y SLIPED ELEVATOR.pn" />
        </div>
      </div>
    </>
  );
};
