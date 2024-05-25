const Page = ({ params }: { params: { reservationid: string } }) => {
  const id = params.reservationid
  return <h1>Reservation for {id}</h1>
}

export default Page
