import React from 'react';
import TextBox from './TextBox';

const Price = () => {
  const Plans = [
    {
      id: 1,
      name: 'Basic Plan',
      price: 29,
      features: ['CRM Auto Sync', 'Click to Call Back', 'Track Energy Costs', 'Predictive Dialing']
    },
    {
      id: 2,
      name: 'Advanced Plan',
      price: 49,
      features: ['All Basic Plan Features', 'Advanced Call Routing', 'AI-Powered Insights', 'Multi-User Support']
    },
    {
      id: 3,
      name: 'Premium Plan',
      price: 99,
      features: ['All Advanced Plan Features', 'Priority Support', 'Custom Integrations', 'Unlimited Access']
    }
  ];

  return (
    <div className='pt-16 pb-16 bg-gray-100 dark:bg-gray-950 py-2 md:px-8 md:py-8 my-10'>
      <div className='max-w-6xl mx-auto py-10 px-6 sm:px-12 text-center'>
        <div className='mx-auto w-fit'>
          <TextBox text='Pricing' />
        </div>
        <h1 className='text-xl sm:text-2xl md:text-3xl my-2 text-gray-800 dark:text-gray-200 font-semibold'>
          Our Best Pricing Plan
        </h1>
        <p className='text-sm md:text-base font-medium text-gray-700 max-w-xl mx-auto dark:text-gray-500'>
          Choose the perfect plan that fits your needs. Whether you’re looking for essential features, advanced tools,
          or premium benefits, we have a plan designed for you.
        </p>
        <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-10'>
          {Plans.map((plan) => (
            <div
            data-aos="fade-left"  data-aos-anchor-placement="top-center" data-aos-delay="0"
              key={plan.id}
              className='shadow-lg rounded-lg dark:border-none border border-gray-200 bg-white dark:bg-blue-950 p-6 text-center sm:text-left flex flex-col items-center '
            >
              <h1 className='text-xl sm:text-2xl md:text-3xl my-2 text-gray-800 dark:text-gray-200 font-semibold text-center sm:text-left'>
                {plan.name}
              </h1>
              <h2 className='text-black mt-8'>
                <span className='text-orange-500 font-semibold text-2xl'>${plan.price}</span>/month
              </h2>
              <div className='flex flex-col space-y-4 mt-6 mx-auto items-center sm:mx-0 w-full'>
                {plan.features.map((feature, index) => (
                  <p key={index} className='text-gray-400 pb-3 mb-4 border-b-2 border-opacity-15 text-center sm:text-left'>
                    {feature}
                  </p>
                ))}
              </div>
              {/* Button */}
              <a
                href='#_'
                className='relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mt-4'
              >
                <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56'></span>
                <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
                <span className='relative'>Download</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
