import CardButton from "../button/Card_Button"
import LeadCard from "../components/cards/LeadCard"
import Header from "../components/layout/Header"
import StatCard from "../components/stats/StatCard"
import {stats,leads} from "../data/EmpData"


function Routeconf() {
  return (
    <>
    <Header/>
    <div className="max-w-2xl mx-auto ">
    
      <div className="flex gap-3 mb-6">
        {stats.map((stat, index)=>(
          <StatCard key={index} {...stat} />
        ))}
      </div>
      <CardButton/>
      <div className="space-y-6">
        {leads.map((lead , index)=>(
          <LeadCard key={index} lead={lead} />
        ))}
      </div>
    </div>

    </>
  )
}

export default Routeconf;
