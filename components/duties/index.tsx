'use client';
import Image from 'next/image';
import { living, decoration ,flooring} from '@/public';

export default function Duties() {
  return (
    <div className="bg-lowpoly">
      
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 items-center">
        <div>
          <Image 
            src={living}
            alt="Modern Living Room" 
            className="w-full"
          />
        </div>
        <div className="theme-bg text-white p-6 text-2xl  ">
          <h3 className="text-lg font-bold mb-2">Standarizing Your Living</h3>
          <p className=''>
            From conceptualization to completion, we’ll <br/>
            guide you through every step of the<br/>
            renovation process. Our goal is to deliver a<br/>
             stunning, functional, and comfortable living <br/>
             space that exceeds your expectations.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 items-center">
      <div className="theme-bg text-white p-6 text-2xl">
          <h3 className="text-lg font-bold mb-2">Wall Panel & Flooring</h3>
          <p>
            Handcrafted from high-quality wood, our <br/>
            panels bring a touch of natural elegance to  <br/>
            any room. Perfect for modern living rooms,  <br/>
            cozy bedrooms, or sophisticated offices. <br/>
          </p>
        </div>
        <div>
          <Image 
            src={flooring}
            alt="Wall Panel & Flooring" 
            className="w-full"
          />
        </div>
        
      </div>

      {/* Section 3 */}
      <div className="grid md:grid-cols-2 items-center">
        <div>
          <Image 
            src={decoration}
            alt="Customized Furniture"
            className="w-full"
          />
        </div>
        <div className="theme-bg text-white p-6 text-2xl">
          <h3 className="font-bold mb-2">Customize Furniture & Decorative Items</h3>
          <p>
            Elevate your space with our bespoke <br/>
            customized decorative furniture!<br/>
            Handcrafted with love and attention to<br/>
             detail, our unique pieces blend style,<br/>
            functionality, and personality.
          </p>
        </div>
      </div>

    </div>
  );
}
