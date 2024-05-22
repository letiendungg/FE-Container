import { Banner } from 'flowbite-react';
import React from 'react';
import Layout from "./Layout/Layout";

function AboutUs() {
  return (
    <Layout>
      <div className='w-full overflow-x-hidden'>
        <Banner />
        <h2 className="text-2sm text-center opacity-50">About us</h2>
        <h1 className="text-4xl font-bold text-center">Our Company</h1>
        <div className="w-10 my-4 border-b-4 border-subMain mx-auto mb-4"></div>
        <div className='w-full'>
          <p className="mx-8 my-4">
            280 modern ships, 11.9 million TEU (Twenty-foot Equivalent Unit) transported per year, 16,600 motivated employees in more than 400 offices in 140 countries. Hapag-Lloyd is a leading global liner shipping company and a powerful partner for you.
          </p>
          <p className='mx-8 my-4 font-bold text-xl'>
            Explore the World of Hapag-Lloyd!
          </p>
          <p className='mx-8 my-4'>
            Our corporate film shows Hapag-Lloyd’s global shipping activities emphasizing our worldwide services, high quality and environmental standards as well as our historical roots.
          </p>

          <div className="mx-auto my-8 w-2/3">
            <img className='w-full' src='https://static-cf.hapag-lloyd.com/content/website/en/services-information/_jcr_content/par/containermodule_b20c/cmpar/x_column_1354/x_column_element_a29/xcolumnpar/image_d67e/desktop.image.img.transform/content-desktop/c-1661355137878.jpg/a-1661355081252.jpg/HLAG_Teaser_Vienna_Express_220212.jpg' />
          </div>
        </div>
        <div className="my-4 border-b-2 border-dryGray mb-4 mx-2.5"></div>
        <h1 className="text-4xl font-bold text-center">Our Strategy</h1>
        <div className="w-10 my-4 border-b-4 py-2 border-subMain mx-auto mb-4"></div>
        <div className='flex flex-row w-full mx-2.5 py-4'>
          <img className='w-1/2' src='https://static-cf.hapag-lloyd.com/content/website/en/company/_jcr_content/par/containermodule_485c/cmpar/x_column_e580/x_column_element_55d/xcolumnpar/image_559b/desktop.image.img.transform/content-desktop/c-1715771827980.jpg/a-1713249171052.jpg/HLAG_Tangier_Express_open.jpg' />
          <div className='w-1/2 p-4 flex flex-col'>
            <div className='mx-4'>
              In 2024, we launched our new Strategy 2030 and adapted our strategic course to new challenges and opportunities in the market. With our Strategy 2030, we are building on our previous successes while following our ambition to be the “undisputed number one for quality” for our customers.
            </div>
            <button className='w-1/5 py-2 mx-2 my-5 border-4 text-white font-bold bg-subMain hover:bg-subMain rounded-lg'>
              Learn more
            </button>
          </div>
        </div>

        <div className="my-4 border-b-2 border-dryGray mb-4 mx-2.5"></div>
        <h1 className="text-4xl font-bold text-center">Sustainability</h1>
        <div className="w-10 my-4 border-b-4 py-2 border-subMain mx-auto mb-4"></div>
        <div className='flex flex-row w-full mx-2.5 py-4'>
          <div className='w-1/2 p-4 flex flex-col'>
            <div className='mx-4'>
              <p className=''>At Hapag-Lloyd, Sustainability is an integral part of our quality leadership, which is focused on respecting our planet, valuing people, and enabling prosperity.</p>

              <p className='py-6'>As a leader in our industry, we consistently pursue this course to promote positive change and create a livable environment.</p>

              <p> Join us on the journey of an even more sustainable future of Hapag-Lloyd!</p>
            </div>
            <button className='w-1/5 py-2 mx-2 my-5 border-4 text-white font-bold bg-subMain hover:bg-subMain rounded-lg'>
              Learn more
            </button>
          </div>
          <img className='w-1/2' src='https://static-cf.hapag-lloyd.com/content/website/en/company/_jcr_content/par/containermodule_c124/cmpar/x_column_9d84/x_column_element_f42/xcolumnpar/image_6bff/desktop.image.img.transform/content-desktop/c-1661353586342.jpg/a-1661345873598.jpg/HLAG_Teaser_Sustainability_1003898.jpg' />
        </div>
        <div className="my-4 border-b-2 border-dryGray mb-4 mx-2.5"></div>
        <h2 className="text-2sm text-center opacity-50">Lookout Newsletter</h2>
        <h1 className="text-4xl font-bold text-center">Welcome to the world of Hapag-Lloyd</h1>
        <div className="w-10 my-4 border-b-4 py-2 border-subMain mx-auto mb-4"></div>
        <div class="flex flex-row w-full mx-2.5 py-4 relative">
          <div class="w-1/4 p-4 flex flex-col">
          </div>
          <div class="relative w-3/4">
            <div class="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-bgOur  z-10">
              <div className='mx-8 mt-10'>
              <p className='text-white text-xl font-bold'>From Sea to Sky: Special <p className='flex flex-col'>Cargo Team ships <p className='flex flex-col'></p> Helicopter to Chile<p/></p></p>
              <button class="w-1/4 py-2 mt-2 text-white font-bold bg-subMain hover:bg-subMain rounded-lg">
                Learn more
              </button>
              </div>
            </div>
            <img class="w-full" src="https://static-cf.hapag-lloyd.com/content/website/en/company/_jcr_content/par/fullwidthcarousel_8d/newsteasers/newsteaser_560a/desktop.image.img.transform/news-teaser-desktop/c-1715771333450.jpg/a-1715771285011.jpg/Special_Cargo_2024_1.jpg" />
          </div>
        </div>
        <div className="my-4 border-b-2 border-dryGray mb-4 mx-2.5"></div>
      </div>
    </Layout>
  );
}

export default AboutUs;