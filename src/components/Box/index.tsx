type BoxProps = {
  icon: any;
  boxTitle: string;
  boxDescription: string;
}
const Box = ({ icon, boxTitle, boxDescription }: BoxProps) => {
  return (
      <div className="flex flex-col w-11/12 p-4 border-gradient justify-center">
        <div className="flex text-brandRed-500 justify-start space-x-2 items-center">
          {icon}
          <h2 className="text-xl">{boxTitle}</h2>
        </div>
        <p className="text-brandWhite">{boxDescription}</p>        
      </div>
  )
}

export default Box