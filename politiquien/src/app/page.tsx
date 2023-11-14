import ArticleHome from "@/components/Pages/Home/ArticleHome";
import FrontPageHome from "@/components/Pages/Home/FrontPageHome";
import NewsHome from "@/components/Pages/Home/NewsHome";
import PartnersHome from "@/components/Pages/Home/PartnersHome";
import PoliticheckHome from "@/components/Pages/Home/PoliticheckHome";

export default function Home(){
  return(
    <div className="flex flex-col gap-6">
      <FrontPageHome/>
      <PoliticheckHome/>
      <ArticleHome/>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <NewsHome/>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="h-full flex flex-col md:flex-row-reverse lg:flex-col gap-6">
            <div className="md:basis-1/2 lg:basis-full basis-full bg-fill-quaternary rounded-xl">
            </div>
            <div className="md:basis-1/2 lg:basis-full basis-full">
              <PartnersHome/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}