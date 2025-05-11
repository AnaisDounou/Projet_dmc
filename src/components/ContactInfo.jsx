import React from 'react'

export const ContactInfo = () => {
  return (
    <section>
        <h2 className='bg-[#1C4179] text-[#F49F1E] text-2xl xl:text-3xl font-black text-center uppercase w-full p-8'>CONTACTEZ NOUS</h2>
        <p className='m-6 md:my-12 md:mx-16 lg:mx-28 text-xl lg:text-3xl font-black text-center text-[#1C4179]'>“Remplissez le formulaire ci-dessous, nous vous répondrons rapidement.”</p>
        
        {/*  */}

        <div className='m-6 md:my-12 md:mx-16 lg:mx-28 grid md:grid-cols-2 gap-4 lg:gap-8'>
            {/* contact form */}
            <div className='shadow-md rounded-xl border border-gray-100 p-4 lg:p-12'>
                <form className='flex justify-between gap-4 flex-col h-full' action="">
                    <div>
                        <label className='hidden' htmlFor="Nom">Nom</label>
                        <input className='px-8 py-4 bg-[#FCE2BB] rounded-lg w-full placeholder:text-gray-600 outline-hidden' type="text" name="Nom" id="Nom" placeholder='Nom' />
                    </div>
                    <div>
                        <label className='hidden' htmlFor="Email">Email</label>
                        <input className='px-8 py-4 bg-[#FCE2BB] rounded-lg w-full placeholder:text-gray-600 outline-hidden' type="email" name="Email" id="Email" placeholder='Email' />
                    </div>
                    <div>
                        <label className='hidden' htmlFor="telephone">Téléphone</label>
                        <input className='px-8 py-4 bg-[#FCE2BB] rounded-lg w-full placeholder:text-gray-600 outline-hidden' type="tel" name="telephone" id="telephone" placeholder='Téléphone' />
                    </div>
                    <div>
                        <label className='hidden' htmlFor="Message">Message</label>
                        <textarea className='px-8 py-4 bg-[#FCE2BB] rounded-lg w-full placeholder:text-gray-600 h-40 outline-hidden'  name="Message" id="Message" placeholder='Message'></textarea>
                    </div>
                    <input className='px-8 py-4 bg-[#F49F1E] rounded-lg w-full text-white font-bold'  type="submit" value="Envoyer" />
                </form>
            </div>
            <img className='rounded-xl object-cover h-full' src="./img/pipeline-8838496_1280 1.png" alt="" />
        </div>

        {/*  */}

        <div className='bg-[#1C4179] m-6 md:my-12 md:mx-16 lg:mx-28 p-6 lg:p-12 text-white grid md:grid-cols-3 gap-8'>
            {/* <div className='col-span-2 md:col-span-1 mt-4 md:mt-0'>
                <span className='text-xl font-bold block mb-3'>Contacts</span>
                <ul className='flex flex-col gap-1'>
                    <li className='break-keep'>+33 (0)7 88 31 43 80</li>
                    <li>contact@dmcconsulting.net</li>
                </ul>
                
                <span className='text-xl font-bold block mb-3 mt-5'>Adresse</span>
                <ul className='flex flex-col gap-1'>
                    <li>15 Rue Malher 75004 Paris</li>
                </ul>
            </div> */}
            <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
            <span className="text-xl font-bold block mb-3">Contacts</span>
            <ul className="flex flex-col gap-1">
              <li className="break-keep">
                <a
                  href="tel:+33788314380"
                  className="hover:underline text-white"
                >
                  +33 (0)7 88 31 43 80
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@dmcconsulting.net"
                  className="hover:underline text-white"
                >
                  contact@dmcconsulting.net
                </a>
              </li>
            </ul>
            <br /><hr className='w-4/5'/>
            <span className="text-xl font-bold block mb-3 mt-5">Adresse</span>
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=15+Rue+Malher+75004+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  15 Rue Malher 75004 Paris
                </a>
              </li>
            </ul>
          </div>
            <div className='col-span-2'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928.1102074968677!2d2.3606117461131295!3d48.85645439265621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0203415555%3A0xdc1dd686570e0121!2s15%20Rue%20Malher%2C%2075004%20Paris%2C%20France!5e0!3m2!1sen!2sde!4v1746919599555!5m2!1sen!2sde" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-96'></iframe>
            </div>
        </div>
    </section>
  )
}
