type QuoteProps = {
  Citation: string
  firstWord: string
}

const Quote = ({ Citation, firstWord }: QuoteProps) => {
  return (
    <div className="w-full flex flex-col justify-center max-w-2xl">
      <div className="flex relative my-3">
        <div className="absolute top-0 left-0">
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0909092 16V11.9091C0.0909092 10.6667 0.310606 9.34848 0.75 7.95454C1.20455 6.54545 1.85606 5.18939 2.70455 3.88636C3.56818 2.56818 4.60606 1.42424 5.81818 0.454544L8.72727 2.81818C7.77273 4.18182 6.93939 5.60606 6.22727 7.09091C5.5303 8.5606 5.18182 10.1364 5.18182 11.8182V16H0.0909092ZM11.7273 16V11.9091C11.7273 10.6667 11.947 9.34848 12.3864 7.95454C12.8409 6.54545 13.4924 5.18939 14.3409 3.88636C15.2045 2.56818 16.2424 1.42424 17.4545 0.454544L20.3636 2.81818C19.4091 4.18182 18.5758 5.60606 17.8636 7.09091C17.1667 8.5606 16.8182 10.1364 16.8182 11.8182V16H11.7273Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        <div>
          <p className="text-zinc-300 md:text-xl text-justify italic">
            <span className="ms-8">{firstWord} </span>
            {Citation}
          </p>
        </div>
        <div className="absolute bottom-0 right-0">
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.63636 0.454544V4.54545C8.63636 5.78788 8.40909 7.11363 7.95455 8.52273C7.51515 9.91667 6.86364 11.2727 6 12.5909C5.15152 13.8939 4.12121 15.0303 2.90909 16L0 13.6364C0.954545 12.2727 1.7803 10.8561 2.47727 9.38636C3.18939 7.90151 3.54545 6.31818 3.54545 4.63636V0.454544H8.63636ZM20.2727 0.454544V4.54545C20.2727 5.78788 20.0455 7.11363 19.5909 8.52273C19.1515 9.91667 18.5 11.2727 17.6364 12.5909C16.7879 13.8939 15.7576 15.0303 14.5455 16L11.6364 13.6364C12.5909 12.2727 13.4167 10.8561 14.1136 9.38636C14.8258 7.90151 15.1818 6.31818 15.1818 4.63636V0.454544H20.2727Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </div>
      </div>
      <div className="relative flex w-full items-center justify-end px-2">
        <span className="text-brandWhite md:text-base text-sm flex items-center relative before:w-8 before:md:w-10 before:h-[2px] before:bg-white before:absolute before:rounded-lg before:-left-9 before:md:-left-11">
          João Navarro
        </span>
      </div>
    </div>
  )
}

export default Quote
