import Banner from "@/components/banner";
import FeaturedImages from "@/components/featured-images";
import Header from "@/components/header";
import { Images } from "@/components/images/images";
import React from "react";

const DashboardPage = () => {
    const allImages = Images

    return (
        <div className=" relative h-screen bg-transparent  lg:h-[140vh]">

            <Header />
            <main className='relative px-4 md:pr-8 pb-24 lg:space-y-24 lg:pl-16'>

                <Banner />
            </main>
            <section className=' '>

                <FeaturedImages allImages={allImages} />
            </section>
        </div>
    );
};

export default DashboardPage;
