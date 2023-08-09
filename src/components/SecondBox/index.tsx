type SecondBoxProps = {
  titleBox: string
  descriptionBox: string
}


const SecondBox = ({ titleBox, descriptionBox  }: SecondBoxProps) => {
  return (
    <div className="w-full second-box-gradient py-8">
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="text-5xl text-brandWhite font-bold">+{titleBox}</span>
        <span className="text-brandRed-400 font-medium">{descriptionBox}</span>
      </div>
    </div>
  )
}

export default SecondBox