import React from 'react'
import TestimonyCards from '../components/TestimonyCards'
import TestimonyContent from '../components/TestimonyContent'
const Testimony = () => {
  return (
      <section className=' py-[4rem] lg:py-[6rem]'>
          <TestimonyContent />

          {/* Testimony Cards */}
          <TestimonyCards />
      </section>
  );
}

export default Testimony