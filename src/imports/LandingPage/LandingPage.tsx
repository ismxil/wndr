import svgPaths from "./svg-p110bl62lx";
import imgDsc01486Edited1 from "./2c50818bda24d712b9059d43d91f8c95ba4777d0.png";
import imgImage from "./d5fceb6532643d0d84ffe09c40c481ecdf59e15a.png";

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[24px] relative shrink-0">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black tracking-[0.121px] whitespace-nowrap">
        <p className="text-[23.3px] whitespace-pre">
          <span className="leading-[29px]">Stories</span>
          <span className="font-['Suisse_Intl:Medium',sans-serif] leading-[29px] not-italic text-[rgba(255,255,255,0.85)]">{`    `}</span>
          <span className="leading-[29px]">Shop</span>
          <span className="font-['Suisse_Intl:Medium',sans-serif] leading-[29px] not-italic text-[rgba(255,255,255,0.85)]">{`    `}</span>
          <span className="leading-[29px]">About</span>
          <span className="font-['Suisse_Intl:Medium',sans-serif] leading-[29px] not-italic text-[#ebd6d6]">{`    `}</span>
          <span className="leading-[29px]">Symposium</span>
          <span className="font-['Suisse_Intl:Medium',sans-serif] leading-[29px] not-italic text-[#ebd6d6]">{`    `}</span>
          <span className="leading-[29px]">Podcasts</span>
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[936px]">
      <Frame3 />
      <div className="bg-[#e6017f] content-stretch flex items-center justify-center pb-[20px] pt-[16px] px-[20px] relative rounded-[17262.699px] shadow-[0px_1.728px_6.048px_0px_rgba(0,0,0,0.16)] shrink-0" data-name="button">
        <div className="flex flex-col font-['Suisse_Intl:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.15px] whitespace-nowrap">
          <p className="leading-[30px]">Join us</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Suisse_Intl:SemiBold',sans-serif] leading-[58px] not-italic opacity-92 relative shrink-0 text-[#e6017f] text-[48px] tracking-[-0.4px] whitespace-nowrap">wndr—ground™</p>
      <Frame4 />
    </div>
  );
}

function SlotColumnUnit() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Slot → column-unit">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22.9px] text-black tracking-[0.121px] whitespace-nowrap">
        <p className="leading-[29px]">Next, April 30, 2026</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['Suisse_Intl:Medium',sans-serif] gap-[24px] items-start not-italic relative shrink-0">
      <p className="leading-[88px] opacity-92 relative shrink-0 text-[#e6017f] text-[72px] tracking-[-0.8px] w-[836.75px]">
        A third gentle space for the creative mind.
        <br aria-hidden="true" />
        Berlin—26
      </p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[24px] text-black tracking-[-0.15px] w-[740.99px]">
        <p className="leading-[30px] mb-0">In April 30, wndr—ground™ returned to Chicago for our third live symposium: Designing for Dignity.</p>
        <p className="leading-[30px]">03: A Convening of Possibilities.</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] h-full items-start min-w-px relative">
      <Frame6 />
      <div className="relative rounded-[17262.699px] shrink-0" data-name="button">
        <div className="content-stretch flex items-start overflow-clip pb-[21px] pt-[17px] px-[21px] relative rounded-[inherit] size-full">
          <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.1px] text-black whitespace-nowrap">
            <p className="leading-[20.56px]">Sign up</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[17262.699px]" />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-[580px] items-center relative shrink-0 w-full">
      <SlotColumnUnit />
      <Frame7 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#fbe00d] h-[1080px] relative shrink-0 w-full" data-name="hero">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[32px] pt-[16px] px-[24px] relative size-full">
          <Frame5 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return <div className="bg-black h-px shrink-0 w-full" data-name="Separator" />;
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.1px] text-black tracking-[0.121px] whitespace-nowrap">
        <p className="leading-[29px]">Current edition</p>
      </div>
      <Separator />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.64px] right-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[45.2px] text-black whitespace-nowrap">
        <p className="leading-[55.64px]">Fourth Edition</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[51.64px] right-0 top-[54.97px]" data-name="Container">
      <div className="flex flex-col font-['Reckless:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[43.8px] text-black tracking-[-0.135px] whitespace-nowrap">
        <p className="leading-[51.67px] mb-0">Climate Realities and</p>
        <p className="leading-[51.67px]">Responses</p>
      </div>
    </div>
  );
}

function SlotColumnUnit1() {
  return (
    <div className="h-[824.66px] relative shrink-0 w-[448px]" data-name="Slot → column-unit">
      <Container />
      <Container1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[24px] text-black top-[268.13px] tracking-[-0.15px] w-[443.29px]">
        <p className="leading-[30px] mb-0">In Fourth edition, Climate Realities and</p>
        <p className="leading-[30px] mb-0">Responses, we reflect on the biggest</p>
        <p className="leading-[30px]">design challenge of all: the climate crisis and its compounding reverberations.</p>
      </div>
      <div className="absolute left-0 rounded-[17262.699px] top-[384.71px]" data-name="button">
        <div className="content-stretch flex items-start overflow-clip pb-[21px] pt-[17px] px-[21px] relative rounded-[inherit] size-full">
          <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.1px] text-black whitespace-nowrap">
            <p className="leading-[20.56px]">Join the next one</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[17262.699px]" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[15.28%_29.17%_15.28%_36.11%]" data-name="Group">
      <div className="absolute inset-[-6.75%_-13.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1111 25.2222">
          <g id="Group">
            <path d={svgPaths.p2ae72800} id="Vector" stroke="var(--stroke-0, #FBE00D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative size-[32px]" data-name="Frame">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[15.28%_29.17%_15.28%_36.11%]" data-name="Group">
      <div className="absolute inset-[-6.75%_-13.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1111 25.2222">
          <g id="Group">
            <path d={svgPaths.p2ae72800} id="Vector" stroke="var(--stroke-0, #FBE00D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Frame">
      <Group1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 top-[375.05px] w-[1158px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#e6017f] h-[824.66px] overflow-clip relative shrink-0 w-[1237.19px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[883.29px] left-1/2 top-1/2 w-[1266.615px]" data-name="DSC01486 Edited 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[145.43%] left-0 max-w-none top-[-45.43%] w-full" src={imgDsc01486Edited1} />
        </div>
      </div>
      <Frame23 />
    </div>
  );
}

function ColumnSet() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="column-set">
      <SlotColumnUnit1 />
      <Frame21 />
    </div>
  );
}

function PastEvent() {
  return (
    <div className="bg-[#fbe00d] relative shrink-0 w-full" data-name="past event">
      <div className="content-stretch flex flex-col gap-[64px] items-start pb-[200px] pt-[32px] px-[32px] relative size-full">
        <Frame9 />
        <ColumnSet />
      </div>
    </div>
  );
}

function Frame10() {
  return <div className="bg-[#e6017f] flex-[1_0_0] h-[824.66px] min-w-px" />;
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.64px] right-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fbe00d] text-[45.2px] whitespace-nowrap">
        <p className="leading-[55.64px]">Fourth Edition</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[51.64px] right-0 top-[54.97px]" data-name="Container">
      <div className="flex flex-col font-['Reckless:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fbe00d] text-[43.8px] tracking-[-0.135px] whitespace-nowrap">
        <p className="leading-[51.67px] mb-0">Climate Realities and</p>
        <p className="leading-[51.67px]">Responses</p>
      </div>
    </div>
  );
}

function SlotColumnUnit2() {
  return (
    <div className="flex-[1_0_0] h-[824.66px] min-w-px relative" data-name="Slot → column-unit">
      <Container2 />
      <Container3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#fbe00d] text-[24px] top-[268.13px] tracking-[-0.15px] w-[443.29px]">
        <p className="leading-[30px] mb-0">In Fourth edition, Climate Realities and</p>
        <p className="leading-[30px] mb-0">Responses, we reflect on the biggest</p>
        <p className="leading-[30px]">design challenge of all: the climate crisis and its compounding reverberations.</p>
      </div>
      <div className="absolute bg-[#e6017f] content-stretch flex items-center justify-center left-0 pb-[20px] pt-[16px] px-[20px] rounded-[17262.699px] shadow-[0px_1.728px_6.048px_0px_rgba(0,0,0,0.16)] top-[384.71px]" data-name="button">
        <div className="flex flex-col font-['Suisse_Intl:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.15px] whitespace-nowrap">
          <p className="leading-[30px]">Join us</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[64px] items-center min-w-px relative">
      <Frame10 />
      <SlotColumnUnit2 />
    </div>
  );
}

function ColumnSet1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="column-set">
      <Frame14 />
    </div>
  );
}

function PastEvent1() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="past event">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[32px] py-[120px] relative size-full">
          <ColumnSet1 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0">
      <div className="flex flex-col font-['Reckless:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-center tracking-[-0.871px] w-[1346.096px]">
        <p>
          <span className="font-['Suisse_Intl:Bold',sans-serif] leading-[88px] not-italic text-[72px] tracking-[-0.8px]">wndr—ground™</span>
          <span className="leading-[72.58px] text-[71.7px]">{` `}</span>
          <span className="leading-[72.58px] text-[72px]">is a global platform focused on design as social practice.</span>
        </p>
      </div>
      <div className="relative rounded-[17262.699px] shrink-0" data-name="button">
        <div className="content-stretch flex items-start overflow-clip pb-[21px] pt-[17px] px-[21px] relative rounded-[inherit] size-full">
          <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.1px] text-black whitespace-nowrap">
            <p className="leading-[20.56px]">Volunteer your office</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[17262.699px]" />
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#fbe00d] h-[720px] relative shrink-0 w-full" data-name="CTA">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[48px] relative size-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Separator1() {
  return <div className="bg-black h-px shrink-0 w-full" data-name="Separator" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.1px] text-black tracking-[0.121px] whitespace-nowrap">
        <p className="leading-[29px]">Featured</p>
      </div>
      <Separator1 />
    </div>
  );
}

function Frame13() {
  return <div className="bg-[#e6017f] flex-[1_0_0] h-[824.66px] min-w-px" />;
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.64px] right-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[45.2px] text-black whitespace-nowrap">
        <p className="leading-[55.64px]">Fourth Edition</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[51.64px] right-0 top-[54.97px]" data-name="Container">
      <div className="flex flex-col font-['Reckless:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[43.8px] text-black tracking-[-0.135px] whitespace-nowrap">
        <p className="leading-[51.67px] mb-0">Climate Realities and</p>
        <p className="leading-[51.67px]">Responses</p>
      </div>
    </div>
  );
}

function SlotColumnUnit3() {
  return (
    <div className="flex-[1_0_0] h-[824.66px] min-w-px relative" data-name="Slot → column-unit">
      <Container4 />
      <Container5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[24px] text-black top-[268.13px] tracking-[-0.15px] w-[443.29px]">
        <p className="leading-[30px] mb-0">In Fourth edition, Climate Realities and</p>
        <p className="leading-[30px] mb-0">Responses, we reflect on the biggest</p>
        <p className="leading-[30px]">design challenge of all: the climate crisis and its compounding reverberations.</p>
      </div>
      <div className="absolute left-0 rounded-[17262.699px] top-[384.71px]" data-name="button">
        <div className="content-stretch flex items-start overflow-clip pb-[21px] pt-[17px] px-[21px] relative rounded-[inherit] size-full">
          <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.1px] text-black whitespace-nowrap">
            <p className="leading-[20.56px]">Sign up</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[17262.699px]" />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[64px] items-center min-w-px relative">
      <Frame13 />
      <SlotColumnUnit3 />
    </div>
  );
}

function ColumnSet2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="column-set">
      <Frame15 />
    </div>
  );
}

function PastEvent2() {
  return (
    <div className="bg-[#fbe00d] relative shrink-0 w-full" data-name="past event">
      <div className="content-stretch flex flex-col gap-[64px] items-start pb-[120px] pt-[32px] px-[32px] relative size-full">
        <Frame12 />
        <ColumnSet2 />
      </div>
    </div>
  );
}

function Separator2() {
  return <div className="bg-black h-px shrink-0 w-full" data-name="Separator" />;
}

function SlotColumnUnit4() {
  return (
    <div className="relative self-stretch shrink-0 w-[448px]" data-name="Slot → column-unit">
      <div className="content-stretch flex flex-col gap-[8.12px] items-start pb-[684.22px] pt-[8.63px] relative size-full">
        <Separator2 />
        <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.6px] text-black tracking-[0.121px] whitespace-nowrap">
          <p className="leading-[29px]">Facilitators</p>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[559px] min-h-[559px] min-w-[447px] relative shrink-0 w-[447px]" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-12.53%] max-w-none top-0 w-[125.06%]" src={imgImage} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#e6017f] content-stretch flex flex-col h-[559px] items-start pb-[559px] relative shrink-0 w-full" data-name="Link">
      <Image />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[26.3px] text-black tracking-[0.028px] w-full">
        <p className="leading-[33.18px]">Ismail Ahmad</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Reckless:Medium_Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[25.1px] text-black tracking-[0.028px] w-full">
        <p className="leading-[31.1px]">Co-founder</p>
      </div>
    </div>
  );
}

function SlotFigcaption() {
  return (
    <div className="content-stretch flex flex-col gap-[5.48px] items-start relative shrink-0 w-full" data-name="Slot → Figcaption">
      <Container7 />
      <Container8 />
    </div>
  );
}

function FigurePartFigure() {
  return (
    <div className="content-stretch flex flex-col gap-[12.89px] items-start pb-[55.28px] relative shrink-0 w-full" data-name="Figure::part(figure)">
      <Link />
      <SlotFigcaption />
      <div className="bg-[#e6017f] content-stretch flex items-center justify-center pb-[20px] pt-[16px] px-[20px] relative rounded-[17262.699px] shadow-[0px_1.728px_6.048px_0px_rgba(0,0,0,0.16)] shrink-0" data-name="button">
        <div className="flex flex-col font-['Suisse_Intl:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.15px] whitespace-nowrap">
          <p className="leading-[30px]">LinkedIn</p>
        </div>
      </div>
    </div>
  );
}

function SlotMediaItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[447px]" data-name="Slot → media-item">
      <FigurePartFigure />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[559px] min-h-[559px] min-w-[448px] relative shrink-0 w-[448px]" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-12.39%] max-w-none top-0 w-[124.78%]" src={imgImage} />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#e6017f] content-stretch flex flex-col h-[559px] items-start pb-[559px] relative shrink-0 w-full" data-name="Link">
      <Image1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[27.3px] text-black tracking-[0.028px] w-full">
        <p className="leading-[33.18px]">Ayomiposi Aluko</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Reckless:Medium_Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[25.1px] text-black tracking-[0.028px] w-full">
        <p className="leading-[31.1px]">Co-founder</p>
      </div>
    </div>
  );
}

function SlotFigcaption1() {
  return (
    <div className="content-stretch flex flex-col gap-[5.47px] items-start relative shrink-0 w-full" data-name="Slot → Figcaption">
      <Container9 />
      <Container10 />
    </div>
  );
}

function FigurePartFigure1() {
  return (
    <div className="content-stretch flex flex-col gap-[12.81px] items-start pb-[55.28px] relative shrink-0 w-full" data-name="Figure::part(figure)">
      <Link1 />
      <SlotFigcaption1 />
      <div className="bg-[#e6017f] content-stretch flex items-center justify-center pb-[20px] pt-[16px] px-[20px] relative rounded-[17262.699px] shadow-[0px_1.728px_6.048px_0px_rgba(0,0,0,0.16)] shrink-0" data-name="button">
        <div className="flex flex-col font-['Suisse_Intl:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.15px] whitespace-nowrap">
          <p className="leading-[30px]">LinkedIn</p>
        </div>
      </div>
    </div>
  );
}

function SlotMediaItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[448px]" data-name="Slot → media-item">
      <FigurePartFigure1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[559px] min-h-[559px] min-w-[447.19000244140625px] relative shrink-0 w-[447.19px]" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#e6017f] content-stretch flex flex-col h-[559px] items-start pb-[559px] relative shrink-0 w-full" data-name="Link">
      <Image2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[26.7px] text-black tracking-[0.028px] w-full">
        <p className="leading-[33.18px]">Cindy Lüke</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Reckless:Medium_Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[25.1px] text-black tracking-[0.028px] w-full">
        <p className="leading-[31.1px]">Partner</p>
      </div>
    </div>
  );
}

function SlotFigcaption2() {
  return (
    <div className="content-stretch flex flex-col gap-[5.48px] items-start relative shrink-0 w-full" data-name="Slot → Figcaption">
      <Container11 />
      <Container12 />
    </div>
  );
}

function FigurePartFigure2() {
  return (
    <div className="content-stretch flex flex-col gap-[12.89px] items-start pb-[55.28px] relative shrink-0 w-full" data-name="Figure::part(figure)">
      <Link2 />
      <SlotFigcaption2 />
      <div className="bg-[#e6017f] content-stretch flex items-center justify-center pb-[20px] pt-[16px] px-[20px] relative rounded-[17262.699px] shadow-[0px_1.728px_6.048px_0px_rgba(0,0,0,0.16)] shrink-0" data-name="button">
        <div className="flex flex-col font-['Suisse_Intl:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.15px] whitespace-nowrap">
          <p className="leading-[30px]">LinkedIn</p>
        </div>
      </div>
    </div>
  );
}

function SlotMediaItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[447.19px]" data-name="Slot → media-item">
      <FigurePartFigure2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[26px] items-start max-w-[1394.18994140625px] relative shrink-0 w-full" data-name="Container">
      <SlotMediaItem />
      <SlotMediaItem1 />
      <SlotMediaItem2 />
    </div>
  );
}

function GalleryGrid() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1394.18994140625px] relative shrink-0 w-[1394.19px]" data-name="gallery-grid">
      <Container6 />
    </div>
  );
}

function SlotColumnUnit5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[1394.19px]" data-name="Slot → column-unit">
      <GalleryGrid />
    </div>
  );
}

function ColumnSet3() {
  return (
    <div className="content-stretch flex gap-[26px] h-[777.54px] items-start relative shrink-0 w-full" data-name="column-set">
      <SlotColumnUnit4 />
      <SlotColumnUnit5 />
    </div>
  );
}

function Cta1() {
  return (
    <div className="bg-[#fbe00d] relative shrink-0 w-full" data-name="CTA">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[120px] pt-[48px] px-[24px] relative size-full">
          <ColumnSet3 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-white tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[76px]">● wndr—ground™</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pb-[48px] relative">
      <p className="font-['Reckless:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-[751.414px]">
        <span className="font-['Suisse_Intl:SemiBold',sans-serif] leading-[38px] text-[32px] tracking-[-0.2px]">wndr—ground™</span>
        <span className="leading-[33.18px] text-[32px]">{` `}</span>
        <span className="font-['Reckless:Regular',sans-serif] leading-[40px] text-[32px]">is an exploratory approach to audio interviews, oral histories, and storytelling. This includes an ongoing series of podcast programs exploring topics of design at the intersection of critical social issues.</span>
      </p>
    </div>
  );
}

function ColumnSet4() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="column-set">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame16 />
      </div>
      <Frame22 />
    </div>
  );
}

function Frame17() {
  return <div className="flex-[1_0_0] h-[289.19px] min-w-px" />;
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-white w-[585px]">
      <div className="flex flex-col font-['Reckless:Regular',sans-serif] justify-center relative shrink-0 text-[26.6px] w-full">
        <p className="leading-[33.18px]">What were listening to</p>
      </div>
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center relative shrink-0 text-[46.3px] w-full">
        <p className="leading-[55.64px] mb-0">Future Feelings with Radha</p>
        <p className="leading-[55.64px]">Mistry + Julian Bleeker</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col h-[150px] items-start justify-between relative shrink-0">
      <Frame25 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start pb-[18.28px] pt-[14.824px] px-[18.28px] relative rounded-[17262.699px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[17262.699px]" />
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[23.1px] text-white whitespace-nowrap">
        <p className="leading-[20.56px]">Listen Now</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
      <Frame24 />
      <Link3 />
    </div>
  );
}

function Container14() {
  return <div className="h-[289.19px] shrink-0 w-full" data-name="Container" />;
}

function SlotColumnUnit6() {
  return (
    <div className="bg-[#fbe00d] content-stretch flex flex-col items-start relative rounded-[32px] shrink-0 size-[240px]" data-name="Slot → column-unit">
      <Container14 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-w-px relative self-stretch">
      <Frame19 />
      <SlotColumnUnit6 />
    </div>
  );
}

function ColumnSet5() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="column-set">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <ColumnSet4 />
      <ColumnSet5 />
    </div>
  );
}

function Cta2() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="CTA">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[48px] py-[64px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[77.88px] min-h-[77.87999725341797px] min-w-[202.61000061035156px] relative shrink-0 w-[202.61px]" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[260.16%] left-0 max-w-none top-[-80.08%] w-full" src={imgImage} />
      </div>
    </div>
  );
}

function FigurePartFigureLink() {
  return (
    <div className="content-stretch flex flex-col h-[77.88px] items-start pb-[77.875px] relative shrink-0 w-full" data-name="Figure::part(figure) → Link">
      <Image3 />
    </div>
  );
}

function MediaItem() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[202.6199951171875px] relative shrink-0 w-[202.61px]" data-name="media-item">
      <FigurePartFigureLink />
    </div>
  );
}

function SlotColumnUnit7() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[921px]" data-name="Slot → column-unit">
      <MediaItem />
    </div>
  );
}

function SlotColumnUnit8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[921.19px]" data-name="Slot → column-unit">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fefcfc] text-[0px] tracking-[0.121px] whitespace-nowrap">
        <p className="leading-[29px] mb-0 text-[22.9px]">Stories</p>
        <p className="leading-[29px] mb-0 text-[22.9px] text-white">Shop</p>
        <p className="leading-[29px] mb-0 text-[22.9px]">About</p>
        <p className="leading-[29px] mb-0 text-[22.9px] text-white">Symposium</p>
        <p className="leading-[29px] text-[22.9px] text-white">Podcasts</p>
      </div>
    </div>
  );
}

function ColumnSet6() {
  return (
    <div className="content-stretch flex gap-[26px] h-[261.14px] items-start min-h-[261.1400146484375px] relative shrink-0 w-full" data-name="column-set">
      <SlotColumnUnit7 />
      <SlotColumnUnit8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['Suisse_Intl:Medium',sans-serif] gap-[24px] items-start leading-[0] not-italic relative shrink-0 text-[23.4px] text-white tracking-[0.121px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[29px]">thewndrground@gmail.com</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[29px]">Instagram</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[29px]">Twitter</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[29px]">Slack</p>
      </div>
    </div>
  );
}

function SlotColumnUnit9() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[921px]" data-name="Slot → column-unit">
      <Frame2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative self-stretch shrink-0 w-[606px]" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[0.73px] relative size-full">
          <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(254,253,253,0.54)] tracking-[0.017px] whitespace-nowrap">
            <p className="text-[16.5px]">
              <span className="leading-[20.74px]">Design and developed by</span>
              <span className="font-['Suisse_Intl:Medium',sans-serif] leading-[20.74px] not-italic text-[rgba(254,253,253,0.85)]">{` `}</span>
              <span className="[text-decoration-skip-ink:none] decoration-solid font-['Suisse_Intl:Medium',sans-serif] leading-[20.74px] not-italic underline">Ismail Ahmad</span>
              <span className="font-['Suisse_Intl:Medium',sans-serif] leading-[20.74px] not-italic text-[rgba(254,253,253,0.85)]">{` `}</span>
              <span className="leading-[20.74px]">{`and `}</span>
              <span className="leading-[20.74px]">CADARA</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-0 pb-[0.73px] right-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Suisse_Intl:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16.8px] text-[rgba(254,253,253,0.54)] text-right tracking-[0.017px] whitespace-nowrap">
        <p className="leading-[20.74px]">©2026, All rights reserved</p>
      </div>
    </div>
  );
}

function SlotColumnUnit10() {
  return (
    <div className="relative self-stretch shrink-0 w-[289.19px]" data-name="Slot → column-unit">
      <Container18 />
    </div>
  );
}

function ColumnSet7() {
  return (
    <div className="content-stretch flex gap-[26px] h-[29px] items-start relative shrink-0 w-full" data-name="column-set">
      <SlotColumnUnit9 />
      <Container17 />
      <SlotColumnUnit10 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[26px] items-start min-w-px relative" data-name="Container">
      <ColumnSet6 />
      <ColumnSet7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[25.92px] relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-black content-stretch flex h-[367.98px] items-start relative shrink-0 w-[1920px]" data-name="Background">
      <Container15 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[120px] items-start relative shrink-0 w-full">
      <Cta2 />
      <Background />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="landing page">
      <Hero />
      <PastEvent />
      <PastEvent1 />
      <Cta />
      <PastEvent2 />
      <Cta1 />
      <Frame20 />
    </div>
  );
}