import CardPartner from './components/CardPartner'

function PartnersHome() {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-title2'>MEDIOS ALIADOS</h2>
      <div className='flex flex-col gap-2'>
        <CardPartner/>
        <CardPartner/>
        <CardPartner/>
        <CardPartner/>
        <CardPartner/>
        <CardPartner/>
        <CardPartner/>
        <CardPartner/>
        <CardPartner/>
        <CardPartner/>
      </div>
    </div>
  )
}

export default PartnersHome