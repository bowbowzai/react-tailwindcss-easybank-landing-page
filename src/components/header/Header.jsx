
export default function Header() {

  return (
    <div className='flex flex-col flex-col-reverse lg:grid lg:grid-col-30-40 lg:grid-rows-1 w-full h-auto lg:h-150 mt-24'>

      {/* left */}
      <div className='w-full flex flex-col items-center justify-center py-20 px-10 lg:px-20'>
        <h2 className='text-2xl lg:text-6xl text-dark-blue leading-right'>Next generation digital banking</h2>
        <p className='mt-10 text-center lg:text-left text-base lg:text-lg text-gray-400'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <a href="" className='inline-block self-start mt-10 font-bold text-white py-2 px-5 bg-gradient-to-r from-lime-green to-bright-cyan rounded-full transition duration-200 self-center lg:self-start hover:opacity-80'> Request Invite</a>
      </div>
      {/* right */}
      <div style={{ backgroundImage: 'url("images/bg-intro-desktop.svg")' }} className='h-96 lg:h-auto w-full relative bg-intro bg-left'>
        <img src="images/image-mockups.png" alt="" className='absolute transform -translate-x-1/2 left-1-2 bottom-0 lg:translate-x-0 lg:bottom-auto lg:left-auto lg:-top-32 lg:-right-32 hidden-top w-96 lg:w-auto' />
      </div>
    </div>
  )
}
