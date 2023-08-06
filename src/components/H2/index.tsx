type H2Props = {
  textWhite: string;
  textRed: string;
}
const H2 = ({ textWhite, textRed }: H2Props) => {
  return (
    <h2 className="font-bold text-brandWhite text-3xl">
      {textWhite}{" "}
      <span className="text-brandRed-500 uppercase">{textRed}</span>
    </h2>
  )
}

export default H2
