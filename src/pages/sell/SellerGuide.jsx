import React from 'react';
import Header from "../../components/header/Header"
import Footer from '../../components/footer/Footer';
const SellerGuide = () => {
    return (


        <>
            <Header />
            <div className='bg-black flex justify-center items-center text-white  w-full bg-cover bg-no-repeat h-56' style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }} >
            
                <div>
                    <h1 className='text-2xl lg:text-6xl font-[400] mb-4 text-[#C5B351] '>Seller’s Guide</h1>
                    <p className='text-white lg:text-xl text-center font-normal font-prata  tracking-tight'>Get To Know Our Talented Team.</p>
                </div>

            </div>


            <div className="container mx-auto py-6 lg:py-20 px-4 lg:px-10">

                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                       <p className='text-xl  font-normal mb-8'>Selling your home is a complex, multi-step process that calls for the expertise of a REALTOR®. There are many things you’ll need to consider, and to help you through it, here’s a general overview on what to expect and prepare.</p>

                        <h2 className=" text-xl lg:text-2xl font-normal text-[#C5B351]">Get Your Finances In Order</h2>
                        <p className="text-base leading-relaxed">
                            The first thing you’ll need to do is put money aside for a down payment. This amount is (at minimum) 5% of the purchase price of the home you’re planning to buy. Second, you’ll need to meet with a mortgage broker to determine what you can afford. Shopping around for the best rate is highly recommended.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl lg:text-2xl font-normal mb-4 text-[#C5B351]">Visualize Your Dream Home</h2>
                        <p className="text-base leading-relaxed">
                            Once you’ve established a price range, it’s time to decide what type of home will best suit your lifestyle. Think about things like access to schools, recreational facilities, what the neighbourhood is like, and so on. Why you’re choosing to buy should help answer these questions for you — so think about it carefully. You may want to put this down in writing and create a needs v/s wants list.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl lg:text-2xl font-normal mb-4 text-[#C5B351]">Meet With a REALTOR®</h2>
                        <p className="text-base leading-relaxed">
                            It’s important to partner with a REALTOR® you feel completely comfortable with. A REALTOR® can help you find your dream home, that meets both your needs and your budget. They will set you up with viewing appointments, and also help bring clarity to the complicated process of buying a home. You’ll want to go with an experienced and knowledgeable REALTOR® who you can be sure will represent your best interests.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl lg:text-2xl font-normal mb-4 text-[#C5B351]">The Search</h2>
                        <p className="text-base leading-relaxed">
                            Using the property search on this site and consulting with your REALTOR®, you will be able to find homes in your desired area. They’ll update you frequently regarding new listings and schedule you appointments with sellers.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl lg:text-2xl font-normal mb-4 text-[#C5B351]">Closing</h2>
                        <p className="text-base leading-relaxed">
                            Your REALTOR® can help you place an offer that the seller will either accept, counter, or reject. After you’ve negotiated an offer, you’ll need to conduct a home inspection and deal with any repairs (the cost of which you can also negotiate with the seller). Finalize your mortgage with a visit to your lender, and you’re ready to sign off on ownership. This typically takes place in a lawyer’s office.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
}

export default SellerGuide;
