import SkillCard from "../../Components/SkillCard";

import { info } from "../../Data/skills";



const Home = () => {

  return (
    <section className='p-4 '>
     <div className="flex flex-wrap">
     {
      info.map(item => <SkillCard key={item.name} {...item}/>)
    }
     </div>
    </section>
  )
}
export default Home;