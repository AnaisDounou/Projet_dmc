import React from 'react'

export const ImgScroll = () => {
  // Define the keyframe animation as a style string
  const scrollAnimation = {
    animation: 'loop-scroll 50s linear infinite',
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
          <img className='object-contain object-center w-[200px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/DISJONCTEURS 1.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/VANNE GUILLOTINE.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/EPI COMBI.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/ADVANCE GEARBOX.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/MARINE gps.png" alt="" />
        </div>
        <div className='flex gap-12 items-center' style={scrollAnimation} aria-hidden="true">
          <img className='object-contain object-center w-[200px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/DISJONCTEURS 1.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/VANNE GUILLOTINE.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/EPI COMBI.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/ADVANCE GEARBOX.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/MARINE gps.png" alt="" />
        </div>
        <div className='flex gap-12 items-center' style={scrollAnimation} aria-hidden="true">
          <img className='object-contain object-center w-[200px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/DISJONCTEURS 1.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/VANNE GUILLOTINE.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/EPI COMBI.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/ADVANCE GEARBOX.png" alt="" />
          <img className='object-contain object-center w-[160px] overflow-hidden self-center shrink-0 m-auto' src="./img/produit/MARINE gps.png" alt="" />
        </div>
      </div>
    </>
  );
};
