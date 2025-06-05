import React from 'react'

export const LogoScroll = () => {
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

      <div className='flex flex-col gap-8 lg:gap-20 overflow-hidden'>

        <div className='flex gap-8 lg:gap-12 items-center' style={scrollAnimation}>

            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/ABB.png " alt="ABB DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Advance Marine.png " alt="Advance Marine DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/air torque.png " alt="air torque DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Alfagomma.png " alt="Alfagomma DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Atlas Copco.png " alt="Atlas Copco DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Babcock Wanson.jpg " alt="Babcock Wanson DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bauer.png " alt="Bauer DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bene Inox.png " alt="Bene Inox DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Benkan.jpg " alt="Benkan DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bray.png " alt="Bray DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bvalve.jpg " alt="Bvalve DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Castolin.png " alt="Castolin DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Caterpillar.png " alt="Caterpillar DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Chockfast.png " alt="Chockfast DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Delta Mobrey.png " alt="Delta Mobrey DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Demag.png " alt="Demag DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Dupont.png " alt="Dupont DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/E2S.png " alt="E2S DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Ega master.png " alt="Ega master DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Endress + Hauser.png " alt="Endress + Hauser DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Fein.png " alt="Fein DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/FG Inox.jpg " alt="FG Inox DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Garmin.png " alt="Garmin DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/goaltek.png " alt="goaltek DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/hansaflex.png " alt="hansaflex DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Hypertherm.png " alt="Hypertherm DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Hytorc.png " alt="Hytorc DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Industrial scinetific.png " alt="Industrial scinetific DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/JC Valves.png " alt="JC Valves DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Jet lube.png " alt="Jet lube DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/jinye propeller.jpg " alt="jinye propeller DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/John Deere.jpg " alt="John Deere DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Kalhour oilfield.jpg " alt="Kalhour oilfield DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KEYSUNG METAL.jpg " alt="KEYSUNG METAL DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Kito.png " alt="Kito DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KROHNE.png " alt="KROHNE DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KS Tools.jpg " alt="KS Tools DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KSB.png " alt="KSB DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Landini.png " alt="Landini DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Legrand.png " alt="Legrand DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Leroy Somer.png " alt="Leroy Somer DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Leser.jpg " alt="Leser DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Lowara.png " alt="Lowara DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Macoga.png " alt="Macoga DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Magnaflux.png " alt="Magnaflux DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Manitou.jpg " alt="Manitou DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Metabo.png " alt="Metabo DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Newland Oil tools.png " alt="Newland Oil tools DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Parker.png " alt="Parker DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Pentair.png " alt="Pentair DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Rockwool.png " alt="Rockwool DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Schneider.png " alt="Schneider DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/SEW.png " alt="SEW DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/sferaco.png " alt="sferaco DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Sidel.png " alt="Sidel DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Siemens.jpg " alt="Siemens DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/SKF.jpg " alt="SKF DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/SME Coupling.jpg " alt="SME Coupling DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Spectro UV.png " alt="Spectro UV DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Stihl.png " alt="Stihl DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/streamlight.png " alt="streamlight DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/sumimoto electric.png " alt="sumimoto electric DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Tadano.png " alt="Tadano DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Tecofi.png " alt="Tecofi DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Terex.png " alt="Terex DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Texas International.png " alt="Texas International DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Thermopads.jpg " alt="Thermopads DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Verlinde.jpg " alt="Verlinde DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/watch gas.png " alt="watch gas DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Weichai.png " alt="Weichai DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Weicon.png " alt="Weicon DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Wolf.png " alt="Wolf DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Wurth.png" alt="Wurt DMC consulting" /> 
        
        </div>
        
        <div className='flex gap-8 lg:gap-12 items-center' style={scrollAnimation} aria-hidden="true">

            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KEYSUNG METAL.jpg " alt="KEYSUNG METAL DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Kito.png " alt="Kito DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KROHNE.png " alt="KROHNE DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KS Tools.jpg " alt="KS Tools DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KSB.png " alt="KSB DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Landini.png " alt="Landini DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Legrand.png " alt="Legrand DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Leroy Somer.png " alt="Leroy Somer DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Leser.jpg " alt="Leser DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Lowara.png " alt="Lowara DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Macoga.png " alt="Macoga DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Magnaflux.png " alt="Magnaflux DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Manitou.jpg " alt="Manitou DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Metabo.png " alt="Metabo DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Newland Oil tools.png " alt="Newland Oil tools DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Parker.png " alt="Parker DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Pentair.png " alt="Pentair DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Rockwool.png " alt="Rockwool DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Schneider.png " alt="Schneider DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/SEW.png " alt="SEW DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/sferaco.png " alt="sferaco DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Sidel.png " alt="Sidel DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Siemens.jpg " alt="Siemens DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/SKF.jpg " alt="SKF DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/SME Coupling.jpg " alt="SME Coupling DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Spectro UV.png " alt="Spectro UV DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Stihl.png " alt="Stihl DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/streamlight.png " alt="streamlight DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/sumimoto electric.png " alt="sumimoto electric DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Tadano.png " alt="Tadano DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Tecofi.png " alt="Tecofi DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Terex.png " alt="Terex DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Texas International.png " alt="Texas International DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Thermopads.jpg " alt="Thermopads DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Verlinde.jpg " alt="Verlinde DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/watch gas.png " alt="watch gas DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Weichai.png " alt="Weichai DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Weicon.png " alt="Weicon DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Wolf.png " alt="Wolf DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Wurth.png" alt="Wurt DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/ABB.png " alt="ABB DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Advance Marine.png " alt="Advance Marine DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/air torque.png " alt="air torque DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Alfagomma.png " alt="Alfagomma DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Atlas Copco.png " alt="Atlas Copco DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Babcock Wanson.jpg " alt="Babcock Wanson DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bauer.png " alt="Bauer DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bene Inox.png " alt="Bene Inox DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Benkan.jpg " alt="Benkan DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bray.png " alt="Bray DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bvalve.jpg " alt="Bvalve DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Castolin.png " alt="Castolin DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Caterpillar.png " alt="Caterpillar DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Chockfast.png " alt="Chockfast DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Delta Mobrey.png " alt="Delta Mobrey DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Demag.png " alt="Demag DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Dupont.png " alt="Dupont DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/E2S.png " alt="E2S DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Ega master.png " alt="Ega master DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Endress + Hauser.png " alt="Endress + Hauser DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Fein.png " alt="Fein DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/FG Inox.jpg " alt="FG Inox DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Garmin.png " alt="Garmin DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/goaltek.png " alt="goaltek DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/hansaflex.png " alt="hansaflex DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Hypertherm.png " alt="Hypertherm DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Hytorc.png " alt="Hytorc DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Industrial scinetific.png " alt="Industrial scinetific DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/JC Valves.png " alt="JC Valves DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Jet lube.png " alt="Jet lube DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/jinye propeller.jpg " alt="jinye propeller DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/John Deere.jpg " alt="John Deere DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Kalhour oilfield.jpg " alt="Kalhour oilfield DMC consulting" /> 
        </div>

        <div className='flex gap-8 lg:gap-12 items-center' style={scrollAnimation}>


            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Fein.png " alt="Fein DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/FG Inox.jpg " alt="FG Inox DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Garmin.png " alt="Garmin DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/goaltek.png " alt="goaltek DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/hansaflex.png " alt="hansaflex DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Hypertherm.png " alt="Hypertherm DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Hytorc.png " alt="Hytorc DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Industrial scinetific.png " alt="Industrial scinetific DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/JC Valves.png " alt="JC Valves DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Jet lube.png " alt="Jet lube DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/jinye propeller.jpg " alt="jinye propeller DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/John Deere.jpg " alt="John Deere DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Kalhour oilfield.jpg " alt="Kalhour oilfield DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/ABB.png " alt="ABB DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Advance Marine.png " alt="Advance Marine DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/air torque.png " alt="air torque DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Alfagomma.png " alt="Alfagomma DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Atlas Copco.png " alt="Atlas Copco DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Babcock Wanson.jpg " alt="Babcock Wanson DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bauer.png " alt="Bauer DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bene Inox.png " alt="Bene Inox DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Benkan.jpg " alt="Benkan DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bray.png " alt="Bray DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Bvalve.jpg " alt="Bvalve DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Castolin.png " alt="Castolin DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Caterpillar.png " alt="Caterpillar DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Chockfast.png " alt="Chockfast DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Delta Mobrey.png " alt="Delta Mobrey DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Demag.png " alt="Demag DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Dupont.png " alt="Dupont DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/E2S.png " alt="E2S DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Ega master.png " alt="Ega master DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Endress + Hauser.png " alt="Endress + Hauser DMC consulting" /> 
            
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KEYSUNG METAL.jpg " alt="KEYSUNG METAL DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Kito.png " alt="Kito DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KROHNE.png " alt="KROHNE DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KS Tools.jpg " alt="KS Tools DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/KSB.png " alt="KSB DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Landini.png " alt="Landini DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Legrand.png " alt="Legrand DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Leroy Somer.png " alt="Leroy Somer DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Leser.jpg " alt="Leser DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Lowara.png " alt="Lowara DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Macoga.png " alt="Macoga DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Magnaflux.png " alt="Magnaflux DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Manitou.jpg " alt="Manitou DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Metabo.png " alt="Metabo DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Newland Oil tools.png " alt="Newland Oil tools DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Parker.png " alt="Parker DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Pentair.png " alt="Pentair DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Rockwool.png " alt="Rockwool DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Schneider.png " alt="Schneider DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/SEW.png " alt="SEW DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/sferaco.png " alt="sferaco DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Sidel.png " alt="Sidel DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Siemens.jpg " alt="Siemens DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/SKF.jpg " alt="SKF DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/SME Coupling.jpg " alt="SME Coupling DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Spectro UV.png " alt="Spectro UV DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Stihl.png " alt="Stihl DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/streamlight.png " alt="streamlight DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/sumimoto electric.png " alt="sumimoto electric DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Tadano.png " alt="Tadano DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Tecofi.png " alt="Tecofi DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Terex.png " alt="Terex DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Texas International.png " alt="Texas International DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Thermopads.jpg " alt="Thermopads DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Verlinde.jpg " alt="Verlinde DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/watch gas.png " alt="watch gas DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Weichai.png " alt="Weichai DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Weicon.png " alt="Weicon DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Wolf.png " alt="Wolf DMC consulting" /> 
            <img loading="lazy" className='object-contain onject-center h-[24px] lg:h-[48px]' src="./img/MARQUES/Wurth.png" alt="Wurt DMC consulting" /> 
        
        </div>
    
      </div>
    </>
  );
};
