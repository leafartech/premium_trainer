type CardProps = {
  icon: any;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="p-3 space-y-2 w-full flex flex-col justify-center items-start">
      <div className="w-4/5 flex space-x-1 items-center text-brandRed-500">
        {icon}
        <h3>{title}</h3>
      </div>
      <p className="text-brandWhite text-xl">{description}</p>
    </div>
  )
}

export default Card