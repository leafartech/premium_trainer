type CardProps = {
  icon: any;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="py-3 w-full flex flex-col justify-center items-start">
      <div className="flex space-x-1 items-center text-brandRed-500">
        {icon}
        <h3 className="text-2xl font-medium">{title}</h3>
      </div>
      <p className="text-zinc-300 text-lg ms-10">{description}</p>
    </div>
  )
}

export default Card