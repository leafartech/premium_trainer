import Image from 'next/image'

interface SecondCardProps {
  title: string
}

const SecondCard = ({ title }: SecondCardProps) => {
  return (
    <div className="py-2 space-y-2 w-full flex flex-col justify-center items-start">
      <div className="w-full flex space-x-2 items-center ">
        <Image
          src="/images/checkIcon.png"
          alt="Check icon"
          width={24}
          height={24}
          quality={100}
        />
        <p className="text-md md:text-xl text-zinc-300 text-left">{title}</p>
      </div>
    </div>
  )
}

export default SecondCard
