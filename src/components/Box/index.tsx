type BoxProps = {
  icon: any;
  boxTitle: string;
  boxDescription: string;
}
const Box = ({ icon, boxTitle, boxDescription }: BoxProps) => {
  return (
      <div id="box" className="flex flex-col p-4 border-gradient justify-center">
        <div className="flex text-brandRed-500 justify-start space-x-2 items-center">
          {icon}
          <h2 className="text-2xl">{boxTitle}</h2>
        </div>
        <p className="text-zinc-300 mt-3 text-justify">{boxDescription}</p>        
      </div>
  )
}

export default Box