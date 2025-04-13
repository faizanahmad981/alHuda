'use client';
import Image from 'next/image';
import { living, panel, decoration } from '@/public';

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
        <div className="theme-bg text-white p-6 text-2xl">
          <h3 className="text-lg font-bold mb-2">Standarizing Your Living</h3>
          <p>
            From conceptualization to completion, we’ll guide you through every step of the
            renovation process. Our goal is to deliver a stunning, functional, and comfortable living space
            that exceeds your expectations.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 items-center">
      <div className="theme-bg text-white p-6 text-2xl">
          <h3 className="text-lg font-bold mb-2">Wall Panel & Flooring</h3>
          <p>
            Handcrafted from high-quality wood, our panels bring a touch of natural elegance
            to any room. Perfect for modern living rooms, cozy bedrooms, or sophisticated offices.
          </p>
        </div>
        <div>
          <Image 
            src={decoration}
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
            Elevate your space with our bespoke customized decorative furniture!
            Handcrafted with love and attention to detail, our unique pieces blend style,
            functionality, and personality.
          </p>
        </div>
      </div>

    </div>
  );
}
