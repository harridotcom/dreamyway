import Hero from '../components/Hero'
import SearchTabs from '../components/SearchTabs'
import Services from '../components/Services'
import FeaturedPackages from '../components/FeaturedPackages'
import Destinations from '../components/Destinations'
import WhyUs from '../components/WhyUs'
import VisaSection from '../components/VisaSection'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home({ onEnquire }) {
  return (
    <>
      <Hero onEnquire={onEnquire} />
      <SearchTabs />
      <Services />
      <FeaturedPackages onEnquire={onEnquire} />
      <Destinations onEnquire={onEnquire} />
      <WhyUs />
      <VisaSection onEnquire={onEnquire} />
      <Testimonials />
      <Footer onEnquire={onEnquire} />
    </>
  )
}
