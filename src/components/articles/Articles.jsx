import React from 'react'
import Article from '../article/Article'

export default function Articles() {
  return (
    <div className='w-full h-auto bg-light-gray py-24 px-10 lg:px-32'>
      <h3 className='text-5xl text-dark-blue'>Latest Articles</h3>
      <div className='mt-10 grid grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-y-10 lg:gap-x-10'>
        <Article imgUrl='images/image-currency.jpg' byWho='By Claire Robinson' title='Receive money in any currency with no fees' content='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …' />
        <Article imgUrl='images/image-restaurant.jpg' byWho='By Wilson Hutton' title='Treat yourself without worrying about money ' content='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …' />
        <Article imgUrl='images/image-plane.jpg' byWho='By Wilson Hutton' title='Take your Easybank card wherever you go' content='We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …' />
        <Article imgUrl='images/image-confetti.jpg' byWho='By Claire Robinson' title='Our invite-only Beta accounts are now live!' content='After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... ' />
      </div>
    </div>
  )
}
