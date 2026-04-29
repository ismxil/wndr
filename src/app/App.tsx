import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import svgPaths from "../imports/LandingPage/svg-p110bl62lx";
import imgDsc01486Edited1 from "figma:asset/2c50818bda24d712b9059d43d91f8c95ba4777d0.png";
import imgImage from "figma:asset/d5fceb6532643d0d84ffe09c40c481ecdf59e15a.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans text-black w-full min-h-screen flex flex-col selection:bg-[#e6017f] selection:text-white">
      {/* Hero Section */}
      <section className="bg-[#fbe00d] relative w-full flex flex-col pt-6 px-6 pb-16 md:px-12 md:pt-8 md:pb-24">
        {/* Nav */}
        <nav className="flex items-center justify-between w-full">
          <div className="md:w-1/2 flex items-center">
            <div className="text-[#e6017f] font-semibold tracking-[-0.4px] z-20 text-[32px]">wndr—ground™</div>
          </div>
          
          <div className="md:w-1/2 flex items-center justify-end md:justify-between">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-12 text-[23.3px] font-medium tracking-[0.12px]">
              <a href="#" className="hover:opacity-70 transition-opacity">Stories</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Shop</a>
              <a href="#" className="hover:opacity-70 transition-opacity">About</a>
              <a href="#" className="text-black/50 hover:opacity-70 transition-opacity">Symposium</a>
              <a href="#" className="text-black/50 hover:opacity-70 transition-opacity">Podcasts</a>
            </div>
            
            <button className="hidden md:flex items-center justify-center bg-[#e6017f] text-white px-8 py-3 rounded-[17262px] font-semibold text-[24px] tracking-[-0.15px] hover:bg-pink-700 transition-colors shadow-sm">
              Join us
            </button>
            
            {/* Mobile Nav Toggle */}
            <button 
              className="md:hidden text-[#e6017f] z-20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="absolute inset-0 bg-[#fbe00d] z-10 flex flex-col items-center justify-center space-y-8 text-2xl font-medium pt-20">
            <a href="#" className="hover:opacity-70">Stories</a>
            <a href="#" className="hover:opacity-70">Shop</a>
            <a href="#" className="hover:opacity-70">About</a>
            <a href="#" className="text-black/50 hover:opacity-70">Symposium</a>
            <a href="#" className="text-black/50 hover:opacity-70">Podcasts</a>
            <button className="bg-[#e6017f] text-white px-8 py-3 rounded-full font-semibold">Join us</button>
          </div>
        )}

        {/* Hero Content */}
        <div className="flex-1 flex flex-col md:flex-row mt-24 md:mt-[160px] items-start w-full">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 text-[22.9px] font-medium tracking-[0.12px]">
            Next, April 30, 2026
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <h1 className="text-[#e6017f] leading-[1] md:leading-[88px] tracking-[-0.7px] max-w-4xl font-[Besley] font-normal text-[64px]">
              A third gentle space for the creative mind.<br/>
              Berlin—26
            </h1>
            <div className="text-xl md:text-[24px] leading-[30px] tracking-[-0.15px] text-black max-w-3xl">
              <p>In April 30, wndr—ground™ returned to Chicago for our third live symposium: Designing for Dignity.</p>
              <p>03: A Convening of Possibilities.</p>
            </div>
            <button className="border border-black text-black px-8 py-[17px] mt-4 rounded-[17262px] font-medium text-[23.1px] leading-[20.56px] w-fit hover:bg-black hover:text-[#fbe00d] transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </section>

      {/* Past Event 1 */}
      <section className="bg-[#fbe00d] py-16 md:py-32 px-6 md:px-12 flex flex-col">
        <div className="mb-12 md:mb-20">
          <h2 className="text-[23.1px] font-medium tracking-[0.12px] mb-8">Current edition</h2>
          <div className="h-px w-full bg-black"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-start w-full">
          <div className="w-full lg:flex-1 flex flex-col mt-4">
            <h3 className="text-4xl md:text-[45.2px] leading-[55.64px] font-medium mb-12">Fourth Edition</h3>
            <h4 className="text-4xl md:text-[43.8px] leading-[51.67px] font-serif font-light tracking-[-0.13px] mb-16 md:mb-24">
              Climate Realities and<br/>Responses
            </h4>
            
            <p className="text-xl md:text-[24px] leading-[30px] tracking-[-0.15px] mb-12">
              In Fourth edition, Climate Realities and Responses, we reflect on the biggest design challenge of all: the climate crisis and its compounding reverberations.
            </p>
            
            <button className="border border-black text-black px-6 py-[17px] rounded-[17262px] font-medium text-[23.1px] leading-[20.56px] w-fit hover:bg-black hover:text-[#fbe00d] transition-colors">
              Join the next one
            </button>
          </div>
          
          <div className="w-full lg:flex-1 h-[500px] md:h-[824.66px] bg-[#e6017f] relative overflow-hidden flex items-center justify-center">
            <img src={imgDsc01486Edited1} alt="Current Edition" className="absolute min-w-full min-h-full object-cover object-center scale-150" />
            <div className="absolute inset-x-0 px-6 md:px-12 flex justify-between pointer-events-none">
              <div className="w-8 h-8 rounded-full flex items-center justify-center -scale-x-100">
                <svg className="w-[14px] h-[25px]" fill="none" viewBox="0 0 14 25">
                  <path d={svgPaths.p2ae72800} stroke="#FBE00D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <svg className="w-[14px] h-[25px]" fill="none" viewBox="0 0 14 25">
                  <path d={svgPaths.p2ae72800} stroke="#FBE00D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Event 2 (Black Background) */}
      <section className="bg-black py-24 md:py-32 px-6 md:px-12 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-16 items-start w-full">
          <div className="w-full lg:flex-1 h-[500px] md:h-[824.66px] bg-[#e6017f] min-w-px"></div>
          
          <div className="w-full lg:flex-1 flex flex-col mt-4 text-[#fbe00d]">
            <h3 className="text-4xl md:text-[45.2px] leading-[55.64px] font-medium mb-12">Fourth Edition</h3>
            <h4 className="text-4xl md:text-[43.8px] leading-[51.67px] font-serif font-light tracking-[-0.13px] mb-16 md:mb-24">
              Climate Realities and<br/>Responses
            </h4>
            
            <p className="text-xl md:text-[24px] leading-[30px] tracking-[-0.15px] mb-12 text-[#fbe00d]">
              In Fourth edition, Climate Realities and Responses, we reflect on the biggest design challenge of all: the climate crisis and its compounding reverberations.
            </p>
            
            <button className="bg-[#e6017f] text-white px-8 py-[16px] rounded-[17262px] font-semibold text-[24px] leading-[30px] tracking-[-0.15px] w-fit hover:bg-pink-700 transition-colors shadow-md">
              Join us
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fbe00d] h-auto md:h-[720px] py-24 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-[1346px] mx-auto flex flex-col items-center gap-12">
          <h2 className="text-[48px] md:text-[72px] leading-[1.2] font-serif font-normal tracking-[-0.87px] text-black">
            <span className="font-sans font-bold tracking-[-0.8px] mr-4">wndr—ground™</span>
            is a global platform focused on design as social practice.
          </h2>
          <button className="border border-black text-black px-8 py-[17px] rounded-[17262px] font-medium text-[23.1px] leading-[20.56px] hover:bg-black hover:text-[#fbe00d] transition-colors">
            Volunteer your office
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-[#fbe00d] py-16 md:py-32 px-6 md:px-12 flex flex-col">
        <div className="mb-12 md:mb-20">
          <h2 className="text-[23.1px] font-medium tracking-[0.12px] mb-4">Featured</h2>
          <div className="h-px w-full bg-black"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-16 items-start w-full">
          <div className="w-full lg:flex-1 h-[500px] md:h-[824.66px] bg-[#e6017f] min-w-px"></div>
          
          <div className="w-full lg:flex-1 flex flex-col mt-4 text-black">
            <h3 className="text-4xl md:text-[45.2px] leading-[55.64px] font-medium mb-12">Fourth Edition</h3>
            <h4 className="md:text-[43.8px] leading-[51.67px] font-serif font-light tracking-[-0.13px] mb-16 md:mb-24 text-[40px]">
              Climate Realities and<br/>Responses
            </h4>
            
            <p className="text-xl md:text-[24px] leading-[30px] tracking-[-0.15px] mb-12">
              In Fourth edition, Climate Realities and Responses, we reflect on the biggest design challenge of all: the climate crisis and its compounding reverberations.
            </p>
            
            <button className="border border-black text-black px-8 py-[17px] rounded-[17262px] font-medium text-[23.1px] leading-[20.56px] w-fit hover:bg-black hover:text-[#fbe00d] transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </section>

      {/* Facilitators */}
      <section className="bg-[#fbe00d] pb-24 md:pb-40 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[26px]">
          <div className="w-full flex flex-col">
            <div className="h-px w-full bg-black mb-4" />
            <h3 className="text-[23.6px] font-medium tracking-[0.12px] text-black">Facilitators</h3>
          </div>
          
          {/* Person 1 */}
          <div className="flex flex-col gap-3">
            <div className="w-full h-[400px] md:h-[559px] bg-[#e6017f] relative overflow-hidden">
              <img src={imgImage} alt="Ismail Ahmad" className="absolute w-[125%] h-full max-w-none object-cover -left-[12.5%]" />
            </div>
            <div className="mt-1">
              <h4 className="text-[26.3px] leading-[33.18px] font-medium text-black tracking-[0.03px]">Ismail Ahmad</h4>
              <p className="text-[25.1px] leading-[31.1px] font-serif italic text-black tracking-[0.03px]">Co-founder</p>
            </div>
            <button className="mt-4 bg-[#e6017f] text-white px-6 py-[16px] rounded-[17262px] font-semibold text-[24px] leading-[30px] w-fit shadow-md hover:bg-pink-700 transition-colors">
              LinkedIn
            </button>
          </div>

          {/* Person 2 */}
          <div className="flex flex-col gap-3">
            <div className="w-full h-[400px] md:h-[559px] bg-[#e6017f] relative overflow-hidden">
              <img src={imgImage} alt="Ayomiposi Aluko" className="absolute w-[125%] h-full max-w-none object-cover -left-[12.4%]" />
            </div>
            <div className="mt-1">
              <h4 className="text-[27.3px] leading-[33.18px] font-medium text-black tracking-[0.03px]">Ayomiposi Aluko</h4>
              <p className="text-[25.1px] leading-[31.1px] font-serif italic text-black tracking-[0.03px]">Co-founder</p>
            </div>
            <button className="mt-4 bg-[#e6017f] text-white px-6 py-[16px] rounded-[17262px] font-semibold text-[24px] leading-[30px] w-fit shadow-md hover:bg-pink-700 transition-colors">
              LinkedIn
            </button>
          </div>

          {/* Person 3 */}
          <div className="flex flex-col gap-3">
            <div className="w-full h-[400px] md:h-[559px] bg-[#e6017f] relative overflow-hidden">
              <img src={imgImage} alt="Cindy Lüke" className="absolute w-full h-full object-cover left-0" />
            </div>
            <div className="mt-1">
              <h4 className="text-[26.7px] leading-[33.18px] font-medium text-black tracking-[0.03px]">Cindy Lüke</h4>
              <p className="text-[25.1px] leading-[31.1px] font-serif italic text-black tracking-[0.03px]">Partner</p>
            </div>
            <button className="mt-4 bg-[#e6017f] text-white px-6 py-[16px] rounded-[17262px] font-semibold text-[24px] leading-[30px] w-fit shadow-md hover:bg-pink-700 transition-colors">
              LinkedIn
            </button>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="bg-black text-white px-6 py-16 md:px-[48px] md:py-[64px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start w-full">
          <div className="w-full lg:flex-1 font-medium tracking-[-0.8px] leading-[1.2] text-[32px]">
            ● wndr—ground™
          </div>
          <div className="w-full lg:flex-1">
            <p className="text-[24px] md:text-[32px] font-serif font-normal leading-[1.25]">
              <span className="font-sans font-semibold tracking-[-0.2px] mr-2">wndr—ground™</span>
              is an exploratory approach to audio interviews, oral histories, and storytelling. This includes an ongoing series of podcast programs exploring topics of design at the intersection of critical social issues.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-16 lg:mt-32 items-start w-full">
          <div className="hidden lg:block w-full lg:flex-1" />
          <div className="w-full lg:flex-1 flex flex-col xl:flex-row gap-8 items-start xl:items-end justify-between">
            <div className="flex flex-col gap-4 w-full xl:w-auto">
              <p className="text-[20px] md:text-[26.6px] font-serif leading-[33.18px] text-white/80">What were listening to</p>
              <h3 className="text-[32px] md:text-[46.3px] font-medium leading-[1.2] mb-4">
                Future Feelings with Radha<br/>Mistry + Julian Bleeker
              </h3>
              <button className="border border-white text-white px-5 py-[14.8px] rounded-[17262px] font-medium text-[23.1px] leading-[20.56px] w-fit hover:bg-white hover:text-black transition-colors">
                Listen Now
              </button>
            </div>
            <div className="w-[160px] h-[160px] md:w-[240px] md:h-[240px] bg-[#fbe00d] rounded-[32px] shrink-0 mt-8 xl:mt-0" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 md:px-[25.92px] py-12 md:py-[48px] border-t border-black border-opacity-0">
        <div className="flex flex-col gap-12 md:gap-[26px]">
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-[26px] items-start w-full">
            <div className="w-full md:flex-1">
              <div className="w-[202.61px] h-[77.88px] overflow-hidden relative opacity-80">
                <img src={imgImage} alt="Footer Logo" className="absolute w-[260%] h-auto max-w-none object-cover -top-[80%] left-0 mix-blend-screen" />
              </div>
            </div>
            
            <div className="w-full md:flex-1 flex flex-col text-[22.9px] font-medium leading-[29px] tracking-[0.12px]">
              <a href="#" className="hover:text-white/80 transition-colors text-[#fefcfc]">Stories</a>
              <a href="#" className="hover:text-white/80 transition-colors text-white">Shop</a>
              <a href="#" className="hover:text-white/80 transition-colors text-[#fefcfc]">About</a>
              <a href="#" className="hover:text-white/80 transition-colors text-white">Symposium</a>
              <a href="#" className="hover:text-white/80 transition-colors text-white">Podcasts</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-[26px] items-start lg:items-center w-full text-[16.8px] text-[rgba(254,253,253,0.54)] font-medium tracking-[0.02px]">
            <div className="w-full md:flex-1 flex flex-wrap gap-[24px] text-[23.4px] text-white tracking-[0.12px]">
              <a href="mailto:thewndrground@gmail.com" className="hover:opacity-80 transition-opacity">thewndrground@gmail.com</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Instagram</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Twitter</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Slack</a>
            </div>
            
            <div className="w-full md:flex-1 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
              <div>
                <p>
                  Design and developed by <span className="text-[rgba(254,253,253,0.85)]"><a href="#" className="underline decoration-solid underline-offset-2 hover:text-white transition-colors">Ismail Ahmad</a></span> and CADARA
                </p>
              </div>
              
              <div className="xl:text-right">
                <p>©2026, All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
